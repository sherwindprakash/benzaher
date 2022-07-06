<template>
  <section v-if="errored">
    <p>
      We're sorry, we're not able to retrieve this information at the moment, please try
      back later
    </p>
  </section>

  <section v-else>
    <div v-if="loading">Loading...</div>

    <div v-else style="position: relative">
      <!--  -->
      <div class="tile">
        <div class="tile-icon">
          <figure class="avatar avatar-lg">
            <img :src="'https://binzaher.com' + info.product_image.path" alt="Avatar" />
          </figure>
        </div>
        <div class="tile-content">
          <p class="tile-title" style="margin-bottom: 0">
            {{ info.product_name }}
          </p>
          <p class="tile-subtitle">
            {{ info.brand }}
          </p>
        </div>
      </div>
      <form @submit.prevent="Delete">
        <button type="submit" @submit.prevent="Delete" class="btn">&#9932;</button>
      </form>
      <!--  -->
    </div>
  </section>
</template>

<script>
import axios from "axios";
var notyf = new Notyf();

export default {
  data() {
    return {
      info: null,
      loading: true,
      errored: false,
    };
  },

  mounted() {
    axios
      .get(
        "https://binzaher.com/api/api/collections/entry/products/" +
          this.product +
          "?token=b8766574e1a92b4e6296441248669c"
      )
      .then((response) => {
        this.info = response.data;
        console.log("Product", response.data);
      })
      .catch((error) => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  },
  props: {
    product: String,
  },
  methods: {
    Delete: function () {
      //
      fetch(
        "https://binzaher.com/api/api/collections/remove/cart/?token=b8766574e1a92b4e6296441248669c",
        {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            filter: { product: this.product },
          }),
        }
      ).then((response) => {
        notyf.success("Product Removed.");
        window.setTimeout(function () {
          window.location.reload();
        }, 3000);
      });

      //
    },
  },
};
</script>

<style scoped>
.avatar.avatar-lg {
  height: 4.4rem;
  width: 4.4rem;
}
button.btn {
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: transparent;
  border: none;
}
</style>
