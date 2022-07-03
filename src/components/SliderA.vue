<template>
  <div class="SliderA">
    <div class="webs hide-md">
      <iframe
        src="/sliders/SliderA/data.html"
        frameborder="0"
        scrolling="no"
        width="100%"
        height="auto"
      ></iframe>
    </div>
    <div class="tabs show-md hide-sm">
      <iframe
        src="/sliders/SliderATab/data.html"
        frameborder="0"
        scrolling="no"
        width="100%"
        height="auto"
      ></iframe>
    </div>
    <div class="tabs show-sm">
      <iframe
        src="/sliders/SliderAMobile/data.html"
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
  name: "SliderA",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
