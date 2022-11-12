<template>
  <div class="PageHolder">
    <div class="RegisterHolder">
      <div class="CHolder">
        <section v-if="errored">
          <p>
            We're sorry, we're not able to retrieve this information at the
            moment, please try back later
          </p>
        </section>

        <section v-else>
          <div v-if="loading">Loading...</div>

          <div v-else>
            <div class="container">
              <div class="columns">
                <div
                  class="column col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
                >
                  <div v-if="info.payment_status === 'cancelled'">
                    <div class="text-center">
                      <img
                        class="IconImg"
                        src="../assets/1122-thumb-down.svg"
                      />
                      <h2>Payment Cancelled</h2>
                      <router-link class="btn btn-primary" to="/cart"
                        >Back to Cart</router-link
                      >
                    </div>
                  </div>
                  <div v-if="info.payment_status === 'unpaid'">
                    <div class="text-center">
                      <img
                        class="IconImg"
                        src="../assets/1122-thumb-down.svg"
                      />
                      <h2>Payment Unpaid</h2>
                      <router-link class="btn btn-primary" to="/cart"
                        >Back to Cart</router-link
                      >
                    </div>
                  </div>

                  <div v-if="info.payment_status === 'paid'">
                    <div class="text-center">
                      <img
                        class="IconImg"
                        src="../assets/37-approve-checked-simple.svg"
                      />
                      <h2>Payment Success</h2>
                      <router-link
                        class="btn btn-primary"
                        to="/purchase-history"
                        >View Purchase History</router-link
                      >
                    </div>
                    <!-- Remove Cart -->
                    <div
                      class="column col-6 col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6"
                      style="margin-bottom: 20px"
                      v-for="item in product"
                      :key="item"
                      hidden
                    >
                      <product_delete
                        :product="item._id"
                        :value="item.value"
                        :quantity="item.quantity"
                        :product_size="item.product_size"
                        :productID="item.product"
                      />
                    </div>
                    <!--  -->
                  </div>
                </div>
              </div>
            </div>
            <!--  -->
            <!--  -->
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
var notyf = new Notyf();
import product_delete from "@/components/delete.vue";

export default {
  data() {
    return {
      info: null,
      product: null,
      loading: true,
      errored: false,
      basket_total: null,
    };
  },
  computed: {
    UserEmail() {
      return sessionStorage.getItem("customersEmail");
    },
    UsercustomersName() {
      return sessionStorage.getItem("customersName");
    },
    UserCAuth() {
      return localStorage.getItem("session_id");
    },
  },
  components: {
    product_delete,
  },
  mounted() {
    var config = {
      method: "get",
      url:
        "https://checkout.thawani.om/api/v1/checkout/session/" + this.UserCAuth,
      headers: {
        "thawani-api-key": "ROGUWytTjnGkC7hWqA0EwQTbhSO1du",
      },
      maxRedirects: 0,
    };

    axios(config)
      .then((response) => {
        this.info = response.data.data;
        console.log(response.data.data);
        // SEND DATA - -
        if (response.data.data.payment_status === "cancelled") {
          fetch(
            "https://binzaher.com/api/api/collections/save/orders?token=b8766574e1a92b4e6296441248669c",
            {
              method: "post",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                data: {
                  client_reference_id: response.data.data.client_reference_id,
                  invoice: response.data.data.invoice,
                  Customer_name: response.data.data.metadata.Customer_name,
                  payment_status: response.data.data.payment_status,
                  session_id: response.data.data.session_id,
                  total_amount: response.data.data.total_amount,
                },
              }),
            }
          ).then((response) => {
            console.log("GOOD");
            // Delete Cart
            axios
              .get(
                "https://binzaher.com/api/api/collections/get/cart?token=b8766574e1a92b4e6296441248669c&filter[user]=" +
                  this.UserEmail
              )
              .then((response) => {
                this.product = response.data.entries;
                console.log("product", response.data.entries);
              });
            //
          });
        }

        //
      })
      .catch((error) => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));

    //
  },
  methods: {},
};
</script>

<style scoped>
img.IconImg {
  width: 100px;
  height: 100px;
}
sup {
  font-weight: 400;
  font-size: 14px;
  padding-left: 5px;
}

.PageHolder.Holder {
  background-repeat: no-repeat;
  background-position: right center;
  background-color: white;
  background-size: contain;
}

.CHolder {
  padding-top: 50px;
  padding-bottom: 100px;
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

  max-width: 1180px;
}
</style>
