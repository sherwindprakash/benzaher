<template>
  <div class="PageHolder">
    <div class="RegisterHolder">
      <div class="CHolder">
        <div class="columns">
          <div class="column col-12">
            <section v-if="errored">
              <p>
                We're sorry, we're not able to retrieve this information at the
                moment, please try back later
              </p>
            </section>

            <section v-else>
              <div v-if="loading">Loading...</div>

              <div v-else>
                <div  v-html="info.content_en"></div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
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

  mounted() {
    axios
      .get("https://binzaher.com/api/api/singletons/get/terms_and_conditions?token=b8766574e1a92b4e6296441248669c")
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
.PageHolder.Holder {
  /* background-image: url(/src/assets/long-stripe.svg); */
  background-repeat: no-repeat;
  background-position: right center;
  background-color: white;
  background-size: contain;
}
.CHolder {
  padding-top: 50px;
  padding-bottom: 100px;
  height: 100%;
}
.RegisterHolder {
  margin: auto;
  padding-left: 20px;
  padding-right: 20px;
  color: black;
  top: 0;
  bottom: 0;
  width: 100%;
  left: 0;
  right: 0;
  min-height: 600px;
  max-width: 1180px;
}
a.Mybtn {
  color: #c72843;
  background: transparent;
  outline: none;
  border: none;
  font-size: 20px;
  font-style: italic;
  cursor: pointer;
}
@media only screen and (max-width: 600px) {
  .RegisterHolder {
    display: block;
  }
  .CHolder {
    padding-top: 0;
    padding-bottom: 0;
  }

  .PageHolder.Holder {
    background-image: none;
  }
}
</style>