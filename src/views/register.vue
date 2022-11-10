<template>
  <div class="PageHolder" style="background: radial-gradient(#a42227 0%, #7b151a 100%)">
    <div class="RegisterHolder grid-sm">
      <div class="columns">
        <div class="column col-12">
          <div class="card grid-sm">
            <div class="card-header">
              <div class="card-title h5 text-center">Register</div>
            </div>
            <div class="card-body">
              <form id="signup-form" @submit.prevent="processForm">
                <!-- form input control -->
                <div class="form-group">
                  <label class="form-label" for="FullName">Full Name</label>
                  <input
                    id="FullName"
                    v-model="FullName"
                    class="form-input"
                    type="text"
                    placeholder="Full Name"
                    required
                  />
                </div>

                <!-- form input control -->
                <div class="form-group">
                  <label class="form-label" for="Age">Age</label>
                  <input
                    id="Age"
                    v-model="Age"
                    class="form-input"
                    type="text"
                    placeholder="Age"
                    required
                  />
                </div>

                <div class="form-group">
                  <label class="form-label" for="Gender">Gender</label>
                  <select
                    v-model="Gender"
                    class="form-select"
                    style="color: black"
                    required
                  >
                    <option value="" selected disabled hidden>Choose an option</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>

                <!-- form input control -->
                <div class="form-group">
                  <label class="form-label" for="Mobile">Mobile</label>
                  <input
                    id="Mobile"
                    v-model="Mobile"
                    class="form-input"
                    type="number"
                    placeholder="Mobile"
                    required
                  />
                </div>

                <!--  -->
                <div class="form-group">
                  <label class="form-label" for="City">City</label>
                  <select
                    v-model="City"
                    class="form-select"
                    style="color: black"
                    required
                  >
                    <option value="" selected disabled hidden>Choose an option</option>
                    <option>Adam</option>
                    <option>As Sib</option>
                    <option>Al Ashkharah</option>
                    <option>Al Buraimi</option>
                    <option>Al Hamra</option>
                    <option>Al Jazer</option>
                    <option>Al Madina A'Zarqa, formerly known as Blue City</option>
                    <option>Al Suwaiq</option>
                    <option>Bahla</option>
                    <option>Barka</option>
                    <option>Bidbid</option>
                    <option>Bidiya</option>
                    <option>Duqm</option>
                    <option>Haima</option>
                    <option>Ibra</option>
                    <option>Ibri</option>
                    <option>Izki</option>
                    <option>Jabrin</option>
                    <option>Jalan Bani Bu Hassan</option>
                    <option>Khasab</option>
                    <option>Mahooth</option>
                    <option>Manah</option>
                    <option>Masirah</option>
                    <option>Matrah</option>
                    <option>Mudhaybi</option>
                    <option>Mudhaireb</option>
                    <option>Muscat</option>
                    <option>Nizwa</option>
                    <option>Quriyat</option>
                    <option>Raysut</option>
                    <option>Rustaq</option>
                    <option>Ruwi</option>
                    <option>Saham</option>
                    <option>Shinas</option>
                    <option>Saiq</option>
                    <option>Salalah</option>
                    <option>Samail</option>
                    <option>Sohar</option>
                    <option>Sur</option>
                    <option>Tan`am</option>
                    <option>Thumrait</option>
                  </select>
                </div>

                <!--  -->

                <!-- form input control -->
                <div class="form-group">
                  <label class="form-label" for="Email">Email</label>
                  <input
                    id="Email"
                    v-model="Email"
                    class="form-input"
                    type="email"
                    placeholder="Email"
                    required
                  />
                </div>

                <!-- form input control -->
                <div class="form-group">
                  <label class="form-label" for="Password">Password</label>
                  <input
                    id="Password"
                    v-model="Password"
                    class="form-input"
                    type="password"
                    placeholder="Password"
                    autocomplete="off"
                    required
                  />
                </div>

                <!-- form checkbox control -->
                <div class="form-group">
                  <label class="form-checkbox">
                    <input v-model="checkbox" type="checkbox" />
                    <i class="form-icon" /> I agree to
                    <router-link
                      style="color: white; padding-right: 4px; text-decoration: underline"
                      to="/terms-and-conditions"
                      >Terms & conditions</router-link
                    >
                    and
                    <router-link
                      style="color: white; padding-right: 4px; text-decoration: underline"
                      to="/privacy-policy"
                      >Privacy Policy</router-link
                    >
                  </label>
                </div>

                <button
                  v-if="checkbox === true"
                  class="btn btn-primary my-2"
                  type="submit"
                >
                  Register
                </button>

                <p>
                  If you already registered, then please
                  <router-link
                    style="color: white; padding-right: 4px; text-decoration: underline"
                    to="/login"
                    >Login</router-link
                  >

                  here.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import router from "../router";
var notyf = new Notyf();

export default {
  data() {
    return {
      FullName: "",
      Email: "",
      Password: "",
      Age: "",
      Gender: "",
      Mobile: "",
      City: "",
      checkbox: null,
    };
  },
  components: {},
  mounted() {},

  methods: {
    processForm: function () {
      var data = JSON.stringify({
        user: {
          FullName: this.FullName,
          Mobile: this.Mobile,
          user: this.Email,
          name: this.FullName,
          Age: this.Age,
          Gender: this.Gender,
          password: this.Password,
          email: this.Email,
          active: true,
          group: "author",
          api_key: true,
          OneTime: "No",
          City: this.City,
        },
      });

      var config = {
        method: "post",
        url:
          "https://binzaher.com/api/api/cockpit/saveUser?token=b8766574e1a92b4e6296441248669c",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          //console.log(response.data.email)

          //
          const options = {
            method: "POST",
            url: "https://checkout.thawani.om/api/v1/customers",
            params: { "": "" },
            headers: {
              "thawani-api-key": "ROGUWytTjnGkC7hWqA0EwQTbhSO1du",
              "Content-Type": "application/json",
            },
            data: { client_customer_id: response.data.email },
          };

          axios
            .request(options)
            .then(function (response) {
              //console.log(response.data.data.id);
            })
            .catch(function (error) {
              console.error(error);
            });
          //

          notyf.success("Registration success. please login to access the portal.");
          window.setTimeout(function () {
            router.push({
              path: "/login",
            });
          }, 3000);

          console.log(response.data);
          //alert("Registration success. please login to access the portal.");
        })
        .catch(function (error) {
          notyf.error("Registration Failed.");
        });
    },
  },
};
</script>

<style scoped>
.RegisterHolder {
  margin: auto;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 100px;
  padding-bottom: 100px;
  top: 0;
  bottom: 0;
  width: 100%;
  left: 0;
  right: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background-image: url(../assets/register_web.png);
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
}
@media only screen and (max-width: 800px) {
  .RegisterHolder {
    background-image: url(../assets/register_mobile.png);
  }
}
</style>
