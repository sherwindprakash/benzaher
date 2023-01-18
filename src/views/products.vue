<template>
  <section  style="background-color: white">
   
      <div class="productsHolder">
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
          PRODUCTS
        </h1>

        <div class="columns" style="color: #383636">
          <div
            class="column col-4 col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 text-center"
          >
            <router-link to="/products-&-services/products/motul/">
              <img src="../assets/products/motul-logo.svg" class="IMGHolder" />
            </router-link>
            <router-link to="/products-&-services/products/motul/" class="ProductURL">
              Categories
            </router-link>
          </div>

          <div
            class="column col-4 col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 text-center"
          >
            <router-link to="/products-&-services/products/kn/">
              <img src="../assets/products/K--N-logo.svg" class="IMGHolder" />
            </router-link>
            <router-link to="/products-&-services/products/kn/" class="ProductURL">
              Categories
            </router-link>
          </div>

          <div
            class="column col-4 col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 text-center"
          >
            <router-link to="/products-&-services/products/spare-parts/">
              <img src="../assets/products/car-with-spare-tire.svg" class="IMGHolder" />
            </router-link>
            <router-link
              to="/products-&-services/products/spare-parts/"
              class="ProductURL"
            >
            Categories
            </router-link>
          </div>
        </div>

        <div class="columns" style="color: #383636; text-align: right; margin-top: 40px">
          <div class="column col-12">
            <router-link to="/" class="Back" title="Back">
              <span class="pic arrow-left"></span>
              Back
            </router-link>
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
  
  components: {},
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
  color: black;
}

img.IMGHolder {
  width: 200px;
  height: 200px;
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
