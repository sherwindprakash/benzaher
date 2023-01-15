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
      path: "/result/",
      name: "the-success",
      component: () => import("../views/success.vue"),
    },
    {
      path: "/spare-parts/",
      name: "spare-parts",
      component: () => import("../views/spare_parts.vue"),
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
      path: "/products-&-services/products/motul/categores",
      name: "Motul List",
      component: () => import("../views/products-motul-list.vue"),
    },
    {
      path: "/products-&-services/products/kn",
      name: "KN",
      component: () => import("../views/products-k&n.vue"),
    },
    {
      path: "/products-&-services/products/kn/categores",
      name: "Motul List",
      component: () => import("../views/products-k&n-list.vue"),
    },
    {
      path: "/products-&-services/products/spare-parts",
      name: "spare-parts",
      component: () => import("../views/products-spare-parts.vue"),
    },
    {
      path: "/products-&-services/products/spare-parts/categores",
      name: "spare-parts List",
      component: () => import("../views/products-spare-parts-list.vue"),
    },
    {
      path: "/products-&-services/products/:productsid",
      name: "ProductsSingle",
      component: () => import("../views/products_single.vue"),
    },
    // spare_parts
    {
      path: "/products-&-services/products/spare_part/:spare_partsid",
      name: "spare_partsSingle",
      component: () => import("../views/spare_parts_single.vue"),
    },
    //
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
      path: "/products-&-services/products/:product",
      name: "product",
      component: () => import("../views/products/product.vue"),
    },
    //
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
    {
      path: "/cart/spare_parts/",
      name: "Cartspare_parts",
      component: () => import("../views/cart_spare_parts.vue"),
    },
  ],
  scrollBehavior() {
    document.getElementById("app").scrollIntoView({ behavior: "smooth" });
  },
});

export default router;
