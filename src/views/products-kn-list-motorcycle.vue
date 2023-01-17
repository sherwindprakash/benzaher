<template>
  <section v-if="errored">
    <p>
      We're sorry, we're not able to retrieve this information at the moment, please try
      back later
    </p>
  </section>

  <section v-else style="background-color: white">
    <div v-if="loading">
      <div class="loading loading-lg"></div>
    </div>

    <div v-else>
      <div class="productsHolder" v-if="info">
        <h1
          style="
            font-size: 30px;
            font-style: italic;
            font-weight: bold;
            text-transform: uppercase;
            margin-top: 20px;
            color: rgb(56 54 54);
            text-align: center;
          "
        >
          K&N - Motorcycle
        </h1>

        <div class="columns" style="color: #383636">
          <div class="column col-12 text-center">
            <img src="../assets/products/K--N-logo.svg" class="IMGHolder" />
          </div>
        </div>

        <div
          class="columns"
          style="color: #383636; display: flex; flex-direction: row-reverse"
        >
          <div
            class="column col-3 col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-3"
            v-for="(make, index) in makes"
            :key="index"
          >
            <router-link
              :to="`/products-&-services/products/kn/motorcycle/` + make"
              class="ProductURL column col-3 col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-3"
            >
              {{ make.replaceAll("_", " ") }}
            </router-link>
          </div>
        </div>

        <div class="columns" style="color: #383636; text-align: right; margin-top: 40px">
          <div class="column col-12">
            <router-link to="/products-&-services/products/kn" class="Back" title="Back">
              <span class="pic arrow-left"></span>
              Back
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      info: null,
      loading: true,
      errored: false,
      baseurl: "https://binzaher.com/",
    };
  },

  computed: {
    makes() {
      const makes = new Set();
      this.info.forEach((car) => makes.add(car.product_category_name));
      return Array.from(makes);
    },
  },

  mounted() {
    axios
      .get(
        "https://binzaher.com/api/api/collections/get/products?token=b8766574e1a92b4e6296441248669c&filter[brand]=kn&filter[sub_category]=motorcycle"
      )
      .then((response) => {
        this.info = response.data.entries;
        console.log(response.data.entries);
      })
      .catch((error) => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  },
};
</script>

<style scoped>
.pic {
  margin: 5px;
  display: inline-block;
  vertical-align: middle;
  width: 0;
  height: 0;
}
.arrow-left {
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-right: 15px solid #383636;
}
.productsHolder {
  max-width: 1280px;
  margin: auto;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 80px;
  padding-bottom: 100px;
}
img.IMGHolder {
  width: 300px;
  height: auto;
  margin: auto;
  display: block;
  margin-top: 30px;
  margin-bottom: 30px;
}
a.ProductURL {
  border: 2px solid;
    padding: 5px;
    width: 100%;
    text-align: center;
    font-size: 19px;
    color: #383636;
    margin-top: 10px;
    text-transform: capitalize;
    height:auto;
    display: flex;
    justify-content: center;
    align-items: center;
}
@media only screen and (max-width: 600px) {
  .productsHolder {
    padding-top: 20px;
  }
  img.IMGHolder {
    width: 90%;
    height: auto;
    margin: auto;
    display: block;
    margin-top: 30px;
    margin-bottom: 30px;
  }
}
</style>
