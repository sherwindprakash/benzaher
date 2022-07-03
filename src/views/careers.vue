<template>
  <div class="PageHolder">
    <div class="RegisterHolder">
      <div class="CHolder">
        <h5
          style="
            font-size: 30px;
            font-style: italic;
            font-weight: bold;
            text-transform: uppercase;
            margin-top: 20px;
            color: rgb(33 33 33);
          "
        >
          Application Form
        </h5>

        <form id="signup-form" @submit.prevent="processForm">
          <div class="columns" style="display: flex; align-items: flex-end">
            <div
              class="
                column
                col-6 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6
              "
            >
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
                <label class="form-label" for="Email">Email (Required)</label>
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

              <div class="form-group">
                <label class="form-label" for="Gender">Gender (Required)</label>
                <select
                  v-model="Gender"
                  class="form-select"
                  style="color: black"
                  required
                >
                  <option value="" selected disabled hidden>
                    Choose an option
                  </option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>

              <div class="form-group">
                <label class="form-label" for="Are_You_Married"
                  >Are You Married (Required)</label
                >
                <select
                  v-model="Are_You_Married"
                  class="form-select"
                  style="color: black"
                  required
                >
                  <option value="" selected disabled hidden>
                    Choose an option
                  </option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>

              <div class="form-group">
                <label class="form-label" for="Title_of_Job"
                  >Title of Job (Required)</label
                >
                <select
                  v-model="Title_of_Job"
                  class="form-select"
                  style="color: black"
                  required
                >
                  <option value="" selected disabled hidden>
                    Choose an option
                  </option>
                  <option v-for="item in info" :key="item">
                    {{ item.job_title_en }}
                  </option>
                </select>
              </div>

              <!-- form input control -->
              <div class="form-group">
                <label class="form-label" for="How_Old_Are_You"
                  >How Old Are You (Required)</label
                >
                <input
                  id="How_Old_Are_You"
                  v-model="How_Old_Are_You"
                  class="form-input"
                  type="number"
                  placeholder="How Old Are You"
                  required
                />
              </div>

              <div class="form-group">
                <label class="form-label" for="Are_You_In_Oman"
                  >Are You In Oman (Required)</label
                >
                <select
                  v-model="Are_You_In_Oman"
                  class="form-select"
                  style="color: black"
                  required
                >
                  <option value="" selected disabled hidden>
                    Choose an option
                  </option>
                  <option>No</option>
                  <option>Yes</option>
                </select>
              </div>

              <div class="form-group">
                <label class="form-label" for="How_Would_You_Like_To_Work"
                  >How Would You Like To Work (Required)</label
                >
                <select
                  v-model="How_Would_You_Like_To_Work"
                  class="form-select"
                  style="color: black"
                  required
                >
                  <option value="" selected disabled hidden>
                    Choose an option
                  </option>
                  <option>Full Time</option>
                  <option>Remote</option>
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

              <div class="form-group">
                <label class="form-label" for="Ref_No">Ref No (Required)</label>
                <select
                  v-model="Ref_No"
                  class="form-select"
                  style="color: black"
                  required
                >
                  <option value="" selected disabled hidden>
                    Choose an option
                  </option>
                  <option v-for="item in info" :key="item">
                    {{ item.ref_no }} ({{ item.job_title_en }})
                  </option>
                </select>
              </div>

              <div class="form-group">
                <label class="form-label" for="Upload_Your_CV"
                  >Upload Your CV (Required)</label
                >
                <input
                  aria-label="Attach CV"
                  placeholder="Attach CV"
                  type="file"
                  id="file"
                  ref="file"
                  v-on:change="handleFileUpload()"
                  required
                />
              </div>

              <!--  -->
            </div>
            <div
              class="
                column
                col-6 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6
                text-right
              "
            >
              <button class="BtnSend" type="submit">Send</button>
            </div>
          </div>
        </form>
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
      Full_Name: "",
      Email: "",
      Contact_Number: "",
      Gender: "",
      Are_You_Married: "",
      Title_of_Job: "",
      How_Old_Are_You: "",
      Are_You_In_Oman: "",
      How_Would_You_Like_To_Work: "",
      Your_Message: "",
      Ref_No: "",
      file: [],
    };
  },
  components: {},
  mounted() {
    axios
      .get(
        "https://binzaher.com/api/api/collections/get/vacancies?token=b8766574e1a92b4e6296441248669c"
      )
      .then((response) => {
        this.info = response.data.entries;
        console.log(response.data.entries);
      });
  },

  methods: {
    processForm: function () {
      let formData = new FormData();

      formData.append("files[]", this.file);
      formData.append("meta[email]", this.Email);
      formData.append("meta[folder]", "4deb3c783563658b290003af");

      this.isHidden = false;

      axios
        .post(
          "https://binzaher.com/api/api/cockpit/addAssets?token=b8766574e1a92b4e6296441248669c",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )

        .then((response) => {
          console.log(response.data.assets[0].path);
          //
          var data = JSON.stringify({
            data: {
              Full_Name: this.Full_Name,
              Email: this.Email,
              Contact_Number: this.Contact_Number,
              Gender: this.Gender,
              Are_You_Married: this.Are_You_Married,
              Title_of_Job: this.Title_of_Job,
              How_Old_Are_You: this.How_Old_Are_You,
              Are_You_In_Oman: this.Are_You_In_Oman,
              How_Would_You_Like_To_Work: this.How_Would_You_Like_To_Work,
              Your_Message: this.Your_Message,
              Ref_No: this.Ref_No,
              Upload_Your_CV:
                "https://binzaher.com/api/storage/uploads" +
                response.data.assets[0].path,
            },
          });

          var config = {
            method: "post",
            url: "https://binzaher.com/api/api/collections/save/applications?token=b8766574e1a92b4e6296441248669c",
            headers: {
              "Content-Type": "application/json",
            },
            data: data,
          };

          axios(config)
            .then(function (response) {
              notyf.success("Success.");
              window.setTimeout(function () {
                router.push({
                  path: "/",
                });
              }, 3000);

              console.log(response.data);
              //alert("Registration success. please login to access the portal.");
            })
            .catch(function (error) {
              notyf.error("Failed.");
            });
          //
        })
        .catch((error) => {
          console.log(error);
        })
        .then(function () {});

      //
    },
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
    },
  },
};
</script>

<style scoped>
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
.form-input {
  min-width: 300px;
  width: auto;
}
.form-select {
  max-width: 250px;
  width: auto;
}
textarea#Your_Message {
  width: 500px;
}
form#signup-form {
  padding-left: 30px;
}
button.BtnSend {
  color: #c72843;
  background: transparent;
  outline: none;
  border: none;
  font-size: 20px;
  font-style: italic;
}
label.form-label {
  font-weight: 700;
}
@media only screen and (max-width: 600px) {
  .form-input,
  .form-select,
  textarea#Your_Message {
    width: 100%;
    min-width: 100%;
  }
  .RegisterHolder {
    display: block;
  }
  .CHolder {
    padding-top: 0;
    padding-bottom: 0;
  }
  form#signup-form {
    padding-left: 0px;
  }
  .PageHolder.Holder {
    background-image: none;
  }
}
</style>