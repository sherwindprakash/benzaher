<template>
  <template></template>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    customersEmail() {
      return sessionStorage.getItem("customersEmail");
    },
    UserCAuth() {
      return localStorage.getItem("session_id");
    },
  },
  mounted() {
    // SAVE DATA
    //
    fetch(
      "https://binzaher.com/api/api/collections/save/invoice?token=b8766574e1a92b4e6296441248669c",
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: {
            user: this.customersEmail,
            product: this.productID,
            // Send Values
            product_size: this.product_size,
            value: this.value,
            quantity: this.quantity,
            session_id:this.UserCAuth
          },
        }),
      }
    )
      .then((res) => res.json())
      .then((entry) => {
        console.log(entry);
        // window.setTimeout(function () {
        //   window.location.reload();
        // }, 3000);
      });
    //
    fetch(
      "https://binzaher.com/api/api/collections/remove/cart/?token=b8766574e1a92b4e6296441248669c",
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          filter: {
            _id: this.product,
          },
        }),
      }
    ).then((response) => {});

    //
  },
  props: {
    product: String,
    value: String,
    quantity: String,
    product_size:String,
    productID:String
  },
};
</script>

<style scoped></style>
