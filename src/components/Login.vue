<!-- <template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div>
        <label for="username">Username:</label>
        <input type="text" name="username" v-model="username">
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" name="password" v-model="password">
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  </div>
</template> -->

<template>
  <section class="h-100 gradient-form" style="background-color: #eee;">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-xl-10">
          <div class="card rounded-3 text-black">
            <div class="row g-0">
              <div class="col-lg-6">
                <div class="card-body p-md-5 mx-md-4">

                  <div class="text-center">
                    <!-- <img src="/Homemade.png" style="width: 185px;" alt="logo"> -->
                    <h4 class="mt-1 mb-5 pb-1">Homemade Recipe</h4>
                  </div>

                  <form method="post" action="checkLogin">
                    <p>Please login to your editor/admin account</p>
                    <div class="form-outline mb-4">
                      <label for="username" class="form-label">Username:</label>
                      <input type="text" name="username" class="form-control" v-model="username">
                    </div>
                    <div class="form-outline mb-4">
                      <label for="password" class="form-label">Password:</label>
                      <input type="password" name="password" class="form-control" v-model="password">
                    </div>
                    <button type='button' class="btn btn-primary" @click="login()">Login</button>

                  </form>
                </div>
              </div>
              <div class="col-lg-6 d-flex align-items-center gradient-custom-2">
                <div class="text-white px-3 py-4 p-md-5 mx-md-4">
                  <h4 class="mb-4" style="color: black">Welcome to Homemade Recipe</h4>
                  <p class="small mb-0" style="color: black">Welcome to the Homemade Recipe admin and editor portal.
                    Here you can access and manage our collection of delicious and diverse recipes from all over the
                    world.
                    With our easy-to-use platform, you can add new recipes, and edit existing ones.
                    Sign in to your account and start managing our recipe collection today!
                  </p>
                  <div class="text-center mt-3">
                    <a href="recipes" class="btn btn-outline-secondary">Go to Homepage</a>
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
import { useUserStore } from "../stores/usersession";

export default {
  setup() {
    return {
      store: useUserStore()
    }
  },
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      errorMessage: ""
    };
  },
  methods: {
    login() {
      this.store.login(this.username, this.password)
        .then(() => {
          this.$router.push('/recipes');
        })
        .catch((error) => alert(error));
        // .catch((error) => this.errorMessage = error);
    }
  }
};
</script>


<style>
.gradient-custom-2 {
  /* fallback for old browsers */
  background: #8BC34A;

  /* Chrome 10-25, Safari 5.1-6 */
  background: -webkit-linear-gradient(to right, #8BC34A, #FDD835);

  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: linear-gradient(to right, #8BC34A, #FDD835);
}


@media (min-width: 768px) {
  .gradient-form {
    height: 100vh !important;
  }
}

@media (min-width: 769px) {
  .gradient-custom-2 {
    border-top-right-radius: .3rem;
    border-bottom-right-radius: .3rem;
  }
}
</style>