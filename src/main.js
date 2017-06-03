import Vue from 'vue';
import App from './App.vue';
import store from './store';
import _ from 'lodash';

Vue.use(_);

new Vue({
  el: '#app',
  store,
  render: h => h(App)
});
