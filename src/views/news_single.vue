<template>
  <div class="NewsSingle">
    <section v-if="errored">
      <p>
        We're sorry, we're not able to retrieve this information at the moment,
        please try back later
      </p>
    </section>

    <section v-else style="background-color: white">
      <div v-if="loading">
        <div class="loading loading-lg"></div>
      </div>

      <div v-else class="NewsSingleHolder">
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
              {{ info.title_english }}
            </h1>
            <div v-html="info.content_english"></div>
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

        <div
          class="columns"
          style="color: #383636; text-align: right; margin-top: 40px"
        >
          <div class="column col-12">
            <router-link to="/recommended/news" class="Back" title="Back">
              <span class="pic arrow-left"></span>
              Back
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
import axios from "axios";

export default {
  data() {
    return {
      info: null,
      loading: true,
      errored: false,
    };
  },

  components: {},

  mounted() {
    axios
      .get(
        "https://binzaher.com/api/api/collections/entry/news/" +
          this.$route.params.mediaid +
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
  },
};
</script>

<style scoped>
img.IMGHolder {
    width: 100%;
    height: auto;
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
.NewsSingleHolder {
  max-width: 1280px;
  margin: auto;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 80px;
  padding-bottom: 100px;
  color: black;
}
</style>