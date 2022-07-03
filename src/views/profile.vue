<template>
  <div class="PageHolder" v-if="User">
    <div class="RegisterHolder">
      <div class="CHolder">
        <h5
          v-if="User"
          style="
            font-size: 30px;
            font-style: italic;
            font-weight: bold;
            text-transform: uppercase;
            margin-top: 20px;
            color: rgb(33 33 33);
          "
        >
          Welcome, {{ User.FullName }}
        </h5>

        <div class="columns Holding">
          <div
            class="column col-8 col-xs-12 col-sm-12 col-md-12 col-lg-8 col-xl-8"
          >
            <form
              class="form-horizontal"
              id="signup-form"
              @submit.prevent="processFormProfile"
            >
              <div
                class="form-group"
                style="text-align: center; display: block"
              >
                <div
                  class="col-12 text-center"
                  style="margin-top: 20px; position: relative"
                >
                  <figure class="avatar avatar-xl">
                    <img
                      v-if="ProfilePic"
                      :src="
                        'https://binzaher.com/api/storage/uploads' +
                        ProfilePic.path
                      "
                      alt="..."
                    />
                    <img v-else src="../assets/64x64.png" alt="..." />
                  </figure>
                </div>
                <div class="HolderBttn">
                  <input
                    aria-label="Attach CV"
                    placeholder="Attach CV"
                    type="file"
                    id="file"
                    ref="file"
                    v-on:change="handleFileUpload()"
                    required
                  />
                  <button class="ProilePicSend" type="submit">
                    Update Profile Image
                  </button>
                </div>
              </div>
            </form>

            <form
              class="form-horizontal"
              id="signup-form"
              @submit.prevent="processForm"
            >
              <div class="form-group" v-if="User">
                <div class="col-3 col-sm-12">
                  <label class="form-label" for="FullName">Full Name</label>
                </div>
                <div class="col-9 col-sm-12">
                  <input
                    id="FullName"
                    v-model="User.FullName"
                    class="form-input"
                    type="text"
                    placeholder="Full Name"
                    required
                  />
                </div>
              </div>

              <fieldset disabled>
                <div class="form-group" v-if="User">
                  <div class="col-3 col-sm-12">
                    <label class="form-label" for="Email">Email</label>
                  </div>
                  <div class="col-9 col-sm-12">
                    <input
                      id="Email"
                      v-model="User.email"
                      class="form-input"
                      type="email"
                      placeholder="Email"
                      required
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,14}$"
                    />
                  </div>
                </div>
              </fieldset>

              <div class="form-group" v-if="User">
                <div class="col-3 col-sm-12">
                  <label class="form-label" for="FullName"
                    >Contact Number</label
                  >
                </div>
                <div class="col-9 col-sm-12">
                  <input
                    id="ContactNumber"
                    v-model="User.Mobile"
                    class="form-input"
                    type="number"
                    placeholder="Contact Number"
                    required
                  />
                </div>
              </div>

              <div class="form-group" v-if="User">
                <div class="col-3 col-sm-12">
                  <label class="form-label" for="Password"
                    >Change Password</label
                  >
                </div>
                <div class="col-9 col-sm-12">
                  <input
                    id="Password"
                    v-model="Password"
                    class="form-input"
                    type="password"
                    placeholder="Password"
                    autocomplete="off"
                  />
                </div>
              </div>

              <div class="text-right">
                <button class="BtnSend" type="submit">Edit Profile</button>
              </div>
            </form>

            <h5
              style="
                font-size: 30px;
                font-style: italic;
                font-weight: bold;
                text-transform: uppercase;
                margin-top: 20px;
                color: rgb(199 40 67);
              "
            >
              My Vehicals
            </h5>

            <div class="column text-right" style="padding-bottom: 30px">
              <a class="BtnSend" href="#add_vehical">Add Vehical</a>
              <div class="modal" id="add_vehical">
                <a class="modal-overlay" href="#modals" aria-label="Close"></a>
                <div class="modal-container" role="document">
                  <div class="modal-header">
                    <a
                      class="btn btn-clear float-right"
                      href="#modals"
                      aria-label="Close"
                    ></a>
                  </div>
                  <div class="modal-body text-left">
                    <div class="content">
                      <form
                        class="form-horizontal"
                        id="signup-form"
                        @submit.prevent="processFormVehical"
                      >
                        <div class="form-group">
                          <div class="col-4 col-sm-12">
                            <label class="form-label" for="Make"
                              >Select Type</label
                            >
                          </div>
                          <div class="col-8 col-sm-12">
                            <select v-model="Type" class="form-select" required>
                              <option>Car</option>
                              <option>Motocycle</option>
                              <option>Boat</option>
                            </select>
                          </div>
                        </div>

                        <div class="form-group">
                          <div class="col-4 col-sm-12">
                            <label class="form-label" for="Make">Make</label>
                          </div>
                          <div class="col-8 col-sm-12">
                            <input
                              id="Make"
                              v-model="Make"
                              class="form-input"
                              type="text"
                              placeholder="Make"
                              required
                            />
                          </div>
                        </div>

                        <div class="form-group">
                          <div class="col-4 col-sm-12">
                            <label class="form-label" for="Make">Year</label>
                          </div>
                          <div class="col-8 col-sm-12">
                            <input
                              id="Year"
                              v-model="Year"
                              class="form-input"
                              type="number"
                              placeholder="Year"
                              required
                            />
                          </div>
                        </div>

                        <div class="form-group">
                          <div class="col-4 col-sm-12">
                            <label class="form-label" for="Make"
                              >Chasis No</label
                            >
                          </div>
                          <div class="col-8 col-sm-12">
                            <input
                              id="Chasis No"
                              v-model="Chasis_No"
                              class="form-input"
                              type="text"
                              placeholder="Chasis No"
                              required
                            />
                          </div>
                        </div>

                        <div class="form-group">
                          <div class="col-4 col-sm-12">
                            <label class="form-label" for="Make"
                              >No of Cylinders</label
                            >
                          </div>
                          <div class="col-8 col-sm-12">
                            <input
                              id="No of Cylinders"
                              v-model="No_of_Cylinders"
                              class="form-input"
                              type="text"
                              placeholder="No of Cylinders"
                              required
                            />
                          </div>
                        </div>

                        <div class="form-group">
                          <div class="col-4 col-sm-12">
                            <label class="form-label" for="Make"
                              >Engine Displacement</label
                            >
                          </div>
                          <div class="col-8 col-sm-12">
                            <input
                              id="Engine Displacement"
                              v-model="Engine_Displacement"
                              class="form-input"
                              type="text"
                              placeholder="Engine Displacement"
                              required
                            />
                          </div>
                        </div>

                        <!-- form input control -->
                        <div class="form-group" style="display: block">
                          <label class="form-label" for="Attach-vehicle-Image"
                            >Attach vehicle Image</label
                          >
                          <input
                            aria-label="Attach  Vehicle Image"
                            placeholder="Attach Vehicle Image"
                            type="file"
                            id="file2"
                            ref="file2"
                            v-on:change="handleFileUpload2()"
                            required
                          />
                        </div>
                        <!--  -->

                          <!-- form input control -->
                        <div class="form-group" style="display: block">
                          <label class="form-label" for="Attach-mulkiya-Image"
                            >Attach Mulkiya Image</label
                          >
                          <input
                            aria-label="Attach Mulkiya Image"
                            placeholder="Attach Mulkiya Image"
                            type="file"
                            id="file3"
                            ref="file3"
                            v-on:change="handleFileUpload3()"
                            required
                          />
                        </div>
                        <!--  -->



                        <div class="text-right">
                          <button class="BtnSend" type="submit">
                            Add Vehical
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="columns">
              <div
                v-for="item in Vehical"
                :key="item"
                class="
                  column
                  col-4 col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4
                  Spacer
                "
              >
                <!--  -->

                <VehicalHolder :Make="item._id" />

                <!--  -->
              </div>
            </div>

            <!--  -->
          </div>
          <div
            class="
              column
              col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12
            "
            style="margin-top: 50px; margin-bottom: 30px"
          >
            <router-link class="Mybtn" to="/purchase-history"
              >Purchase History</router-link
            >
            <router-link class="Mybtn" to="/service-history"
              >Service History</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    v-else
    class="PageHolder"
    style="
      min-height: 600px;
      display: flex;
      color: black;
      align-items: center;
      justify-content: center;
    "
  >
    You need to
    <router-link
      style="padding-left: 5px; padding-right: 5px; text-decoration: underline"
      to="/login"
      >login</router-link
    >
    to access this page. Please enter your username and password and click
    <router-link
      style="padding-left: 5px; padding-right: 5px; text-decoration: underline"
      to="/login"
      >login</router-link
    >.
  </div>
