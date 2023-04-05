<template>
    <section class="section">
        <div class="container">
            <h1 class="title">Create a new recipe</h1>
            <form ref="form">
                <div class="input-group">
                    <label class="label">Name</label>
                    <input type="text" class="input" placeholder="Name" v-model="recipe.name" />
                </div>

                <div class="input-group">
                    <label class="label">Cuisine</label>
                    <input type="text" class="input" placeholder="Cuisine" v-model="recipe.cuisine" />
                </div>

                <div class="input-group">
                    <label class="label">Description</label>
                    <input type="text" class="input" placeholder="Instruction" v-model="recipe.instructions" />
                </div>

                <!-- input field for ingredient name, unit, quantity -->
                <div class="input-group">
                    <label class="label">Ingredients</label>
                    <input type="text" class="input" placeholder="Ingredient name" v-model="recipe.ingredients.name" />
                    <input type="text" class="input" placeholder="Ingredient unit" v-model="recipe.ingredients.unit" />
                    <input type="text" class="input" placeholder="Ingredient quantity"
                        v-model="recipe.ingredients.quantity" />
                </div>


                <div class="input-group mt-4">
                    <button type="button" class="btn btn-primary" @click="addRecipe">
                        Create recipe
                    </button>
                    <button type="button" class="btn btn-danger" @click="this.$router.push('/recipes')">
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
    name: "CreateRecipe",
    data() {
        return {
            recipe: {
                name: "",
                cuisine: "",
                instructions: "",
                ingredients:[]
            }
        };
    },
    methods: {
        addRecipe() {
            axios
                .post("http://localhost/recipes", this.recipe)
                .then(response => {
                    console.log(response.data);
                    this.$refs.form.reset();
                    this.$router.push('/recipes');
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }
};
</script>
