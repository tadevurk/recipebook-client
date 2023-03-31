<template>
  <section>
    <div class="container">
      <h2 class="mt-3 mt-lg-5">Recipes</h2>
    </div>

    <div class="container mt-5">
      <div class="row mt-5">
        <div class="container mt-5">
          <div class="row">
            <div v-for="recipe in recipes" :key="recipe.id" class="col-md-6">
              <div class="card mb-3" style="width: auto;">
                <div class="card-header">
                  <h5 class="card-title" style="color: #17a2b8;">Recipe Name: {{ recipe.name }}</h5>
                  <p class="card-text">Cuisine: <em>{{ recipe.cuisine }}</em></p>
                </div>
                <div class="card-body">
                  <div class="col-md-8">
                    <h6 style="color: #17a2b8">Ingredients:</h6>
                    <table class="table">
                      <thead>
                        <tr>
                          <th>Unit</th>
                          <th>Quantity</th>
                          <th>Name</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="ingredient in recipe.ingredients" :key="ingredient.id">
                          <td>{{ ingredient.unit }}</td>
                          <td>{{ ingredient.quantity }}</td>
                          <td>{{ ingredient.name }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="col-md-12">
                    <h6 style="color: #17a2b8">Instructions:</h6>
                    <p class="card-text">{{ recipe.instructions }}</p>
                  </div>
                </div>
              </div>
            </div>
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
    };
  },
  mounted() {
    this.update();
  },
  methods: {
    update() {
      axios
        .get("http://localhost/recipes")
        .then((result) => {
          console.log(result);
          this.recipes = result.data;
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>