<template>
  <div class="tile">
    <div class="tile-icon">
      <div v-if="info">
        <figure class="avatar avatar-lg">
          <img
            :src="'https://binzaher.com' + info.product_image.path"
            alt="Avatar"
          />
        </figure>
      </div>
    </div>
    <div class="tile-content">
      <p v-if="info" class="tile-title" style="margin-bottom: 0">
        {{ info.product_name }}
      </p>
      <p v-if="info" class="tile-subtitle" style="margin: 0">
        {{ info.brand }}
      </p>
      <div class="DataBin">
        {{ this.product_size }} - {{ this.quantity }} Quantity -
        {{ this.value }} OMR
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
var notyf = new Notyf();

export default {
  data() {
    return {
      info: null,
    };
  },

  mounted() {
    axios
      .get(
        "https://binzaher.com/api/api/collections/entry/products/" +
          this.product +
          "?token=b8766574e1a92b4e6296441248669c"
      )
      .then((response) => {
        this.info = response.data;
        //console.log("SINGLE", response.data);
      });
  },
  props: {
    Invoice: String,
    product: String,
    product_size: String,
    quantity: String,
    value: String,
  },
  methods: {},
  components: {},
};
</script>

<style scoped></style>
