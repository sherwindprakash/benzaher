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
            margin-bottom: 50px;
          "
        >
          Spare Parts
          <h3
            style="
              text-transform: uppercase;
              font-weight: 700;
              display: inline;
              color: rgb(56 54 54);
            "
          >
            - {{ this.$route.params.productssub_category.replaceAll("_", " ") }}
          </h3>
        </h1>

        <div class="columns" style="padding-bottom: 100px">
          <div
            v-for="item in info"
            :key="item"
            class="column col-4 col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 text-center"
            style="position: relative"
          >
            <router-link
              :to="
                '/products-&-services/products/spare-parts/' +
                item.sub_category +
                '/' +
                item.product_category_name +
                '/' +
                item._id
              "
            >
              <div
                style="
                  height: 300px;
                  background-size: contain;
                  background-position: center;
                  background-repeat: no-repeat;
                  margin-bottom: 15px;
                "
                class="SlidBGImage"
                v-bind:style="{
                  backgroundImage:
                    'url(' + `https://binzaher.com/` + item.product_image.path + ')',
                }"
              ></div>
              <div>{{ item.product_name }}</div>

              <div class="price">
                <b>{{ item.price }} OMR</b>
              </div>
            </router-link>
          </div>
        </div>

        <div class="columns" style="color: #383636; text-align: right; margin-top: 40px">
          <div class="column col-12">
            <router-link
              to="/products-&-services/products/spare-parts"
              class="Back"
              title="Back"
            >
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
        "https://binzaher.com/api/api/collections/get/products?token=b8766574e1a92b4e6296441248669c&filter[brand]=spare_parts&filter[sub_category]=" +
          this.$route.params.productssub_category
      )
      .then((response) => {
        this.info = response.data.entries;
        console.log(this.$route.params.productssub_category, response.data.entries);
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
