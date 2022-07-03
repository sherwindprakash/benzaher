<template>
  <div class="PageHolder">
    <div class="RegisterHolder">
      <div class="CHolder">
        <div class="columns">
          <div
            class="column col-6 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
            style="margin-top: 30px"
          >
            <h3>Contact Us</h3>
            <form id="signup-form" @submit.prevent="processForm">
              <div class="columns" style="display: flex; align-items: flex-end">
                <div class="column col-12">
                  <!-- form input control -->
                  <div class="form-group">
                    <label class="form-label" for="Full_Name"
                      >Full Name (Required)</label
                    >
                    <input
                      id="Full_Name"
                      v-model="Full_Name"
                      class="form-input"
                      type="text"
                      placeholder="Full Name"
                      required
                    />
                  </div>
                  <!-- form input control -->
                  <div class="form-group">
                    <label class="form-label" for="Email"
                      >Email (Required)</label
                    >
                    <input
                      id="Email"
                      v-model="Email"
                      class="form-input"
                      type="email"
                      placeholder="Email"
                      required
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,14}$"
                    />
                  </div>
                  <!-- form input control -->
                  <div class="form-group">
                    <label class="form-label" for="Contact_Number"
                      >Contact Number (Required)</label
                    >
                    <input
                      id="Contact_Number"
                      v-model="Contact_Number"
                      class="form-input"
                      type="number"
                      placeholder="Contact Number"
                      required
                    />
                  </div>


                  <!-- form input control -->
                  <div class="form-group">
                  <label class="form-label" for="Contact_Number"
                  >Select Branch (Required)</label
                  >

                  <select v-model="Branch" class="form-select" required>
                  <option>Branch 001</option>
                  <option>Branch 002</option>
                  <option>Branch 003</option>
                  </select>

                  </div>






                  <!-- form input control -->
                  <div class="form-group">
                    <label class="form-label" for="Your_Message"
                      >Your Message</label
                    >
                    <textarea
                      rows="3"
                      id="Your_Message"
                      v-model="Your_Message"
                      class="form-input"
                      type="text-area"
                      placeholder="Your Message"
                    />
                  </div>

                  <!--  -->
                </div>
                <div class="column col-12 text-right">
                  <button class="BtnSend" type="submit">Send</button>
                </div>
              </div>
            </form>
          </div>
          <div
            class="column col-6 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
          >
            <iframe
              style="width: 100%; border: none; height: 500px"
              src="../map.html"
            ></iframe>
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
      Full_Name: "",
      Email: "",
      Contact_Number: "",
      Your_Message: "",
    };
  },

  mounted() {},
  methods: {
    processForm: function () {
      //
      var data = JSON.stringify({
        data: {
          Full_Name: this.Full_Name,
          Email: this.Email,
          Contact_Number: this.Contact_Number,
          Your_Message: this.Your_Message,
          Branch:this.Branch
        },
      });

      var config = {
        method: "post",
        url: "https://binzaher.com/api/api/collections/save/contact_us?token=b8766574e1a92b4e6296441248669c",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          notyf.success("Success.");
          window.setTimeout(function () {
            window.location.href = "/contact-us";
          }, 3000);

          console.log(response.data);
          //alert("Registration success. please login to access the portal.");
        })
        .catch(function (error) {
          notyf.error("Failed.");
        });
      //

      //
    },
  },
};
</script>


<style scoped>
form#signup-form {
  padding: 20px;
}
button.BtnSend {
  color: #c72843;
  background: transparent;
  outline: none;
  border: none;
  font-size: 20px;
  font-style: italic;
  margin-top: 30px;
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