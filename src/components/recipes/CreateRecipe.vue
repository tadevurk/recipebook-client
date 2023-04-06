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

                <div>
                    <div v-for="(ingredient, index) in recipe.ingredients" :key="index">
                        <input type="text" class="input" placeholder="Ingredient name" v-model="ingredient.name"
                            @input="getAutocompleteSuggestions(ingredient, index)" />
                        <input type="text" class="input" placeholder="Ingredient unit" v-model="ingredient.unit" />
                        <input type="text" class="input" placeholder="Ingredient quantity" v-model="ingredient.quantity" />

                        <div class="autocomplete" v-if="showAutocomplete[index]">
                            <ul>
                                <li v-for="(suggestion, i) in autocompleteSuggestions[index]" :key="i"
                                    @click="selectSuggestion(suggestion, ingredient, index)">
                                    {{ suggestion.name }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <button type="button" class="btn btn-primary" @click="addIngredient">
                    Add ingredient
                </button>

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
import { useUserStore } from '../../stores/usersession'

export default {
    name: "CreateRecipe",
    setup() {
        return {
            store: useUserStore(),
        };
    },
    data() {
        return {
            recipe: {
                name: "",
                cuisine: "",
                instructions: "",
                ingredients: []
            },
            autocompleteSuggestions: [],
            showAutocomplete: [],
        };
    },
    methods: {
        addIngredient() {
            this.recipe.ingredients.push({
                name: "",
                unit: "",
                quantity: ""
            });
            this.showAutocomplete.push(false);
        },
        getAutocompleteSuggestions(ingredient, index) {
            if (ingredient.name.length < 1) {
                this.showAutocomplete[index] = false;
                return;
            }

            axios
                .post("http://localhost/ingredients", {
                    name: ingredient.name
                })
                .then((result) => {
                    console.log(result);
                    this.autocompleteSuggestions[index] = result.data;
                    this.showAutocomplete[index] = true;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        selectSuggestion(suggestion, ingredient, index) {
            ingredient.name = suggestion.name;
            this.showAutocomplete[index] = false;
        },

        addRecipe() {
            axios
                .post("http://localhost/recipes", {
                    ...this.recipe,
                    user_id: this.store.userId
                })
                .then(response => {
                    console.log(response);
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
