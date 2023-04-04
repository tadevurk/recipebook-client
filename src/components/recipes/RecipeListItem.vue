<template>
    <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 p-2">
        <div class="card product-card h-100">
            <div class="card-body">
                <span class="price">{{ recipe.cuisine }}</span>

                <div class="float-start">
                    <h6>{{ recipe.name }}</h6>
                    <div class="mt-2">
                        <span class="font-weight-bold">Ingredients:</span>
                        <table class="table">
                            <thead>
                                <tr>
                                    <td>Quantity</td>
                                    <td>Unit</td>
                                    <td>Name</td>
                                </tr>
                            </thead>

                            <tbody v-for="ingredient in recipe.ingredients" :key="ingredient.id">
                                <tr>
                                    <td>{{ ingredient.quantity }}</td>
                                    <td>{{ ingredient.unit }}</td>
                                    <td>{{ ingredient.name }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p v-html="recipe.instructions.replace(/(?:\r\n|\r|\n)/g, '<br>')"></p>

                </div>


            </div>
            <div class="card-footer">
                <button class="btn btn-warning" @click="editRecipe(recipe.id)">Edit</button>&nbsp;&nbsp;
                <button class="btn btn-danger" @click="deleteRecipe(recipe.id)">Delete</button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "RecipeListItem",
    props: {
        recipe: Object
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
            this.$router.push('/recipes/' + id);
        }
    },
    computed: {
        ingredients() {
            return this.recipe.ingredients.map(ingredient => {
                return {
                    id: ingredient.id,
                    name: ingredient.name,
                    quantity: ingredient.quantity,
                    unit: ingredient.unit
                };
            });
        }
    }

};

</script>