<template>
  <section>
    <div class="container">
      <h2 class="mt-3 mt-lg-5">Products</h2>
      <button type="button" class="btn btn-primary mt-3" @click="this.$router.push('/createproduct');">
        Add product
      </button>
      <div class="row mt-3">
        <product-list-item v-for="product in products" :key="product.id" :product="product" @update="update" />
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";

import ProductListItem from "./ProductListItem.vue";

export default {
  name: "ProductList",
  components: {
    ProductListItem,
  },
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    this.update();
  },
  methods: {
    update() {
      axios
        .get("http://localhost/products")
        .then((result) => {
          console.log(result);
          this.products = result.data;
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>

<!--CSS Style -->
<style>
table {
  width: 100%;
}

thead th {
  font-weight: bold;
}

tbody td {
  text-align: center;
}

@media only screen and (max-width: 600px) {
  thead {
    display: none;
  }

  tr:nth-of-type(2n) {
    background-color: inherit;
  }

  tr td:first-child {
    background: #f0f0f0;
    font-weight: bold;
    font-size: 1.3em;
  }

  tbody td {
    display: block;
    text-align: left;
  }

  tbody td:before {
    content: attr(data-th);
    font-weight: bold;
    display: block;
  }
}

.table {
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.1);
}

.btn {
  border-radius: 10px;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.1);
}

.btn-lg {
  padding: 0.75rem 1.5rem;
  font-size: 1.25rem;
  border-radius: 0.3rem;
}</style>