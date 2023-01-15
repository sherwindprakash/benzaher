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
          {{ info.title_en }}
        </h1>

        <div class="columns" style="color: #383636">
          <div class="column col-12 text-center">
            <img
              :src="'https://binzaher.com' + info.logo_holder[0].value.image.path"
              :alt="info.logo_holder[0].value.name"
              :title="info.logo_holder[0].value.name"
              class="IMGHolder"
            />
          </div>
        </div>

        <div class="columns" style="color: #383636">
          <div class="column col-3 col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
            <router-link
              to="/products-&-services/products/300VRange"
              class="ProductURL column col-3 col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-3"
              title="300V Range"
            >
              300V Range
            </router-link>
          </div>
        </div>

        <div class="columns" style="color: #383636; text-align: right; margin-top: 40px">
          <div class="column col-12">
            <router-link to="/products-&-services/products/" class="Back" title="Back">
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

  mounted() {
    axios
      .get(
        "https://binzaher.com/api/api/singletons/get/products?token=b8766574e1a92b4e6296441248669c"
      )
      .then((response) => {
        this.info = response.data;
        console.log(response.data);
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
  display: block;
  text-align: center;
  font-size: 19px;
  color: #383636;
  margin-top: 10px;
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
