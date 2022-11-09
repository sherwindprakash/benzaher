<template>
  <section v-if="errored">
    <p>
      We're sorry, we're not able to retrieve this information at the moment,
      please try back later
    </p>
  </section>

  <section v-else>
    <div v-if="loading">
      <div class="loading loading-lg"></div>
    </div>

    <div v-else>
      <div class="who-we-areHolder" v-if="info">
        <div class="columns">
          <div class="column col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <h1
              style="
                font-size: 30px;
                font-style: italic;
                font-weight: bold;
                text-transform: uppercase;
                margin-top: 20px;
                color: #ababab;
              "
            >
              {{ info.title_en }} 
            </h1>
            <div v-html="info.content_en"></div>
            <!--  -->
            <div class="POPHolfer">
              <!--  -->
              <!-- <h5 style="color: #ababab">{{ info.single_services_title }}</h5> -->

              <div class="column">
                <div v-if="Auth">
                  <a href="#single_services">
                    <!-- <img
                      :src="
                        'https://binzaher.com/' +
                        info.single_services_image.path
                      "
                      class="PopUP"
                    /> -->
                    Book Now
                  </a>
                </div>
                <div v-else>
                  <router-link class="User" to="/register">
                    Book Now
                  </router-link>
                </div>

                <div class="modal" id="single_services">
                  <a
                    class="modal-overlay"
                    href="#modals"
                    aria-label="Close"
                  ></a>
                  <div class="modal-container" role="document">
                    <div class="modal-header">
                      <a
                        class="btn btn-clear float-right"
                        href="#modals"
                        aria-label="Close"
                      ></a>
                      <div class="modal-title h5">Booking</div>
                    </div>
                    <div class="modal-body">
                      <div class="content">
                        <form id="signup-form" @submit.prevent="processForm">
                          <div
                            class="columns"
                            style="display: flex; align-items: flex-end"
                          >
                            <div class="column col-12">
                              <!--  -->
                              <div class="form-group">
                                <label class="form-label" for="selected_service"
                                  >Select Service by (Required)</label
                                >
                                <select
                                  v-model="When_booking_a_service"
                                  class="form-select"
                                  style="color: black"
                                  required
                                >
                                  <option value="" selected disabled hidden>
                                    Choose an option
                                  </option>
                                  <option>Visit Service Center</option>
                                  <option>KLIK Service</option>
                                </select>
                              </div>
                              <!--  -->

                              <div
                                v-if="
                                  When_booking_a_service ===
                                  'Visit Service Center'
                                "
                              >
                                *where the user can select the branch they would
                                like to go to, but Pre-select for them the
                                nearest branch to them.
                                <!-- form radio control -->
                                <div
                                  class="form-group"
                                  style="
                                    display: flex;
                                    justify-content: space-evenly;
                                  "
                                >
                                  <label class="form-radio">
                                    <input
                                      type="radio"
                                      name="Location"
                                      value="Location A"
                                      v-model="checkedNames"
                                      checked
                                    />
                                    <i class="form-icon"></i> Location A
                                  </label>
                                  <label class="form-radio">
                                    <input
                                      type="radio"
                                      name="Location"
                                      value="Location B"
                                      v-model="checkedNames"
                                    />
                                    <i class="form-icon"></i> Location B
                                  </label>
                                  <label class="form-radio">
                                    <input
                                      type="radio"
                                      name="Location"
                                      value="Location C"
                                      v-model="checkedNames"
                                    />
                                    <i class="form-icon"></i> Location C
                                  </label>
                                </div>
                              </div>

                              <div
                                v-if="When_booking_a_service === 'KLIK Service'"
                              >
                                *Where the website will take the user’s
                                location, and the Klik Van will come to them.

                                <iframe
              style="width: 100%; border: none; height: 400px"
              src="../location/index.html"
            ></iframe>

                              </div>

                              <!--  -->
                              <div class="form-group">
                                <label class="form-label" for="selected_service"
                                  >Selecte Service (Required)</label
                                >
                                <select
                                  v-model="selected_service"
                                  class="form-select"
                                  style="color: black"
                                  required
                                >
                                  <option value="" selected disabled hidden>
                                    Choose an option
                                  </option>
                                  <option
                                    v-for="list in info.single_services"
                                    :key="list"
                                  >
                                    {{ list.value.name }}
                                  </option>
                                </select>
                              </div>
                              <!--  -->
                              <div class="form-group">
                                <label class="form-label" for="selected_service"
                                  >Selecte Vehicle (Required)</label
                                >
                                <select
                                  v-model="vehicle"
                                  class="form-select"
                                  style="color: black"
                                  required
                                >
                                  <option value="" selected disabled hidden>
                                    Choose an option
                                  </option>
                                  <option v-for="list in myCar" :key="list">
                                    {{ list.Make }} - {{ list.Chasis_No }} -
                                    {{ list.Year }}
                                  </option>
                                </select>
                                <p>
                                  If you not listerd, then please
                                  <router-link
                                    style="
                                      color: rgb(0, 0, 0);
                                      padding-right: 4px;
                                      text-decoration: underline;
                                    "
                                    to="/profile"
                                    >Add your vehical</router-link
                                  >

                                  here.
                                </p>
                              </div>
                              <!--  -->

                              <div
                                class="form-group"
                                style="display: inline-block; width: 50%"
                              >
                                <label class="form-label" for="selected_service"
                                  >Selecte Data (Required)</label
                                >
                                <input
                                  id="Date"
                                  v-model="DateX"
                                  class="form-input"
                                  required
                                  type="date"
                                />
                              </div>
                              <!--  -->
                              <div
                                class="form-group"
                                style="display: inline-block; width: 50%"
                              >
                                <label class="form-label" for="selected_service"
                                  >Selecte Time (Required)</label
                                >
                                <input
                                  id="Time"
                                  v-model="TimeX"
                                  class="form-input"
                                  required
                                  type="time"
                                />
                              </div>
                              <!--  -->
                              <div class="form-group">
                                <label class="form-label" for="Your_Message"
                                  >Note</label
                                >
                                <textarea
                                  rows="2"
                                  id="Your_Message"
                                  v-model="Note"
                                  class="form-input"
                                  type="text-area"
                                  placeholder="Note"
                                />
                              </div>

                              <!--  -->
                            </div>
                            <div class="column col-12 text-right">
                              <button class="BtnSend" type="submit">
                                Book Now
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!--  -->
            </div>
           
          </div>
          <div
            class="column col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6"
            style="
              display: flex;
              flex-flow: row nowrap;
              align-items: flex-start;
              justify-content: center;
            "
          >
            <img
              :src="'https://binzaher.com' + info.image.path"
              :alt="info.title_en"
              :title="info.title_en"
              class="IMGHolder"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
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
      baseurl: "https://binzaher.com/",
      Auth: null,
      User: null,
      myCar: null,
      When_booking_a_service: null,
      checkedNames:null,
     
    };
  },
  computed: {
    customersId() {
      return sessionStorage.getItem("customersId");
    },
    customersEmail() {
      return sessionStorage.getItem("customersEmail");
    },
    customersName() {
      return sessionStorage.getItem("customersName");
    },
    customersMobile() {
      return sessionStorage.getItem("customersMobile");
    },
   
  },
  mounted() {
    axios
      .get(
        "https://binzaher.com/api/api/singletons/get/services?token=b8766574e1a92b4e6296441248669c"
      )
      .then((response) => {
        this.info = response.data;
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));

    //
    axios
      .get(
        "https://binzaher.com/api/api/collections/get/my_vehicles?token=b8766574e1a92b4e6296441248669c&filter[User_Email]=" +
          this.customersEmail
      )
      .then((response) => {
        this.myCar = response.data.entries;
        console.log(response.data.entries);
      });
    //
    if (sessionStorage.getItem("customersId")) {
      this.Auth = sessionStorage.getItem("customersId");
    }
    //
  },
  methods: {
    processForm: function () {
      //
      var data = JSON.stringify({
        data: {
          user: this.customersId,
          selected_service: this.selected_service,
          service_type: "Single Services Booking",
          vehicle: this.vehicle,
          date: this.DateX,
          time: this.TimeX,
          note: this.Note,
          //
          email: this.customersEmail,
          mobile: this.customersMobile,
          name: this.customersName,
          When_booking_a_service:this.When_booking_a_service +" / "+ this.checkedNames,
          longitude: sessionStorage.getItem("longitude"),
          latitude : sessionStorage.getItem("latitude")
        },
      });

      var config = {
        method: "post",
        url: "https://binzaher.com/api/api/collections/save/service_booking?token=b8766574e1a92b4e6296441248669c",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          notyf.success("Success.");
          window.setTimeout(function () {
            window.location.href = "/products-&-services/services";
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
button.BtnSend {
  color: #c72843;
  background: transparent;
  outline: none;
  border: none;
  font-size: 20px;
  font-style: italic;
  cursor: pointer;
  margin-top: 25px;
  margin-bottom: 20px;
}
.modal-body {
  color: black;
}
img.PopUP {
  width: 100%;
  height: 150px;
  object-fit: cover;
}
.POPHolfer {
  width: 33.3%;
  display: inline;
  float: left;
  padding: 10px;
}
.POPHolfer h5 {
  text-align: center;
}
.who-we-areHolder {
  max-width: 1280px;
  margin: auto;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 80px;
  padding-bottom: 100px;
}
img.IMGHolder {
  width: 400px;
  height: 400px;
  object-fit: contain;
}

@media only screen and (max-width: 600px) {
  .who-we-areHolder {
    padding-top: 20px;
  }
  img.IMGHolder {
    width: 90%;
    height: 90%;
    object-fit: contain;
    margin-top: 20px;
  }
}

@media only screen and (max-width: 840px) {
  .POPHolfer {
    width: 100%;
    display: inline;
    float: left;
    padding: 10px;
  }
  img.PopUP {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
}
</style>