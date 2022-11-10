<template></template>

<script>
export default {
  data() {
    return {};
  },

  mounted() {
    // SAVE DATA

    //
    fetch(
      "https://binzaher.com/api/api/collections/remove/cart/?token=b8766574e1a92b4e6296441248669c",
      {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          filter: { _id: this.product },
        }),
      }
    ).then((response) => {});

    //
  },
  props: {
    product: String,
    value: String,
    quantity: String,
  },
};
</script>

<style scoped></style>
