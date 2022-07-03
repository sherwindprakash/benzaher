<template>
  <div
    class="PageHolder"
    style="background: radial-gradient(#a42227 0%, #7b151a 100%)"
  >
    <div class="RegisterHolder grid-sm">
      <div class="columns">
        <div class="column col-12">
          <div class="card grid-sm">
            <div class="card-header">
              <div class="card-title h5 text-center">Login</div>
            </div>
            <div class="card-body">
              <form id="signup-form" @submit.prevent="processFormLogin">
                <!-- form input control -->
                <div class="form-group">
                  <label class="form-label" for="Email">Email</label>
                  <input
                    id="Email"
                    v-model="Email"
                    class="form-input"
                    type="email"
                    placeholder="Email"
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
                  />
                </div>

                <button class="btn btn-primary my-2" type="submit">
                  Login
                </button>

                <p>
                  If you not registered, then please
                  <router-link
                    style="
                      color: white;
                      padding-right: 4px;
                      text-decoration: underline;
                    "
                    to="/register"
                    >Register</router-link
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
      info: null,
      loading: true,
      errored: false,

      Email: "",
      Password: "",

      user: this.Email,
      OneTime: "Yes",
    };
  },
  components: {},
  mounted() {},

  methods: {
    processFormLogin: function () {
      var data = JSON.stringify({
        user: this.Email,
        password: this.Password,
      });

      var config = {
        method: "post",
        url: "https://binzaher.com/api/api/cockpit/authUser?token=b8766574e1a92b4e6296441248669c",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          //
          sessionStorage.setItem("customersId", response.data._id);
          sessionStorage.setItem("customersEmail", response.data.email);
          sessionStorage.setItem("customersName", response.data.name);
          sessionStorage.setItem("customersMobile", response.data.Mobile);
          //console.log("From Storage", sessionStorage.getItem("customersId"));
          //

          //
          notyf.success(
            "Registration success. please login to access the portal."
          );

          if ((response.data.OneTime = "No")) {
            console.log(response.data);

            //
            let dataUpdate = JSON.stringify({
              user: {
                _id: response.data._id,
                email: response.data.email,
                OneTime: "Yes",
              },
            });

            let configUpdate = {
              method: "post",
              url: "https://binzaher.com/api/api/cockpit/saveUser?token=b8766574e1a92b4e6296441248669c",
              headers: {
                "Content-Type": "application/json",
              },
              data: dataUpdate,
            };

            axios(configUpdate)
              .then((response) => {
                console.log(response.data);
              })
              .catch((error) => {
                console.log(error);
              });
            //

            window.setTimeout(function () {
              window.location.href = "/#offer";
            }, 3000);
          }
          if ((response.data.OneTime = "Yes")) {
            window.setTimeout(function () {
              window.location.href = "/profile";
            }, 3000);
          }

          // alert ('Login success.please access the portal.');
        })
        .catch(function (error) {
          // alert ('Login Failed.');
          notyf.error("Login Failed.");
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
  padding-bottom: 200px;
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