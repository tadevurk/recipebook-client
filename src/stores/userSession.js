import { defineStore } from 'pinia';
import axios from '../axios-auth';

export const useUserStore = defineStore('userSession', {
    state: () => ({
        jwt: '',
        username: '',
        userId: '',
        role: 0
    }),
    getters: {
        isAuthenticated: (state) => state.jwt !== ''
},
    actions: {
        localLogin() {
            if (localStorage["jwt"]) {
                this.jwt = localStorage["jwt"];
                this.username = localStorage["username"];
                this.userId = localStorage["userId"];
                this.role = localStorage["role"];

                axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.jwt;
                console.log("Logged in automatically");
            }
        },
        login(username, password) {
            return new Promise((resolve, reject) => {
                axios.post("/auth/login", {
                    username: username,
                    password: password
                }).then(result => {
                    this.jwt = result.data.token.jwt;
                    this.username = result.data.user.username;
                    this.role = result.data.user.role;
                    this.userId = result.data.user.id;

                    // These two lines are the same:
                    localStorage["jwt"] = this.jwt;
                    localStorage.setItem("username", this.username);
                    localStorage.setItem("role", this.role);
                    localStorage.setItem("userId", this.userId);

                    axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.jwt;
                    resolve();
                }).catch(error => {
                    console.log(error);
                    reject(error.response.data.errorMessage)
                });
            });
        },
        logout(){
            this.jwt = '';
            this.username = '';
            this.role = 0;
            this.userId = '';
            localStorage.removeItem("jwt");
            localStorage.removeItem("username");
            localStorage.removeItem("role");

            localStorage.removeItem("userId");
            axios.defaults.headers.common['Authorization'] = '';
        }
    }
});
