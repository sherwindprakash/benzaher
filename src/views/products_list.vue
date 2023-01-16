<template>
  <div class="NewsSingle">
    <section v-if="errored">
      <p>
        We're sorry, we're not able to retrieve this information at the moment, please try
        back later
      </p>
    </section>

    <section v-else style="background-color: white; color: black">
      <div v-if="loading">
        <div class="loading loading-lg"></div>
      </div>

      <div v-else>
        <div class="ProdSingle">
          <div style="padding-bottom: 50px">
            <h3 style="text-transform: uppercase; font-weight: 700; display: inline">
              {{ this.$route.params.productsbrand }}
            </h3>
            <h4
              style="
                text-transform: uppercase;
                font-weight: 400;
                display: inline;
                padding-left: 10px;
              "
            >
              {{ this.$route.params.productssub_category }}
            </h4>
            <h5 style="text-transform: capitalize">
              {{ this.$route.params.productsproduct_category_name.replaceAll("_", " ") }}
            </h5>
          </div>

          <div class="columns" style="padding-bottom: 100px">
            <div
              v-for="item in info"
              :key="item"
              class="column col-4 col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 text-center"
              style="position: relative"
            >
              <router-link
                :to="
                  '/products-&-services/products/' +
                  this.$route.params.productsbrand +
                  '/' +
                  this.$route.params.productssub_category +
                  '/' +
                  this.$route.params.productsproduct_category_name +
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
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import router from "../router";
//var notyf = new Notyf();

export default {
  data() {
    return {
      info: null,
      loading: true,
      errored: false,
    };
  },
  computed: {
    customersEmail() {
      return sessionStorage.getItem("customersEmail");
    },
  },
  components: {},
  methods: {},
  mounted() {
    axios
      .get(
        "https://binzaher.com/api/api/collections/get/products?token=b8766574e1a92b4e6296441248669c&filter[brand]=" +
          this.$route.params.productsbrand +
          "&filter[sub_category]=" +
          this.$route.params.productssub_category +
          "&filter[product_category_name]=" +
          this.$route.params.productsproduct_category_name
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
    //
  },
};
</script>

<style scoped>
sup {
  font-weight: 400;
  font-size: 20px;
  padding-left: 5px;
}

button.ImgBGBut {
  border: none;
  margin: 10px;
  background-image: url(../assets/oil-container-outline.svg);
  width: 90px;
  height: 90px;
  background-repeat: no-repeat;
  color: rgb(0, 0, 0);
  background-color: transparent;
  cursor: pointer;
}

button.ImgBGBut.active {
  border: none;
  margin: 10px;
  background-image: url(../assets/oil-container-outline-fill.svg);
  width: 90px;
  height: 90px;
  background-repeat: no-repeat;
  color: rgb(255, 255, 255);
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

.PriceHolder {
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
}

img.HolderImage {
  width: 100%;
  height: auto;
}

.ProdSingle {
  max-width: 1280px;
  margin: auto;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 80px;
  padding-bottom: 100px;
  color: black;
}

svg#Capa_1 {
  width: 90px;
  height: auto;
  display: inline-block;
}

.HolderX {
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
}

.ContHolder {
  padding: 10px;
}
</style>
>
