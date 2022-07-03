<template>
  <Header />
  <router-view class="Holder" />
  <Footer />
</template>

<script>
// @ is an alias to /src
import Header from "@/components/header.vue";
import Footer from "@/components/footer.vue";

export default {
  name: "Home",
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss">
// @import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap");
@import url("https://unpkg.com/spectre.css/dist/spectre-exp.min.css");
@import url("./assets/spectre.min.css");

.Holder {
  padding-top: 110px;
}
</style>
