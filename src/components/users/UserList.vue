<template>
    <h1 class="text-center mt-3">Manage Editors</h1>
    <UserListItem v-for="user in users" :key="user.id" :user="user" @update="update" />
</template>

<script>
import axios from "axios";

import UserListItem from "./UserListItem.vue";

export default {
    name: "UserList",
    components: {
        UserListItem,
    },
    data() {
        return {
            users: [],
        };
    },
    mounted() {
        this.update();
    },
    methods: {
        update() {
            axios
                .get("http://localhost/users")
                .then((result) => {
                    console.log(result);
                    this.users = result.data;
                })
                .catch((error) => console.log(error));
        },
    },
};
</script>