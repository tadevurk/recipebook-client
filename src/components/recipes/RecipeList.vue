<template>
  <section>
    <div class="container">
      <h1>Homemade Recipes</h1>
      <div class="form-group">
        <label for="cuisineSelect">Filter by Cuisine:</label>
        <select class="form-control" id="cuisineSelect" v-model="selectedCuisine">
          <option value="">Select Cuisine </option>
          <option v-for="cuisine in cuisines" :value="cuisine">{{ cuisine }}</option>
        </select>
      </div>

      <div class="form-group">
        <label for="recipeSearch">Search by Recipe Name:</label>
        <div class="input-group">
          <input type="text" class="form-control" id="recipeSearch" v-model="searchTerm"
            @input="getAutocompleteSuggestions" />
          <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button" @click="searchByRecipeName()">Search</button>
          </div>
        </div>
        <div class="autocomplete" v-if="showAutocomplete">
          <ul>
            <li v-for="(suggestion, index) in autocompleteSuggestions" :key="index" @click="selectSuggestion(suggestion)">
              {{ suggestion.name }}
            </li>
          </ul>
        </div>
      </div>



      <div class="container">
        <h2 class="mt-3 mt-lg-5">Recipes</h2>
        <button type="button" class="btn btn-primary mt-3" @click="this.$router.push('/createrecipe');">
          Add recipe
        </button>
        <div class="row mt-3">
          <div class="row mt-3">
            <recipe-list-item v-for="recipe in filteredRecipes" :key="recipe.id" :recipe="recipe"
              :ingredients="recipe.ingredients" @update="update" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
import axios from "axios";

import RecipeListItem from "./RecipeListItem.vue";

export default {
  name: "RecipeList",
  components: {
    RecipeListItem,
  },
  data() {
    return {
      recipes: [],
      selectedCuisine: '',
      searchTerm: '',
      autocompleteSuggestions: [],
      showAutocomplete: false,
    };
  },
  mounted() {
    this.update();
  },
  computed: {
    cuisines() {
      return [...new Set(this.recipes.map(recipe => recipe.cuisine))];
    },
    filteredRecipes() {
      if (this.selectedCuisine) {
        return this.recipes.filter(recipe => recipe.cuisine === this.selectedCuisine);
      } else {
        return this.recipes;
      }
    }
  },
  methods: {
    update() {
      axios
        .get("http://localhost/recipes")
        .then((result) => {
          this.recipes = result.data;

          // Iterate through each recipe and make a seperate get request for its ingredients
          this.recipes.forEach((recipe => {
            axios
              .get(`http://localhost/recipes/${recipe.id}/ingredients`)
              .then((result => {
                console.log(result);
                recipe.ingredients = result.data;
              }))
              .catch((error) => console.log(error));
          }))
        })
        .catch((error) => console.log(error));
    },
    getAutocompleteSuggestions() {
      axios
        .post(`http://localhost/recipes/autocomplete`, { name: this.searchTerm })
        .then((result) => {
          console.log(result);
          this.autocompleteSuggestions = result.data;
          this.showAutocomplete = true;
        })
        .catch((error) => console.log(error));
    },
    selectSuggestion(suggestion) {
      this.searchTerm = suggestion.name;
      this.showAutocomplete = false;
      this.searchRecipes();
    },
    searchByRecipeName() {
      this.recipes = this.recipes.filter(recipe => recipe.name.toLowerCase().includes(this.searchTerm.toLowerCase()));
    }
  },
};
</script>

<style>
.form-group {
  width: 40%;
}
</style>