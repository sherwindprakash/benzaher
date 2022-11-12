<template>
  <section v-if="errored">
    <p>
      We're sorry, we're not able to retrieve this information at the moment,
      please try back later
    </p>
  </section>

  <section v-else>
    <div v-if="loading">Loading...</div>

    <div v-else style="position: relative;
    display: flex;
    flex-flow: row wrap;
    border-bottom: 1px solid #e5e5e5;">
      <!--  -->

      

      <div v-for="item in info" class="Invoicer">
        <Single  :Invoice="this.product" :product="item.product" :product_size="item.product_size" :quantity="item.quantity" :value="item.value" />
      </div>

      <!--  -->
    </div>
  </section>
</template>

<script>
import axios from "axios";
var notyf = new Notyf();
import Single from "@/components/singleProduct.vue";


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
      .get(
        "https://binzaher.com/api/api/collections/entries/invoice?token=b8766574e1a92b4e6296441248669c&filter[session_id]=" +
          this.product
      )
      .then((response) => {
        this.info = response.data.entries;
        //console.log("INFO", response.data.entries);
      })
      .catch((error) => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  },
  props: {product:String},
  methods: {},
  components: {Single},
};
</script>

<style scoped>
.Invoicer {
  width: 50%;
  display: flex;
  margin-top: 15px;
  margin-bottom: 15px;
}


@media only screen and (max-width: 800px) {
 
  .Invoicer {
    width: 100%;
    display: flex;
    margin-top: 15px;
    margin-bottom: 15px;
  }
  }

</style>
