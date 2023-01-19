<template>
  <div class="PageHolder">
    <div class="RegisterHolder">
      <div class="CHolder">
        <div class="columns">
          <div class="column col-8 col-xs-12 col-sm-12 col-md-12 col-lg-8 col-xl-8"></div>
          <div class="column col-12 text-left">
            <!-- <iframe
              style="width: 100%; border: none; height: 500px"
              src="../map.html"
            ></iframe> -->

            <!-- MAP HERe -->

            <!--  -->

            <div style="text-align: center; margin-top: 20px">
              <router-link class="Mybtn" to="/products-&-services/services"
                >Book a service</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.PageHolder.Holder {
  /* background-image: url(/src/assets/long-stripe.svg); */
  background-repeat: no-repeat;
  background-position: right center;
  background-color: white;
  background-size: contain;
}
.PageHolder {
  background-color: white;
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
