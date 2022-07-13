<template>
  <section v-if="errored">
    <p>
      We're sorry, we're not able to retrieve this information at the moment, please try
      back later
    </p>
  </section>

  <section v-else style="background-color: white; color: #383636">
    <div v-if="loading">
      <div class="loading loading-lg"></div>
    </div>

    <div v-else>
      <div class="ProductSingleHolder">
        <div class="columns" style="padding-top: 20px; padding-bottom: 100px">
          <div class="column col-6 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <h1
              style="
                font-size: 25px;
                font-style: italic;
                font-weight: bold;
                text-transform: uppercase;
                margin: 0px;
              "
            >
              300 VRange
            </h1>
          </div>
          <div
            class="column col-6 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 rightholder"
          >
            <router-link class="Search" to="/Search">Search</router-link>
          </div>
        </div>

        <div class="columns" style="padding-bottom: 100px">
          <div
            v-for="item in info"
            :key="item"
            class="column col-4 col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 text-center"
            style="position: relative"
          >
            <Recommended :P0="item.Recommended" />
            <router-link
              style="color: black"
              class="MybtnNews"
              :to="'/products-&-services/products/' + item._id"
            >
              <div
                v-for="image in item.product_image"
                :key="image"
                class="SlidBGImage"
                v-bind:style="{
                  backgroundImage: 'url(' + baseurl + image + ')',
                }"
              ></div>
              <div>{{ item.product_name }}</div>
              <!-- <div class="product_code">
                {{ item.product_code }}
              </div> -->
              <div class="price">
                <b>{{ item.price }} OMR</b>
              </div>
            </router-link>
          </div>
        </div>

        <div
          class="columns"
          style="color: #383636; text-align: right; padding-bottom: 40px"
        >
          <div class="column col-12">
            <router-link
              to="/products-&-services/products/motul"
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
import Recommended from "@/components/Recommended.vue";

export default {
  name: "300VRange",
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
        "https://binzaher.com/api/api/collections/get/products?token=b8766574e1a92b4e6296441248669c&filter[brand]=300V Range"
      )
      .then((response) => {
        this.info = response.data.entries;
        console.log("Product", response.data.entries);
      })
      .catch((error) => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  },
  components: { Recommended },
};
</script>

<style scoped>
.ProductSingleHolder {
  max-width: 1280px;
  margin: auto;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
}
.column.col-6.col-xs-12.col-sm-12.col-md-6.col-lg-6.col-xl-6.rightholder {
  text-align: right;
}
.SlidBGImage {
  height: 300px;
  width: 300px;
  margin: auto;
  background-position: center center;
  margin-bottom: 25px;
  background-size: cover;
}
.product_code {
  color: #c52b46;
  display: inline-block;
}
.price {
  display: inline-block;
  margin-left: 10px;
  margin-bottom: 20px;
}
a.Search {
  border: 2px solid;
  padding: 5px;
}
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
</style>
