<template>
    <div class="table-responsive">
        <table class="table table-striped">
            <thead class="text-center">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">User Name</th>
                    <th scope="col">Role</th>
                    <th></th>
                </tr>
            </thead>

            <tbody class="text-center">
                <tr>
                    <td>{{ user.id }}</td>
                    <td>{{ user.firstname }}</td>
                    <td>{{ user.lastname }}</td>
                    <td>{{ user.username }}</td>
                    <td>{{ user.role }}</td>
                    <td>
                        <button class="btn btn-warning" @click="updateUser(user.id)">Update</button>&nbsp;&nbsp;
                        <button class="btn btn-danger" @click="deleteUser(user.id)">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
  
  
  
<script>
import axios from 'axios';

export default {
    name: 'UserListItem',
    props: {
        user: Object,
    },
    methods: {
        deleteUser(id) {
            axios
                .delete("http://localhost/users/" + id)
                .then((result) => {
                    console.log(result);
                    this.$emit('update')
                })
                .catch((error) => console.log(error));
        },
        updateUser(id) {
            this.$router.push('/users/' + id);
        }
    },
};
</script>
  