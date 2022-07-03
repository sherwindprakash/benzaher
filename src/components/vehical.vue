<template>
  <!--  -->
  <button v-if="SingleEntry" class="Expander" v-on:click="isHidden = !isHidden">
    {{ SingleEntry.Type }} - {{ SingleEntry.Make }}
  </button>
  <div v-if="!isHidden">
    <div v-if="SingleEntry" class="HolderVehical">
      <img
        class="VehicalImg"
        :src="'https://binzaher.com/api/storage/uploads' + this.SingleEntryCAR"
        alt="..."
      />
      <img
        class="VehicalImg"
        :src="'https://binzaher.com/api/storage/uploads' + this.SingleEntryCARM"
        alt="..."
      />
      <div><b>Make</b></div>
      <div>{{ SingleEntry.Make }}</div>
      <div><b>Year</b></div>
      <div>{{ SingleEntry.Year }}</div>
      <div><b>Chasis No</b></div>
      <div>{{ SingleEntry.Chasis_No }}</div>
      <div><b>No of Cylinders</b></div>
      <div>{{ SingleEntry.No_of_Cylinders }}</div>
      <div><b>Engine Displacement</b></div>
      <div>
        {{ SingleEntry.Engine_Displacement }}
      </div>

      <div class="column col-12 text-right text-small">
        <a class="ButEdit" :href="'#edit' + SingleEntry._id">Edit info</a>
        <div class="modal modal-md" :id="'edit' + SingleEntry._id">
          <a class="modal-overlay" href="#modals-sizes" aria-label="Close"></a>
          <div class="modal-container text-left" role="document">
            <div class="modal-header">
              <a
                class="btn btn-clear float-right"
                href="#modals-sizes"
                aria-label="Close"
              ></a>
            </div>
            <div class="modal-body">
              <div class="content">
                <form id="edit-form" @submit.prevent="processForm">
                  <div
                    class="columns"
                    style="display: flex; align-items: flex-end"
                  >
                    <div class="column col-12">
                      <!-- form input control -->
                      <div class="form-group">
                        <label class="form-label" for="Make">Make</label>
                        <input
                          id="Make"
                          v-model="SingleEntry.Make"
                          class="form-input"
                          type="text"
                          placeholder="Make"
                        />
                      </div>
                      <!-- form input control -->
                      <div class="form-group">
                        <label class="form-label" for="Year">Year</label>
                        <input
                          id="Year"
                          v-model="SingleEntry.Year"
                          class="form-input"
                          type="text"
                          placeholder="Year"
                        />
                      </div>
                      <!-- form input control -->
                      <div class="form-group">
                        <label class="form-label" for="Chasis_No"
                          >Chasis No</label
                        >
                        <input
                          id="Chasis_No"
                          v-model="SingleEntry.Chasis_No"
                          class="form-input"
                          type="text"
                          placeholder="Chasis No"
                        />
                      </div>
                      <!-- form input control -->
                      <div class="form-group">
                        <label class="form-label" for="No_of_Cylinders"
                          >No of Cylinders</label
                        >
                        <input
                          id="No_of_Cylinders"
                          v-model="SingleEntry.No_of_Cylinders"
                          class="form-input"
                          type="text"
                          placeholder="No of Cylinders"
                        />
                      </div>
                      <!-- form input control -->
                      <div class="form-group">
                        <label class="form-label" for="Engine_Displacement"
                          >Engine Displacement</label
                        >
                        <input
                          id="Engine_Displacement"
                          v-model="SingleEntry.Engine_Displacement"
                          class="form-input"
                          type="text"
                          placeholder="Engine Displacement"
                        />
                      </div>
                      <!--  -->
                    </div>

                    <div
                      class="column col-12 text-right"
                      style="padding-top: 30px; padding-bottom: 10px"
                    >
                      <button class="BtnSend" type="submit">Update</button>
                    </div>
                  </div>
                </form>
                <form id="delete-form" @submit.prevent="processFormDelete">
                  <div
                    class="columns"
                    style="display: flex; align-items: flex-end"
                  >
                    <div
                      class="column col-12 text-right"
                      style="
                        padding-top: 10px;
                        padding-bottom: 10px;
                        text-align: left;
                      "
                    >
                      <button class="BtnSend" type="submit">Delete</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--  -->
</template>
<script>
import axios from "axios";
var notyf = new Notyf();

