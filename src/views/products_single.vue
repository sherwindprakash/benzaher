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
          <div class="columns">
            <div class="column col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <img
                class="HolderImage"
                :title="info.brand"
                :src="'https://binzaher.com' + info.product_image.path"
              />
            </div>
            <div class="column col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <h1 style="font-weight: 800">{{ info.product_name }}</h1>

              <table class="table">
                <tbody>
                  <tr>
                    <td><b>Product Code</b></td>
                    <td>{{ info.product_code }}</td>
                  </tr>

                  <tr>
                    <td><b>Vehicle Type</b></td>
                    <td>{{ info.vehicle_type }}</td>
                  </tr>
                </tbody>
              </table>

              <div class="ContHolder">
                <small>Description</small>
                <div style="margin-top: 15px" v-html="info.product_description"></div>
              </div>

              <div class="columns">
                <div class="column">
                  <!-- quantity -->

                  <div class="ExplainBox">
                    <div class="form-group ContHolder">
                      <b>Quantity</b>
                      <select
                        class="form-select"
                        v-model="quantity"
                        style="width: 150px; display: block; margin-top: 20px"
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>

                    <div class="form-group ContHolder">
                      <b>Available Liters</b>
                      <select
                        class="form-select"
                        v-model="key"
                        style="width: 150px; display: block; margin-top: 20px"
                      >
                        <option value="1">1 L</option>
                        <option value="2">4 L</option>
                        <option value="3">5 L</option>
                      </select>
                    </div>
                  </div>
                  <!-- quantit -->
                  <div class="column text-right">
                    <h2 style="font-weight: bold" v-if="key == 1">
                      <b>{{ info.price * quantity }}</b>
                      <sup>OMR</sup>
                    </h2>
                    <h2 style="font-weight: bold" v-if="key == 2">
                      <b>{{ info.price_4L * quantity }}</b> <sup>OMR</sup>
                    </h2>
                    <h2 style="font-weight: bold" v-if="key == 3">
                      <b>{{ info.price_5L * quantity }}</b> <sup>OMR</sup>
                    </h2>
                  </div>

                  <!--  -->
                  <div style="margin-top: 40px" class="text-right" v-if="customersEmail">
                    <form id="addtocart-form" @submit.prevent="AddtoCart">
                      <!--  -->
                      <button class="btn btn-primary" type="submit">Add to Cart</button>
                    </form>
                  </div>
                  <div style="margin-top: 40px" class="text-right" v-else>
                    <router-link class="btn btn-primary" to="/login">
                      Please Login to Add to Cart</router-link
                    >
                  </div>
                  <!--  -->
                </div>
              </div>

              <div
                class="columns"
                style="color: #383636; text-align: right; margin-top: 40px"
              >
                <div class="column col-12">
                  <!-- <router-link
                    style="color: black"
                    :to="
                      '/products-&-services/products/' +
                      this.$route.params.productsbrand +
                      '/' +
                      this.$route.params.productssub_category +
                      '/' +
                      this.$route.params.productsproduct_category_name
                    "
                    class="Back"
                    title="Back"
                  >
                    <span class="pic arrow-left"></span>
                    Back
                  </router-link> -->

                  <button
                    onclick="history.back()"
                    style="background-color: white; border: none; cursor: pointer"
                  >
                    <span class="pic arrow-left"></span> Back
                  </button>
                </div>
              </div>
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
var notyf = new Notyf();

export default {
  data() {
    return {
      info: null,
      loading: true,
      errored: false,
      key: "1",
      quantity: "1",
      picked: null,
    };
  },
  computed: {
    customersEmail() {
      return sessionStorage.getItem("customersEmail");
    },

    ValueADD() {
      if (this.key === 1) {
        return this.info.price * this.quantity;
      } else if (this.key === 2) {
        return this.info.price_4L * this.quantity;
      } else if (this.key === 3) {
        return this.info.price_5L * this.quantity;
      } else {
        return this.info.price * this.quantity;
      }
    },

    product_size() {
      if (this.key === 1) {
        return "1 L";
      } else if (this.key === 2) {
        return "4 L";
      } else if (this.key === 3) {
        return "5 L";
      } else {
        return "1 L";
      }
    },
  },
  components: {},
  methods: {},
  mounted() {
    axios
      .get(
        "https://binzaher.com/api/api/collections/entry/products/" +
          this.$route.params.id +
          "?token=b8766574e1a92b4e6296441248669c"
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
    //
  },
  methods: {
    AddtoCart: function () {
      //
      fetch(
        "https://binzaher.com/api/api/collections/save/cart?token=b8766574e1a92b4e6296441248669c",
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            data: {
              user: this.customersEmail,
              product: this.$route.params.id,
              product_size: this.product_size,
              value: this.ValueADD,
              quantity: this.quantity,
              id: this.currentDate(),
            },
          }),
        }
      )
        .then((res) => res.json())
        .then((entry) => {
          notyf.success("Add to Cart success.");
          console.log(entry);
          window.setTimeout(function () {
            window.location.reload();
          }, 10);
        });
    },
    //
    currentDate() {
      const current = new Date();
      const date = `${current.getDate()}/${
        current.getMonth() + 1
      }/${current.getFullYear()}`;
      return date;
    },
  },
};
</script>

<style scoped>
.ExplainBox {
  display: flex;
}
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
