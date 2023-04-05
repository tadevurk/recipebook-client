import { createRouter, createWebHistory } from 'vue-router'

import Home from '../components/Home.vue';
import RecipeList from '../components/recipes/RecipeList.vue';
import UserList from '../components/users/UserList.vue';
import EditRecipe from '../components/recipes/EditRecipe.vue';
import UpdateUser from '../components/users/UpdateUser.vue';
import Login from '../components/Login.vue';
import RegisterUser from '../components/users/RegisterUser.vue';
import CreateRecipe from '../components/recipes/CreateRecipe.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Home },
    { path: '/recipes', component: RecipeList },
    { path: '/users', component: UserList },
    { path: '/login', component: Login },
    { path: '/createrecipe', component: CreateRecipe, props: true },
    { path: '/recipes/:id', component: EditRecipe, props: true },
    { path: '/users/:id', component: UpdateUser, props: true },
    { path: '/auth/register', component: RegisterUser, props: true }
  ]
})

export default router
