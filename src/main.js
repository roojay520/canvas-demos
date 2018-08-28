import 'normalize.css';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import canvas from './utils/canvas';
import colors from './utils/color';
import helpers from './utils/helper';

Vue.config.productionTip = false;
Vue.prototype.$canvas = canvas;
Vue.prototype.$colors = colors;
Vue.prototype.$helpers = helpers;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
