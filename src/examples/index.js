import Vue from 'vue';
import App from './App.vue';
import Idc from '../main.js';
import '../components/theme/src/index.scss';

Vue.use(Idc);

console.log(Idc);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
