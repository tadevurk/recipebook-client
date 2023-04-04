<template>
    <section>
        <div class="container">
            <form ref="form">
                <h2 class="mt-3 mt-lg-5">Edit a Recipe</h2>
                <h5 class="mb-4"></h5>
            </form>

            <div class="input-group mb-3">
                <span class="input-group-text">Cuisine</span>
                <input type="text" class="form-control" v-model="recipe.cuisine" />
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text">Name</span>
                <input type="text" class="form-control" v-model="recipe.name" />
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text">Instruction</span>
                <textarea class="form-control" v-model="recipe.instructions"></textarea>
            </div>

            <ul>
                <li v-for="(ingredient, index) in recipe.ingredients" :key="index">
                    <div class="input-group mb-3">
                        <span class="input-group-text">Ingredient</span>
                        <input type="text" class="form-control" v-model="ingredient.name" />
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text">Quantity</span>
                        <input type="text" class="form-control" v-model="ingredient.quantity" />
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text">Unit</span>
                        <input type="text" class="form-control" v-model="ingredient.unit" />
                    </div>
                </li>
            </ul>

            <div class="input-group mt-4">
                <button type="button" class="btn btn-primary" @click="updateRecipe">
                    Save changes
                </button>
                <button type="button" class="btn btn-danger" @click="this.$router.push('/recipes')">
                    Cancel
                </button>
            </div>

        </div>

    </section>
</template>

<script>
import axios from "axios";

export default {
    name: "EditRecipe",
    data() {
        return {
            recipe: {
                id: '',
                name: "",
                cuisine: "",
                instructions: "",
                ingredients: [],
            },
            ingredients: []
        };
    },
    methods: {
        updateRecipe() {
            axios
                .put("http://localhost/recipes/" + this.recipe.id, this.recipe)
                .then((res) => {
                    console.log(res.data);
                    this.$refs.form.reset();
                    this.$router.push("/recipes");

                })
                .catch((error) => console.log(error));
        },
    },
    mounted() {
        this.id = this.$route.params.id;
        axios
            .get("http://localhost/recipes/" + this.id)
            .then((result) => {
                console.log(result);
                this.recipe = result.data;
                axios
                    .get(`http://localhost/recipes/${this.id}/ingredients`)
                    .then((result) => {
                        console.log(result);
                        this.recipe.ingredients = result.data;
                    })
                    .catch((error) => console.log(error));
            })
            .catch((error) => console.log(error));
    },

    computed: {
        ingredients() {
            return this.recipe.ingredients.map(ingredient => ingredient.name);
        }
    }
}
</script>
