<template>
  <div class="container p-fixed" style="z-index: 100">
    <div
      class="columns headholder"
      style="display: flex; align-items: center; background-color: #212121"
    >
      <div class="column col-2 col-xs-4 col-sm-4 col-md-4 col-lg-3 col-xl-3">
        <div
          @click="scrollToTop()"
          class="LongMenu"
          :class="{ 'LongMenu--hidden': !showNavbar2 }"
        >
          <router-link to="/">
            <img
              class="LongLogoIMG"
              src="../assets/logo.svg"
              width="180"
              height="90"
              alt="Benzaher"
              title="Benzaher"
            />
          </router-link>
        </div>

        <div
          @click="scrollToTop()"
          class="ShortMenu"
          :class="{ 'ShortMenu--hidden': !showNavbar }"
        >
          <router-link to="/">
            <img
              class="ShortLogoIMG"
              src="../assets/logo_short.svg"
              width="100"
              height="100"
              alt="Benzaher"
              title="Benzaher"
            />
          </router-link>
        </div>
      </div>
      <div class="column col-7 col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-7 hide-lg">
        <!-- dropdown button group -->
        <div class="dropdown">
          <div class="btn-group">
            <router-link
              class="dropdown-toggle Menu"
              tabindex="0"
              to="/the-company/"
              :class="[
                {
                  'router-link-active active':
                    $route.name === 'Who_we_are' || $route.name === 'Why_choose_us',
                },
              ]"
              >The Company</router-link
            >
            <ul class="menu">
              <router-link class="MenuSub" to="/the-company/who-we-are"
                >Who we are</router-link
              >
              <router-link class="MenuSub" to="/the-company/why-choose-us"
                >Why choose us</router-link
              >
            </ul>
          </div>
        </div>

        <div class="dropdown">
          <div class="btn-group">
            <router-link
              class="dropdown-toggle Menu"
              tabindex="0"
              to="/products-&-services"
              :class="[
                {
                  'router-link-active active':
                    $route.name === 'Products' ||
                    $route.name === 'Services' ||
                    $route.name === 'ServiceCenters' ||
                    $route.name === 'Motul' ||
                    $route.name === 'ProductsSingle' ||
                    $route.name === 'ProductsSingle300VRange' ||
                    $route.name === 'ProductsSingleAdditives' ||
                    $route.name === 'ProductsSingleBrakeOil' ||
                    $route.name === 'ProductsSingleCarCare' ||
                    $route.name === 'ProductsSingleCoolant' ||
                    $route.name === 'ProductsSingleMotorOil' ||
                    $route.name === 'ProductsSingleAutomotive' ||
                    $route.name === 'ProductsSingleMarineOil' ||
                    $route.name === 'ProductsSingleTransmissionOil' ||
                    $route.name === 'ProductsSingleForkOil' ||
                    $route.name === 'ProductsSingleMaintenance&MCCare' ||
                    $route.name === 'ProductsSingleHydraulicOil',
                },
              ]"
              >Products & Services</router-link
            >

            <ul class="menu">
              <router-link class="MenuSub" to="/products-&-services/products"
                >Products</router-link
              >
              <router-link class="MenuSub" to="/products-&-services/services"
                >Services</router-link
              >
              <router-link class="MenuSub" to="/products-&-services/service-centers"
                >Service Centers</router-link
              >
            </ul>
          </div>
        </div>

        <div class="dropdown">
          <div class="btn-group">
            <router-link
              class="dropdown-toggle Menu"
              tabindex="0"
              to="/recommended"
              :class="[
                {
                  'router-link-active active':
                    $route.name === 'Associate' ||
                    $route.name === 'Sponsorship' ||
                    $route.name === 'News',
                },
              ]"
              >Recommended</router-link
            >
            <ul class="menu">
              <router-link class="MenuSub" to="/recommended/associate"
                >Associate</router-link
              >
              <router-link class="MenuSub" to="/recommended/sponsorship"
                >Sponsorship</router-link
              >
              <router-link class="MenuSub" to="/recommended/news">News</router-link>
            </ul>
          </div>
        </div>

        <router-link class="Menu" to="/careers">Careers</router-link>
        <router-link class="Menu" to="/contact-us">Contact us</router-link>
      </div>
      <div class="column col-3 col-xs-8 col-sm-8 col-md-8 col-lg-9 col-xl-2 text-right">
        <div
          class="hide-lg"
          style="display: flex; align-items: center; justify-content: flex-end"
        >
          <router-link to="/">
            <img
              class="FlagIMG"
              src="../assets/omani-flag.svg"
              width="45"
              height="25"
              alt="Arabic"
              title="Arabic"
            />
          </router-link>
          <span v-if="Auth">
            <router-link class="Cart" to="/cart">
              <span v-if="cart" class="badge" :data-badge="cart.length">
                <img class="Cart" src="../assets/cart.svg" />
              </span>
            </router-link>
          </span>

          <div v-if="Auth">
            <div class="column col-6 col-xs-12">
              <span v-if="ProfilePic">
                <a href="#profile">
                  <figure class="avatar avatar-md">
                    <img
                      :src="'https://binzaher.com/api/storage/uploads' + ProfilePic.path"
                      alt="..."
                    />
                  </figure>
                </a>
              </span>
              <span v-else>
                <a href="#profile">
                  <figure class="avatar avatar-md">
                    <img src="../assets/64x64.png" alt="..." />
                  </figure>
                </a>
              </span>

              <div class="modal modal-sm" id="profile">
                <a class="modal-overlay" href="#modals-sizes" aria-label="Close"></a>
                <div
                  class="modal-container"
                  role="document"
                  v-if="User"
                  style="text-align: center"
                >
                  <div class="modal-header">
                    <a href="#modals-sizes" aria-label="Close"></a>
                    <div class="modal-title h5">Hi, {{ User.FullName }}</div>
                  </div>
                  <div class="modal-body">
                    <div class="content">
                      <form id="logout-form" @submit.prevent="logout">
                        <router-link
                          class="btn btn-primary"
                          style="margin-right: 10px"
                          to="/profile"
                          >Profile</router-link
                        >
                        <button class="btn btn-primary" type="submit">Logout</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-else>
            <router-link class="User" to="/login">Login</router-link>
            <span>/</span>
            <router-link class="User" to="/register">Register</router-link>
          </div>
        </div>

        <div class="show-lg text-right">
          <div class="off-canvas" style="text-align: right; width: 100%; display: block">
            <!-- off-screen toggle button -->
            <router-link to="/">
              <img
                class="FlagIMGMobile"
                src="../assets/omani-flag.svg"
                width="45"
                height="25"
                alt="Arabic"
                title="Arabic"
              />
            </router-link>

            <a class="float-right" href="#sidebar-menu">
              <img
                class="MenuIMG"
                src="../assets/menu.svg"
                width="60"
                height="67"
                alt="Menu"
                title="Menu"
              />
            </a>

            <div id="sidebar-menu" class="off-canvas-sidebar">
              <!-- off-screen sidebar -->
              <div>
                <img
                  style="margin-right: 15px"
                  class="LongLogoIMG"
                  src="../assets/logo.svg"
                  title="Benzaher"
                  alt="Benzaher"
                />
              </div>
              <div class="text-center" style="margin-bottom: 15px; margin-top: 5px">
                <router-link to="/profile">
                  <figure class="avatar avatar-xl">
                    <img
                      v-if="Auth"
                      :src="'https://binzaher.com/api/storage/uploads' + ProfilePic.path"
                      alt="..."
                    />
                    <img v-else src="../assets/64x64.png" alt="..." />
                  </figure>
                </router-link>

                <div v-if="Auth">
                  <form
                    id="logout-form"
                    @submit.prevent="logout"
                    style="text-align: center; padding-left: 15px; margin-top: 20px"
                  >
                    <router-link
                      class="btn btn-primary"
                      style="margin-right: 10px"
                      to="/profile"
                      >Profile</router-link
                    >
                    <button class="btn btn-primary" type="submit">Logout</button>
                  </form>
                </div>
              </div>

              <div class="MobileMenu">
                <div v-if="!Auth">
                  <router-link class="Menu" to="/login">Login</router-link>
                  <router-link class="Menu" to="/register">Register</router-link>
                </div>
                <router-link class="Menu" to="/the-company/who-we-are"
                  >Who we are</router-link
                >

                <router-link class="Menu" to="/products-&-services"
                  >Products & Services</router-link
                >
                <router-link class="Menu" to="/recommended">Recommended</router-link>
                <router-link class="Menu" to="/careers">Careers</router-link>
                <router-link class="Menu" to="/contact-us">Contact us</router-link>
              </div>
            </div>

            <a class="off-canvas-overlay" href="#close"></a>

            <div class="off-canvas-content">
              <!-- off-screen content -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Header",
  data() {
    return {
      showNavbar: true,
      showNavbar2: true,
      lastScrollPosition: 0,
      Auth: null,
      INT: null,
      User: null,
      ProfilePic: false,
      cart: null,
    };
  },
  watch: {},
  computed: {
    UserID() {
      return sessionStorage.getItem("customersId");
    },
    UserEmail() {
      return sessionStorage.getItem("customersEmail");
    },
  },
  mounted() {
    axios
      .get(
        "https://binzaher.com/api/api/collections/get/cart?token=b8766574e1a92b4e6296441248669c&filter[user]=" +
          this.UserEmail
      )
      .then((response) => {
        this.cart = response.data.entries;
        console.log(response.data.entries);
      });

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
        //console.log("USER", response.data[0]);
      });

    if (sessionStorage.getItem("customersId")) {
      this.Auth = sessionStorage.getItem("customersId");
      this.INT = sessionStorage.getItem("customersName").charAt(0);
    }
    window.addEventListener("scroll", this.onScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    logout: function () {
      sessionStorage.removeItem("customersId");
      sessionStorage.removeItem("customersEmail");
      sessionStorage.removeItem("customersName");
      sessionStorage.removeItem("customersMobile");

      window.location.href = "/";
    },

    scrollToTop() {
      window.scrollTo(0, 0);
    },
    onScroll() {
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollPosition < 0) {
        return;
      }
      this.showNavbar = currentScrollPosition === 0;
      this.showNavbar2 = currentScrollPosition === 0;
      this.lastScrollPosition = currentScrollPosition;
    },
  },
};
</script>

