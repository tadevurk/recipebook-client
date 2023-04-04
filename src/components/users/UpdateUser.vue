<template>
    <section>
        <div class="container">
            <form ref="form">
                <h2 class="mt-3 mt-lg-5">Update User</h2>
                <h5 class="mb-4"></h5>
            </form>

            <div class="input-group mb-3">
                <span class="input-group-text">First Name</span>
                <input type="text" class="form-control" v-model="user.firstname" />
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text">Last Name</span>
                <input type="text" class="form-control" v-model="user.lastname" />
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text">User Name</span>
                <textarea class="form-control" v-model="user.username"></textarea>
            </div>

            <div class="input-group mt-4">
                <button type="button" class="btn btn-primary" @click="updateUser">
                    Save changes
                </button>
                <button type="button" class="btn btn-danger" @click="this.$router.push('/users')">
                    Cancel
                </button>
            </div>

        </div>

    </section>
</template>

<script>
import axios from "axios";

export default {
    name: "UpdateUser",
    data() {
        return {
            user: {
                firstname: "",
                lastname: "",
                username: ""
            }
        }
    },
    methods: {
        updateUser() {
            axios
                .put("http://localhost/users/" + this.user.id, this.user)
                .then((res) => {
                    console.log(res.data);
                    this.$refs.form.reset();
                    this.$router.push("/users");
                })
                .catch((err) => {
                    console.log(err);
                });
        },
    },
    mounted() {
        this.id = this.$route.params.id;
        axios
            .get("http://localhost/users/" + this.id)
            .then((result) => {
                console.log(result);
                this.user = result.data;
            })
            .catch((err) => {
                console.log(err);
            });
    }
};
</script>

