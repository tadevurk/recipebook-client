import { createRouter, createWebHistory } from 'vue-router'

import Home from '../components/Home.vue';
import ProductList from '../components/products/ProductList.vue';
import RecipeList from '../components/recipes/RecipeList.vue';
import UserList from '../components/users/UserList.vue';
import CreateProduct from '../components/products/CreateProduct.vue';
import EditProduct from '../components/products/EditProduct.vue';
import EditRecipe from '../components/recipes/EditRecipe.vue';
import Login from '../components/Login.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Home },
    { path: '/products', component: ProductList },
    { path: '/recipes', component: RecipeList },
    {path: '/users', component: UserList},
    { path: '/login', component: Login },
    { path: '/createproduct', component: CreateProduct },
    { path: '/editproduct/:id', component: EditProduct, props: true },
    { path: '/recipes/:id', component: EditRecipe, props: true}
  ]
})

export default router