</template>

<script>
import VehicalHolder from "@/components/vehical.vue";
import axios from "axios";
import router from "../router";
var notyf = new Notyf();

export default {
  data() {
    return {
      User: null,
      Vehical: null,
      ProfilePic: null,
      Make: "",
      Year: "",
      Chasis_No: "",
      No_of_Cylinders: "",
      Engine_Displacement: "",
      file: [],
      file2: [],
      file3: [],
      Type: "",
    };
  },
  components: { VehicalHolder },
  mounted() {
    axios
      .get(
        "https://binzaher.com/api/api/cockpit/assets?token=b8766574e1a92b4e6296441248669c&filter[email]=" +
          this.UserEmail +
          "_Profile"
      )
      .then((response) => {
        this.ProfilePic = response.data.assets[0];
        console.log("ProfilePic", response.data.assets[0]);
      });

    axios
      .get(
        "https://binzaher.com/api/api/cockpit/listUsers?token=b8766574e1a92b4e6296441248669c&filter[_id]=" +
          this.UserID
      )
      .then((response) => {
        this.User = response.data[0];
        console.log("USER", response.data[0]);
      });

    axios
      .get(
        "https://binzaher.com/api/api/collections/entries/my_vehicles?token=b8766574e1a92b4e6296441248669c&filter[User_Email]=" +
          this.UserEmail
      )
      .then((response) => {
        this.Vehical = response.data.entries;
        console.log("Vehical", response.data.entries);
      });
  },
  computed: {
    UserID() {
      return sessionStorage.getItem("customersId");
    },
    UserEmail() {
      return sessionStorage.getItem("customersEmail");
    },
  },
  methods: {
    processFormProfile: function () {
      let formData = new FormData();

      formData.append("files[]", this.file);
      formData.append("meta[email]", this.UserEmail + "_Profile");

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
          //
          notyf.success("Profile Picture Update Success.");
          console.log(response.data.assets[0].path);
          window.setTimeout(function () {
            window.location.href = "/profile";
          }, 3000);
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

    processForm: function () {
      var data = JSON.stringify({
        user: {
          _id: this.UserID,
          password: this.Password,
          email: this.UserEmail,
        },
      });

      var config = {
        method: "post",
        url: "https://binzaher.com/api/api/cockpit/saveUser?token=b8766574e1a92b4e6296441248669c",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          notyf.success("Password has been updated.");
          window.setTimeout(function () {
            router.push({
              path: "/login",
            });
          }, 3000);

          console.log(response.data);
          //alert("Registration success. please login to access the portal.");
        })
        .catch(function (error) {
          notyf.error("Update Failed.");
        });
    },

    processFormVehical: function () {
      let formData = new FormData();

      formData.append("files[]", this.file2);
      formData.append(
        "meta[Vehical]",
        this.UserEmail + "_Vehical_" + this.Chasis_No
      );

      axios.post(
        "https://binzaher.com/api/api/cockpit/addAssets?token=b8766574e1a92b4e6296441248669c",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      let formData3 = new FormData();

      formData3.append("files[]", this.file3);
      formData3.append(
        "meta[Vehical]",
        this.UserEmail + "_mulkiya_" + this.Chasis_No
      );


      axios.post(
        "https://binzaher.com/api/api/cockpit/addAssets?token=b8766574e1a92b4e6296441248669c",
        formData3,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      var data = JSON.stringify({
        data: {
          Type: this.Type,
          Make: this.Make,
          Year: this.Year,
          Chasis_No: this.Chasis_No,
          No_of_Cylinders: this.No_of_Cylinders,
          Engine_Displacement: this.Engine_Displacement,
          User_Email: this.UserEmail,
        },
      });

      var config = {
        method: "post",
        url: "https://binzaher.com/api/api/collections/save/my_vehicles?token=b8766574e1a92b4e6296441248669c",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          notyf.success("Success.");
          window.setTimeout(function () {
            window.location.href = "/profile";
          }, 3000);

          console.log(response.data);
          //alert("Registration success. please login to access the portal.");
        })
        .catch(function (error) {
          notyf.error("Failed.");
        });
    },
    handleFileUpload2() {
      this.file2 = this.$refs.file2.files[0];
    },
    handleFileUpload3() {
      this.file3 = this.$refs.file3.files[0];
    },
  },
};
</script>

<style scoped>
.HolderBttn {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  margin-bottom: 30px;
}
input#file,
input#file2,
input#file3 {
  font-size: 10px;
  margin-top: 5px;
  background-color: transparent;
}

.column.col-4.col-xs-12.col-sm-12.col-md-4.col-lg-4.col-xl-4.Spacer {
  margin-bottom: 10px;
}
button.ProilePicSend {
  background: #686868;
  border: none;
  display: inline;
  margin: 5px;
  color: white;
  cursor: pointer;
}
a.Mybtn {
  bottom: 30px;
  right: 30px;
  z-index: 1;
  color: #212121;
  font-style: italic;
  text-transform: uppercase;
  border: 2px solid;
  padding: 5px;
  margin-right: 15px;
}
button.BtnSend,
a.BtnSend {
  color: #c72843;
  background: transparent;
  outline: none;
  border: none;
  font-size: 20px;
  font-style: italic;
  cursor: pointer;
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
.columns.Holding {
  display: block;
  width: 100%;
  padding-bottom: 20px;
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