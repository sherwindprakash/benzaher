<template>
  <section v-if="errored">
    <p>
      We're sorry, we're not able to retrieve this information at the moment,
      please try back later
    </p>
  </section>

  <section v-else>
    <div v-if="loading"></div>

    <div v-else>
      <div class="RecHolder" v-if="info[0].CarModel === P0">Recommended</div>
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
    };
  },
  computed: {
    UserEmail() {
      return sessionStorage.getItem("customersEmail");
    },
  },
  filters: {},
  props: {
    P0: String,
  },
  mounted() {
    axios
      .get(
        "https://binzaher.com/api/api/collections/get/my_vehicles?token=b8766574e1a92b4e6296441248669c&filter[User_Email]=" +
          this.UserEmail
      )
      .then((response) => {
        this.info = response.data.entries;
        console.log("Rec", response.data.entries);
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
.RecHolder {
  display: inline;
    position: absolute;
    right: 0;
    border: 1px solid #e5032c;
    padding: 5px;
    border-radius: 5px;
    background-color: #e5032c;
    color: white;
    font-size: 14px;
    font-style: italic;
    font-weight: 500;
}
</style>
