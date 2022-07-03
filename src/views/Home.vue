<template>
  <div class="home">
    <!--  -->
    <div class="column">
      <div class="modal" id="offer">
        <a class="modal-overlay" href="#close" aria-label="Close"></a>
        <div
          class="modal-container"
          role="document"
          style="background-color: #ffffff66"
        >
          <div class="modal-header">
            <a
              class="btn btn-clear float-right"
              href="#close"
              aria-label="Close"
            ></a>
          </div>
          <div class="modal-body">
            <div class="content" style="text-align: center">
              <h1
                style="
                  color: black;
                  font-weight: 700;
                  font-style: italic;
                  text-align: center;
                "
              >
                Get 10% off for your First Order
              </h1>
              <router-link
                style="
                  color: rgb(43, 43, 43);
                  padding-right: 4px;
                  text-decoration: none;
                  font-size: 29px;
                  display: inline-block;
                  border: 1px solid;
                  padding: 7px;
                  margin-bottom: 30px;
                "
                to="/products-&-services/products"
                >Order Now</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--  -->
    <SliderA data-aos="fade-up" />
    <SliderB data-aos="fade-up" />
    <Products data-aos="fade-up" />
    <SliderD data-aos="fade-up" />
    <News data-aos="fade-up" />
  </div>
</template>

<script>
// @ is an alias to /src
import SliderA from "@/components/SliderA.vue";
import SliderB from "@/components/SliderB.vue";
import Products from "@/components/Products.vue";
import SliderD from "@/components/SliderD.vue";
import News from "@/components/News.vue";

export default {
  name: "Home",
  components: {
    SliderA,
    SliderB,
    Products,
    SliderD,
    News,
  },
};
</script>
