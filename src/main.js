import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;


router.beforeEach((to, from, next) => {
  window.routeT0 = performance.now();
  next();
});
// router.afterEach((to, from) => {
//   window.routeT1 = performance.now();
//   console.log(`Took ${window.routeT1 - window.routeT0} milliseconds.`, from.name, to.name);
// });

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
