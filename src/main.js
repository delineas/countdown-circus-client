import Vue from 'vue'
import VueRouter from "vue-router";
import App from './App.vue'
import CounterClock from "@/components/CounterClock.vue";

import "@/assets/css/tailwind.css";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/countdown/:id",
      component: CounterClock
    }
  ],
  mode: "history"
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
