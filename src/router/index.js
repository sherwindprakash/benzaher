import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active",

  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/the-company/",
      name: "the-company",
      component: () => import("../views/the-company.vue"),
      redirect: "/the-company/who-we-are",
    },
    {
      path: "/the-company/who-we-are",
      name: "Who_we_are",
      component: () => import("../views/who-we-are.vue"),
    },
    {
      path: "/the-company/why-choose-us",
      name: "Why_choose_us",
      component: () => import("../views/why-choose-us.vue"),
    },
    //
    {
      path: "/products-&-services",
      name: "Products & Services",
      component: () => import("../views/products-&-services.vue"),
      redirect: "/products-&-services/products",
    },
    {
      path: "/products-&-services/products",
      name: "Products",
      component: () => import("../views/products.vue"),
    },
    {
      path: "/products-&-services/products/motul",
      name: "Motul",
      component: () => import("../views/products-motul.vue"),
    },
    {
      path: "/products-&-services/products/:productsid",
      name: "ProductsSingle",
      component: () => import("../views/products_single.vue"),
    },
    {
      path: "/products-&-services/services",
      name: "Services",
      component: () => import("../views/services.vue"),
    },
    {
      path: "/products-&-services/service-centers",
      name: "ServiceCenters",
      component: () => import("../views/service-centers.vue"),
    },

    //
    {
      path: "/recommended",
      name: "Recommended",
      component: () => import("../views/recommended.vue"),
      redirect: "/recommended/associate",
    },
    {
      path: "/recommended/associate",
      name: "Associate",
      component: () => import("../views/associate.vue"),
    },
    {
      path: "/recommended/sponsorship",
      name: "Sponsorship",
      component: () => import("../views/sponsorship.vue"),
    },
    {
      path: "/recommended/sponsorship/:sponsorshipid",
      name: "Sponsorship_Single",
      component: () => import("../views/sponsorship_Single.vue"),
    },
    {
      path: "/recommended/news",
      name: "News",
      component: () => import("../views/news.vue"),
    },
    {
      path: "/recommended/news/:mediaid",
      name: "NewsSingle",
      component: () => import("../views/news_single.vue"),
    },
    //
    {
      path: "/careers",
      name: "Careers",
      component: () => import("../views/careers.vue"),
    },
    {
      path: "/contact-us",
      name: "Contact us",
      component: () => import("../views/contact-us.vue"),
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("../views/login.vue"),
    },
    {
      path: "/register",
      name: "Register",
      component: () => import("../views/register.vue"),
    },
    {
      path: "/profile",
      name: "profile",
      component: () => import("../views/profile.vue"),
    },
    {
      path: "/purchase-history",
      name: "purchase history",
      component: () => import("../views/purchase-history.vue"),
    },
    {
      path: "/service-history",
      name: "service history",
      component: () => import("../views/service-history.vue"),
    },

    {
      path: "/privacy-policy",
      name: "Privacy Policy",
      component: () => import("../views/privacy-policy.vue"),
    },
    {
      path: "/terms-and-conditions",
      name: "Terms and Conditions",
      component: () => import("../views/terms-and-conditions.vue"),
    },
    //
    {
      path: "/products-&-services/products/300VRange",
      name: "ProductsSingle300VRange",
      component: () => import("../views/products/300VRange.vue"),
    },
    {
      path: "/products-&-services/products/Additives",
      name: "ProductsSingleAdditives",
      component: () => import("../views/products/Additives.vue"),
    },
    {
      path: "/products-&-services/products/BrakeOil",
      name: "ProductsSingleBrakeOil",
      component: () => import("../views/products/BrakeOil.vue"),
    },
    {
      path: "/products-&-services/products/CarCare",
      name: "ProductsSingleCarCare",
      component: () => import("../views/products/CarCare.vue"),
    },
    {
      path: "/products-&-services/products/Coolant",
      name: "ProductsSingleCoolant",
      component: () => import("../views/products/Coolant.vue"),
    },
    {
      path: "/products-&-services/products/MotorOil",
      name: "ProductsSingleMotorOil",
      component: () => import("../views/products/MotorOil.vue"),
    },
    {
      path: "/products-&-services/products/Automotive",
      name: "ProductsSingleAutomotive",
      component: () => import("../views/products/Automotive.vue"),
    },
    {
      path: "/products-&-services/products/MarineOil",
      name: "ProductsSingleMarineOil",
      component: () => import("../views/products/MarineOil.vue"),
    },
    {
      path: "/products-&-services/products/TransmissionOil",
      name: "ProductsSingleTransmissionOil",
      component: () => import("../views/products/TransmissionOil.vue"),
    },
    {
      path: "/products-&-services/products/ForkOil",
      name: "ProductsSingleForkOil",
      component: () => import("../views/products/ForkOil.vue"),
    },
    {
      path: "/products-&-services/products/Maintenance&MCCare",
      name: "ProductsSingleMaintenance&MCCare",
      component: () => import("../views/products/Maintenance&MCCare.vue"),
    },
    {
      path: "/products-&-services/products/HydraulicOil",
      name: "ProductsSingleHydraulicOil",
      component: () => import("../views/products/HydraulicOil.vue"),
    },
    {
      path: "/Search",
      name: "Search",
      component: () => import("../views/Search.vue"),
    },
    {
      path: "/cart",
      name: "Cart",
      component: () => import("../views/cart.vue"),
    },
  ],
});

export default router;