export default {
  name: "Vehical",
  components: {},
  props: {
    Make: String,
  },

  data() {
    return {
      SingleEntry: null,
      //
      isHidden: true,
      SingleEntryCAR: null,
      SingleEntryCARM:null
    };
  },

  computed: {
    UserEmail() {
      return sessionStorage.getItem("customersEmail");
    },
  },

  mounted() {
    axios
      .get(
        "https://binzaher.com/api/api/collections/entry/my_vehicles/" +
          this.Make +
          "?token=b8766574e1a92b4e6296441248669c"
      )
      .then((response) => {
        this.SingleEntry = response.data;
        console.log("SingleEntry", this.SingleEntry.Chasis_No);

        axios
          .get(
            "https://binzaher.com/api/api/cockpit/assets?token=b8766574e1a92b4e6296441248669c&filter[Vehical]=" +
              this.UserEmail +
              "_Vehical_" +
              this.SingleEntry.Chasis_No
          )
          .then((response) => {
            this.SingleEntryCAR = response.data.assets[0].path;
            console.log("SingleEntryCAR", response.data.assets[0].path);
          });

           axios
          .get(
            "https://binzaher.com/api/api/cockpit/assets?token=b8766574e1a92b4e6296441248669c&filter[Vehical]=" +
              this.UserEmail +
              "_mulkiya_" +
              this.SingleEntry.Chasis_No
          )
          .then((response) => {
            this.SingleEntryCARM = response.data.assets[0].path;
            console.log("SingleEntryCARM", response.data.assets[0].path);
          });


      });
  },

  methods: {
    processForm: function () {
      //
      let data = JSON.stringify({
        data: {
          Make: this.SingleEntry.Make,
          Year: this.SingleEntry.Year,
          Chasis_No: this.SingleEntry.Chasis_No,
          No_of_Cylinders: this.SingleEntry.No_of_Cylinders,
          Engine_Displacement: this.SingleEntry.Engine_Displacement,
          _id: this.SingleEntry._id,
        },
      });

      let config = {
        method: "post",
        url:
          "https://binzaher.com/api/api/collections/save/my_vehicles/" +
          this.Make +
          "?token=b8766574e1a92b4e6296441248669c",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios(config)
        .then((response) => {
          //console.log(JSON.stringify(response.data));
          notyf.success("Data has been updated.");
          window.setTimeout(function () {
            window.location.href = "/profile";
          }, 3000);
        })
        .catch((error) => {
          console.log(error);
          notyf.error("Update Failed.");
        });

      //
    },
    processFormDelete: function () {
      //
      let dataDel = "";

      let configDel = {
        method: "post",
        url:
          "https://binzaher.com/api/api/collections/remove/my_vehicles?token=b8766574e1a92b4e6296441248669c&filter[_id]=" +
          this.Make,
        headers: {},
        data: dataDel,
      };

      axios(configDel)
        .then((response) => {
          notyf.success("Data has been deleted.");
          window.setTimeout(function () {
            window.location.href = "/profile";
          }, 3000);
        })
        .catch((error) => {
          console.log(error);
        });

      //
    },
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
    },
  },
};
</script>

<style scoped>
.column.col-12 .form-group {
    width: 48%;
    float: left;
    margin: 1%;
}
img.VehicalImg {
  width: 100%;
  height: 150px;
  object-fit: cover;
}
.HolderVehical {
  padding: 10px;
  background-color: #c7284394;
  border-top-color: initial;
  border-top-style: solid;
  border-top-width: 0;
  border-right-color: initial;
  border-right-style: solid;
  border-right-width: 2px;
  border-bottom-color: initial;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: initial;
  border-left-style: solid;
  border-left-width: 2px;
  border-image-source: initial;
  border-image-slice: initial;
  border-image-width: initial;
  border-image-outset: initial;
  border-image-repeat: initial;
}
button.Expander {
  width: 100%;
  background-color: #c7284394;
  border: 2px solid;
  cursor: pointer;
  font-weight: 900;
}
a.ButEdit {
  font-size: 12px;
  color: black;
  font-weight: 600;
  cursor: pointer;
}
form#edit-form label.form-label {
  font-weight: 600;
}
button.BtnSend {
  color: #c72843;
  background: transparent;
  outline: none;
  border: none;
  font-size: 20px;
  font-style: italic;
  cursor: pointer;
}

@media only screen and (max-width: 600px) {
 
.column.col-12 .form-group {
    width: 100%;
    float: none;
    margin: 0%;
}
}

</style>
