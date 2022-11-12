<template>
  <div class="PageHolder" >
    <div class="RegisterHolder">
      <div class="CHolder" style="margin-top: 40px;">
        <div class="columns">
          <div
            class="column col-8 col-xs-12 col-sm-12 col-md-12 col-lg-8 col-xl-8"
          >
            <h5>INVOICE</h5>
            
            <div class="BLOCKInvoice" v-for="(session_id, index) in groupedMakes">
              <b style="word-break: break-all;">{{index}}</b>
              <product_singleGET :product="index" />
              <b style="margin-top: 10px;
              display: block;">FULL PRICE {{basket_total}} <sup>OMR</sup></b>
            </div>
          </div>
          <div
            class="column col-4 col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 text-right"
          >
            <router-link class="Mybtn" to="/profile">Edit Profile</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
var notyf = new Notyf();
import product_singleGET from "@/components/invoice.vue";

export default {
  data() {
    return {
      Profile: [],
      basket_total: null,
    };
  },
  components: { product_singleGET },
  mounted() {
    axios
      .get(
        "https://binzaher.com/api/api/collections/entries/invoice?token=b8766574e1a92b4e6296441248669c&filter[user]=" +
          this.UserEmail
      )
      .then((response) => {
        this.Profile = response.data.entries;
        console.log("Profile", response.data.entries);
        this.sumTotal;
      });
  },
  computed: {
    UserID() {
      return sessionStorage.getItem("customersId");
    },
    UserEmail() {
      return sessionStorage.getItem("customersEmail");
    },
    groupedMakes() {
      var makes = {};
      this.Profile.forEach((item) => {
        if (makes[item.session_id] == undefined) {
          makes[item.session_id] = [];
          makes[item.session_id].push(item.product);
        } else {
          makes[item.session_id].push(item.product);
        }
      });

      return makes;
    },
    sumTotal() {
      let basket_total = 0;
      this.Profile.forEach((val) => {
        basket_total += Number(val.value);
      });
      //console.log(basket_total);
      this.basket_total = basket_total;
    },
  },
  methods: {},
};
</script>

<style scoped>
.BLOCKInvoice {
  border: 1px solid #e5dfdf;
  padding: 15px;
  margin-bottom: 20px;
}
.PageHolder.Holder {
  background-image: url(/src/assets/long-stripe.svg);
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
