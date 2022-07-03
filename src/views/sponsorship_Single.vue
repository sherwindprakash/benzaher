<template>
  <div class="NewsSingle">
    <section v-if="errored">
      <p>
        We're sorry, we're not able to retrieve this information at the moment,
        please try back later
      </p>
    </section>

    <section v-else style="background-color: white; color: black">
      <div v-if="loading">
        <div class="loading loading-lg"></div>
      </div>

      <div v-else>
        <div class="ProdSingle">
          <h2
            style="
              font-size: 30px;
              font-style: italic;
              font-weight: bold;
              text-transform: uppercase;
              margin-top: 20px;
              color: rgb(171, 171, 171);
            "
          >
            {{ info.about_en }}
          </h2>
          <div v-html="info.about_en"></div>
          <div
            class="columns"
            style="color: #383636; text-align: right; margin-top: 40px"
          >
            <div class="column col-12">
              <router-link
                to="/recommended/sponsorship"
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
        "https://binzaher.com/api/api/collections/entry/sponsorships/" +
          this.$route.params.sponsorshipid +
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
.ProdSingle {
  max-width: 1280px;
  margin: auto;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 80px;
  padding-bottom: 100px;
  color: black;
}
</style>>
