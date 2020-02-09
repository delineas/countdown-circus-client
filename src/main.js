import Vue from 'vue'
import VueRouter from "vue-router";
import App from './App.vue'
import CounterClock from "@/components/CounterClock.vue";
import Home from "@/components/Home.vue"

import "@/assets/css/tailwind.css";

Vue.use(VueRouter);

import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

const router = new VueRouter({
  routes: [
    {
      path: "/countdown/:id",
      component: CounterClock
    },
    {
      path: "/",
      component: Home
    }
  ],
  mode: "history"
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
