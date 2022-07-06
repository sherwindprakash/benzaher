<template>
<div class="PageHolder">
    <div class="RegisterHolder">
        <div class="CHolder">
            <section v-if="errored">
                <p>
                    We're sorry, we're not able to retrieve this information at the moment, please
                    try back later
                </p>
            </section>

            <section v-else>
                <div v-if="loading">Loading...</div>

                <div v-else>
                    <!-- Check -->
                    <div v-if="this.info.length === 0" style="text-align: center">
                        <h1>Cart is Empty</h1>
                        <router-link class="btn btn-primary" to="/products-&-services/products">View Products</router-link>
                    </div>
                    <div v-else>
                        <!--  -->
                        <div class="container">
                            <div class="columns">
                                <div class="column col-6 col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                                    <div class="container">
                                        <div class="columns">
                                            <div class="column col-6 col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6" style="margin-bottom: 20px" v-for="item in info" :key="item">
                                                <h2 style="display: inline-block; font-size: 24px">
                                                    {{ item.value }}<sup>OMR</sup>
                                                </h2>
                                                <h3 style="
                              display: inline-block;
                              font-size: 16px;
                              padding-left: 15px;
                            ">
                                                    <b>Quantity</b> {{ item.quantity }}
                                                </h3>
                                                <product_single :product="item.product" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="column col-6 col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                                    <h4>T & C</h4>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the industry's standard dummy text ever
                                    since the 1500s, when an unknown printer took a galley of type and
                                    scrambled it to make a type specimen book. It has survived not only
                                    five centuries, but also the leap into electronic typesetting,
                                    remaining essentially unchanged. It was popularised in the 1960s with
                                    the release of Letraset sheets containing Lorem Ipsum passages, and
                                    more recently with desktop publishing software like Aldus PageMaker
                                    including versions of Lorem Ipsum.
                                    <div style="margin-top: 20px; margin-bottom: 20px">
                                        <!-- Full Price -->
                                        <h5 style="display: inline">Cart Totals</h5>
                                        <h2 style="display: inline; margin-left: 5px; font-weight: 900">
                                            {{ basket_total }}<sup>OMR</sup>
                                        </h2>
                                        <!--  -->
                                        <div style="margin-top: 30px; margin-bottom: 30px; text-align: right">
                                            <!-- CheckOUT -->
                                            <form @submit.prevent="Pay">
                                                <button @click="key = 1" :class="{ disabled: key == 1 }" class="btn btn-primary" type="submit">
                                                    Proceed to checkout
                                                </button>

                                            </form>
                                            <!--  -->
                                            <!--  -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--  -->
                    </div>
                    <!--  -->
                </div>
            </section>
        </div>
    </div>
</div>
</template>

<script>
import axios from "axios";
import product_single from "@/components/product_single.vue";
var notyf = new Notyf();

import {
    useTimestamp
} from "@vueuse/core";

export default {
    data() {
        return {
            info: null,
            loading: true,
            errored: false,
            basket_total: null,
            key: "0",

        };
    },
    computed: {
        UserEmail() {
            return sessionStorage.getItem("customersEmail");
        },

        //
        sumTotal() {
            let basket_total = 0;
            this.info.forEach((val) => {
                basket_total += Number(val.value);
            });
            console.log(basket_total);
            this.basket_total = basket_total;
        },
        //

    },
    components: {
        product_single,
    },
    mounted() {
        axios
            .get(
                "https://binzaher.com/api/api/collections/get/cart?token=b8766574e1a92b4e6296441248669c&filter[user]=" + this.UserEmail
            )
            .then((response) => {
                this.info = response.data.entries;
                console.log(response.data.entries);
                this.sumTotal;
            })
            .catch((error) => {
                console.log(error);
                this.errored = true;
            })
            .finally(() => (this.loading = false));
        //
    },
    methods: {
      
        Pay: function () {
            // Timestmp
            const timestamp = useTimestamp({
                offset: 0
            });
            //
            const options = {
                method: "POST",
                url: "https://checkout.thawani.om/api/v1/checkout/session",
                headers: {
                    "thawani-api-key": "ROGUWytTjnGkC7hWqA0EwQTbhSO1du",
                    "Content-Type": "application/json",
                },
                data: {
                    client_reference_id: timestamp._value,
                    // 
                    products: [{
                            name: "Mobile Phone",
                            unit_amount: 2000,
                            quantity: 3
                        },
                        {
                            name: "Kage",
                            unit_amount: 1500,
                            quantity: 1
                        },
                    ],
                    // 
                    success_url: "https://google.com",
                    cancel_url: "https://youtube.com",
                    metadata: {
                        customer: this.UserEmail,
                        order_id: 1
                    },
                },
            };

            axios
                .request(options)
                .then(function (response) {
                    console.log("session_id", response.data.data.session_id);
                    console.log(response.data.data);
                    //window.open("https://checkout.thawani.om/pay/"+ response.data.data.session_id, "_self");
                })
                .catch(function (error) {
                    console.error(error);
                });

            //
        },
    },
};
</script>

<style scoped>

sup {
    font-weight: 400;
    font-size: 14px;
    padding-left: 5px;
}

.PageHolder.Holder {
    background-repeat: no-repeat;
    background-position: right center;
    background-color: white;
    background-size: contain;
}

.CHolder {
    padding-top: 50px;
    padding-bottom: 100px;
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

    max-width: 1180px;
}
</style>