<style lang="scss">
img.Cart {
  width: 40px;
}
span.badge {
  margin-right: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
}
div#profile {
  text-align: left;
}
a.dropdown-toggle.Menu.router-link-active.active {
  text-decoration: underline;
  color: #c72844 !important;
}
.MenuSub {
  text-transform: uppercase;
  font-size: 14px;
  font-style: italic;
  font-weight: bolder;
  display: block;
  margin-bottom: 10px;
  margin-top: 10px;
  color: #212121;
}
img.FlagIMGMobile {
  width: 45px;
  position: relative;
  top: 15px;
}
img.FlagIMG {
  width: 35px;
  display: inline-block;
  top: 3px;
  position: relative;
  right: 15px;
}
a.User {
  color: white !important;
  padding-left: 5px;
  padding-right: 5px;
  text-transform: uppercase;
  font-size: 14px;
  font-style: italic;
  font-weight: 500;
}
.columns.headholder {
  height: 110px;
}
.MobileMenu a.Menu {
  text-align: left;
  display: block;
  padding-top: 5px;
  padding-right: 15px;
  padding-bottom: 5px;
  padding-left: 15px;
  text-transform: uppercase;
  font-style: italic;
  font-weight: 500;
}
.MobileMenu a.exact-active.page-active {
  color: #bbbbbb !important;
  text-decoration: underline;
}
img.MenuIMG {
  width: 60px;
  height: 60px;
  transform: rotate(10deg);
}
div#sidebar-menu {
  background: linear-gradient(105deg, #383636 20%, #c52b46 20%);
}
a.active.exact-active.Menu,
a.active.exact-active.MenuSub {
  color: #c72844 !important;
  text-decoration: underline;
}

.ShortMenu.ShortMenu--hidden,
.LongMenu {
  display: block;
}
.ShortMenu,
.LongMenu.LongMenu--hidden {
  display: none;
}
img.LongLogoIMG {
  width: 180px;
}
img.ShortLogoIMG {
  width: 100px;
  background-color: #c72844b3;
  top: 50%;
  position: absolute;
  left: 20px;
}
a.Menu {
  color: white !important;
  padding-left: 10px;
  padding-right: 10px;
  text-transform: uppercase;
  font-size: 14px;
  font-style: italic;
  font-weight: 500;
}

@media only screen and (max-width: 1080px) {
  a.Menu {
    color: white !important;
    padding-left: 0;
    padding-right: 10px;
  }
}

@media only screen and (max-width: 960px) {
}
</style>
