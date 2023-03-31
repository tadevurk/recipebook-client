<template>
    <!-- <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xxl-3 p-2">
        <div class="card product-card h-100">
            <div class="card-body">
                <div class="float-start">
                    <p>{{ recipe.name }}</p>
                    <p>
                        <small>{{ recipe.instructions }}</small>
                    </p>
                </div>
                <span class="price float-end">{{ recipe.cuisine }}</span>
            </div>
            <div class="card-footer">
                <button class="btn btn-warning" @click="editRecipe(recipe.id)">Edit</button>&nbsp;&nbsp;
                <button class="btn btn-danger" @click="deleteRecipe(recipe.id)">Delete</button>
            </div>
        </div>
    </div> -->

</template>



<script>
import axios from "axios";

export default {
    name: "RecipeListItem",
    props: {
        recipe: Object,
    },
    methods: {
        deleteRecipe(id) {
            axios
                .delete("http://localhost/recipes/" + id)
                .then((result) => {
                    console.log(result);
                    this.$emit('update')
                })
                .catch((error) => console.log(error));
        },
        editRecipe(id) {
            this.$router.push('/editRecipe/' + id);
        }
    },
};

</script>