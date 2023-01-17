<template>
  <section v-if="errored">
    <p>
      We're sorry, we're not able to retrieve this information at the moment, please try
      back later
    </p>
  </section>

  <section v-else>
    <div v-if="loading">
      <div class="loading loading-lg"></div>
    </div>

    <div v-else>
      <div class="FullHolder">
        <div class="ProductHolder">
          <h2
            style="
              font-size: 25px;
              font-style: italic;
              font-weight: bold;
              text-transform: uppercase;
              margin-top: 20px;
              margin-bottom: 40px;
            "
          >
            Featured Products
          </h2>
          <Splide :options="options">
            <SplideSlide v-for="entries in info" :key="entries">
              <router-link
                class="MybtnNews"
                :to="
                  '/products-&-services/products/' +
                  entries.brand +
                  '/' +
                  entries.sub_category +
                  '/' +
                  entries._id
                "
              >
                <div
                  v-for="image in entries.product_image"
                  :key="image"
                  class="SlidBGImage"
                  v-bind:style="{
                    backgroundImage: 'url(' + baseurl + image + ')',
                  }"
                ></div>

                <div class="CenterTitle">
                  {{ entries.product_name }} - &nbsp; {{ entries.price }} OMR
                </div>
              </router-link>
            </SplideSlide>
          </Splide>

          <div class="BtnHolder">
            <router-link class="Mybtn" to="/products-&-services/products"
              >More Products</router-link
            >
            <router-link class="Mybtn" to="/products-&-services/services"
              >Services</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/splide.min.css";

export default {
  data() {
    return {
      info: null,
      loading: true,
      errored: false,
      baseurl: "https://binzaher.com/",
    };
  },

  components: {
    Splide,
    SplideSlide,
  },

  setup() {
    const options = {
      rewind: true,
      gap: "1rem",
      perPage: 4,
      type: "loop",
      arrows: true,
      pagination: false,
      fixedHeight: 350,
      classes: {
        pagination: "splide__pagination NewsSlider",
      },
      breakpoints: {
        1000: {
          perPage: 3,
        },
        780: {
          perPage: 2,
        },
        500: {
          perPage: 1,
        },
      },
    };

    return { options };
  },
  mounted() {
    axios
      .get(
        "https://binzaher.com/api/api/collections/get/products?token=b8766574e1a92b4e6296441248669c"
      )
      .then((response) => {
        this.info = response.data.entries;
        console.log("Single", response.data.entries);
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
.FullHolder {
  background: radial-gradient(#a42227 0%, #7b151a 100%);
  width: 100%;
  height: auto;
}
.ProductHolder {
  max-width: 1280px;
  margin: auto;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 40px;
  padding-bottom: 70px;
}
.SlidBGImage {
  height: 300px;
  width: 100%;
  object-fit: cover;
  background-position: center center;
  background-size: cover;
}
.CenterTitle {
  text-align: center;
  margin-top: 30px;
  color: white;
  font-style: italic;
}
a.MybtnNews:hover {
  text-decoration-color: #ffffff;
}

a.Mybtn {
  bottom: 30px;
  z-index: 1;
  color: white;
  font-style: italic;
  text-transform: uppercase;
  border: 2px solid;
  padding: 5px;
  margin-left: 30px;
}
a.Mybtn:hover {
  color: #cecece;
}
.BtnHolder {
  margin-top: 100px;
  text-align: right;
}

@media only screen and (max-width: 600px) {
  .BtnHolder {
    margin-top: 50px;
    text-align: center;
  }
  a.Mybtn[data-v-65549f94] {
    margin: 10px;
  }
}

@media only screen and (max-width: 400px) {
  a.Mybtn[data-v-65549f94] {
    width: 100%;
    display: block;
    margin: 0;
    margin-bottom: 10px;
  }
}
</style>
