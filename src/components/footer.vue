<template>
  <div class="container">
    <div class="columns" style="display: flex; align-items: flex-end">
      <div class="column col-3 col-xs-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
        <img
          style="margin-right: 15px"
          class="LongLogoIMG"
          src="../assets/logo.svg"
          title="Benzaher"
          alt="Benzaher"
        />
        <div class="FooterMenu">
          <router-link class="MenuF" to="/privacy-policy"
            >Privacy Policy</router-link
          >

          <router-link class="MenuF" to="/terms-and-conditions"
            >Terms and Conditions</router-link
          >
          <div style="color: #cac8c8; font-size: 14px">
            Oman - Mabelah Industrial<br />Area 6/7
          </div>

         <div style="display: flex;
    align-items: center;
    padding-top: 15px;
    color: #6abf4b;">Powerd by <img style="width: 32px;
    height: 32px;
    display: inline;" src="../assets/Thawani_logo_green.svg" /></div>
        </div>
      </div>
      <div
        class="column col-6 col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6"
      ></div>
      <div class="column col-3 col-xs-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
        <div class="IconHolder">
          <a href="#" target="_blank">
            <img
              class="SMediaIcons"
              src="../assets/Facebook.svg"
              title="Benzaher - Facebook"
              alt="Benzaher - Facebook"
              height="45"
              width="45"
            />
          </a>
          <a href="#" target="_blank">
            <img
              class="SMediaIcons"
              src="../assets/Instergram.svg"
              title="Benzaher - Instagram"
              alt="Benzaher - Instagram"
              height="45"
              width="45"
            />
          </a>
          <a href="#" target="_blank">
            <img
              class="SMediaIcons"
              src="../assets/YouTube.svg"
              title="Benzaher - YouTube"
              alt="Benzaher - YouTube"
              height="45"
              width="45"
            />
          </a>
          <a href="#" target="_blank">
            <img
              class="SMediaIcons"
              src="../assets/Mail.svg"
              title="Benzaher - Email"
              alt="Benzaher - Email"
              height="45"
              width="45"
            />
          </a>
        </div>
        <div
          style="
            color: #cac8c8;
            font-size: 14px;
            margin-bottom: 30px;
            padding-left: 15px;
          "
        >
          © {{ new Date().getFullYear() }} BinZaher Designed by
          <a
            style="color: #cac8c8"
            href="http://hiendadvertising.com/"
            target="_blank"
            >Hi<span style="color: #f26b27">endadvertising</span></a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.IconHolder {
  margin-top: 20px;
  padding-bottom: 20px;
}
img.SMediaIcons {
  width: 45px;
  height: 45px;
}
img.SMediaIcons:hover {
  border: 1px solid #cac8c869;
}
.FooterMenu {
  padding-left: 15px;
  margin-bottom: 30px;
}
a.MenuF {
  color: #cac8c8;
  font-size: 14px;
}
.FooterMenu a {
  display: block;
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
