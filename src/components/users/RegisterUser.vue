<template>
    <section>
        <div class="container">
            <form ref="form">
                <h2 class="mt-3 mt-lg-5"> Register User</h2>
                <h5 class="mb-4"></h5>

                <div class="input-group mb-3">
                    <span class="input-group-text">First Name</span>
                    <input type="text" class="form-control" v-model="user.firstName" />
                </div>

                <div class="input-group mb-3">
                    <span class="input-group-text">Last Name</span>
                    <input type="text" class="form-control" v-model="user.lastName" />
                </div>

                <div class="input-group mb-3">
                    <span class="input-group-text">Username</span>
                    <textarea class="form-control" v-model="user.username"></textarea>
                </div>

                <div class="input-group mb-3">
                    <span class="input-group-text">Password</span>
                    <textarea class="form-control" v-model="user.password"></textarea>
                </div>

                <div class="input-group mb-3">
                    <span class="input-group-text">Confirm password</span>
                    <textarea class="form-control" v-model="user.confirm_password"></textarea>
                </div>

                <div class="input-group mt-4">
                    <button type="button" class="btn btn-primary" @click="registerUser">
                        Register user
                    </button>
                    <button type="button" class="btn btn-danger" @click="this.$router.push('/users')">
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    </section>
</template>
  
<script>
import axios from "axios";

export default {
    name: "RegisterUser",
    data() {
        return {
            user: {
                firstName: "",
                lastName: "",
                username: "",
                password: "",
                confirm_password: "",
            },
        };
    },

    methods: {
        registerUser() {
            axios
                .post("http://localhost/auth/register", this.user)
                .then((res) => {
                    console.log(res.data);
                    this.$refs.form.reset();
                    this.$router.push("/users");
                })
                .catch((error) => console.log(error));
        },
    },
};
</script>
  