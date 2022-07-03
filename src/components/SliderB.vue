<template>
  <div class="SliderB">
    <router-link class="Mybtn" to="/the-company/who-we-are"
      >Find Out More</router-link
    >

    <div class="webs hide-md">
      <iframe
        src="/sliders/SliderB/data.html"
        frameborder="0"
        scrolling="no"
        width="100%"
        height="auto"
      ></iframe>
    </div>
    <div class="tabs show-md hide-sm">
      <iframe
        src="/sliders/SliderBTab/data.html"
        frameborder="0"
        scrolling="no"
        width="100%"
        height="auto"
      ></iframe>
    </div>
    <div class="tabs show-sm">
      <iframe
        src="/sliders/SliderBMobile/data.html"
        frameborder="0"
        scrolling="no"
        width="100%"
        height="auto"
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: "SliderB",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="scss">
.SliderB {
  position: relative;
}
a.Mybtn {
  position: absolute;
  bottom: 30px;
  right: 30px;
  z-index: 1;
  color: white;
  font-style: italic;
  text-transform: uppercase;
  border: 2px solid;
  padding: 5px;
}
a.Mybtn:hover {
  color: #383636;
}
.webs.hide-md {
  width: 100%;
  padding-top: 44%;
  position: relative;
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
.tabs.show-md.hide-sm {
  width: 100%;
  padding-top: 130%;
  position: relative;
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
.tabs.show-sm {
  width: 100%;
  padding-top: 175%;
  position: relative;
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
@media only screen and (max-width: 1280px) {
}
@media only screen and (max-width: 1800px) {
}
</style>

