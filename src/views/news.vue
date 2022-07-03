<template>
  <section v-if="errored">
    <p>
      We're sorry, we're not able to retrieve this information at the moment,
      please try back later
    </p>
  </section>

  <section v-else>
    <div v-if="loading">
      <div class="loading loading-lg"></div>
    </div>

    <div v-else>
      <div class="NewsHolder">
        <h1
          style="
            font-size: 45px;
            font-style: italic;
            font-weight: bold;
            text-transform: uppercase;
            margin-top: 20px;
          "
        >
          Latest NEWS
        </h1>
        <Splide :options="options">
          <SplideSlide v-for="entries in info" :key="entries">
            <div class="CenterTitle">{{ entries.title_english }}</div>
            <div
              v-for="image in entries.image"
              :key="image"
              class="SlidBGImage"
              v-bind:style="{ backgroundImage: 'url(' + baseurl + image + ')' }"
            ></div>
            <div style="text-align: center; padding-top: 20px">
              <router-link
                class="MybtnNews"
                :to="'/recommended/news/' + entries._id"
              >
                Read More
              </router-link>
            </div>
          </SplideSlide>
        </Splide>
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
      perPage: 3,
      type: "loop",
      arrows: false,
      pagination: false,
      fixedHeight: 350,
      classes: {
        pagination: "splide__pagination NewsSlider",
      },
      breakpoints: {
        900: {
          perPage: 2,
        },
        640: {
          perPage: 1,
        },
      },
    };

    return { options };
  },
  mounted() {
    axios
      .get(
        "https://binzaher.com/api/api/collections/get/news?token=b8766574e1a92b4e6296441248669c"
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
.NewsHolder {
  max-width: 1280px;
  margin: auto;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 80px;
  padding-bottom: 100px;
  background-image: url(../assets/long-stripe.svg);
  background-repeat: no-repeat;
  background-position: center right;
}
.SlidBGImage {
  width: 100%;
  height: 300px;
  background-size: cover;
  position: relative;
  background-position: center center;
}
.CenterTitle {
  position: absolute;
  z-index: 1;
  left: 0;
  right: 0;
  display: inline-table;
  margin: auto;
  top: 0;
  bottom: 0;
}
a.MybtnNews {
  z-index: 1;
  color: white;
  font-style: italic;
  text-transform: uppercase;
  border: 2px solid;
  padding: 5px;
}
a.MybtnNews:hover {
  color: #8f8f8f;
}
</style>