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
      <div class="who-we-areHolder" v-if="info">
        <div class="columns">
          <div class="column col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <h1
              style="
                font-size: 30px;
                font-style: italic;
                font-weight: bold;
                text-transform: uppercase;
                margin-top: 20px;
                color: #ababab;
              "
            >
              {{ info.title_en }}
            </h1>
            <div v-html="info.content_en"></div>
          </div>
          <div
            class="column col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6"
            style="
              display: flex;
              flex-flow: row nowrap;
              align-items: center;
              justify-content: center;
            "
          >
            <img
              :src="'https://binzaher.com' + info.image.path"
              :alt="info.title_en"
              :title="info.title_en"
              class="IMGHolder"
            />
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
        "https://binzaher.com/api/api/singletons/get/who_we_are?token=b8766574e1a92b4e6296441248669c"
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
.who-we-areHolder {
  max-width: 1280px;
  margin: auto;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 80px;
  padding-bottom: 100px;
}
img.IMGHolder {
  width: 400px;
  height: 400px;
  object-fit: contain;
}

@media only screen and (max-width: 600px) {
  .who-we-areHolder {
    padding-top: 20px;
  }
  img.IMGHolder {
    width: 90%;
    height: 90%;
    object-fit: contain;
  }
}
</style>