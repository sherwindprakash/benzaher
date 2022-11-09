<template>
  <section v-if="errored">
    <p>
      We're sorry, we're not able to retrieve this information at the moment, please try
      back later
    </p>
  </section>

  <section v-else>
    <div v-if="loading"></div>

    <div v-else>
      <div class="RecHolder" v-if="(info[0].Make = P0)">
        {{ P0 }}
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
  display: block;
  position: absolute;
  right: 0;
}
</style>
