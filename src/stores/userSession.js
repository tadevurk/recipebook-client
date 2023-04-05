import { defineStore } from 'pinia';
import axios from '../axios-auth';

export const useUserStore = defineStore('userSession', {
    state: () => ({
        jwt: '',
        username: ''
    }),
    getters: {
        isAuthenticated: (state) => state.jwt !== ''
    },
    actions: {
        localLogin() {
            if (localStorage["jwt"]) {
                this.jwt = localStorage["jwt"];
                this.username = localStorage["username"];
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

                    // These two lines are the same:
                    localStorage["jwt"] = this.jwt;
                    localStorage.setItem("username", this.username);

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
            localStorage.removeItem("jwt");
            localStorage.removeItem("username");
            axios.defaults.headers.common['Authorization'] = '';
        }
    }
});
