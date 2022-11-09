<template>
  <router-link class="Cart" to="/cart">
    <span v-if="cart" class="badge" :data-badge="cart.length">
      <img class="Cart" src="../assets/cart.svg" />
    </span>
  </router-link>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      cart: null,
    };
  },
  mounted() {
    axios
      .get(
        "https://binzaher.com/api/api/collections/get/cart?token=b8766574e1a92b4e6296441248669c&filter[user]=" +
          this.customersEmail
      )
      .then((response) => {
        this.cart = response.data.entries;
        //console.log("Cart", response.data.entries);
      });
  },
  computed: {
    customersEmail() {
      return sessionStorage.getItem("customersEmail");
    },
  },
};
</script>
