import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';

Vue.use(VueResource);

Vue.http.options.root = "https://vuejs-vue-resource-7c27b-default-rtdb.firebaseio.com";//apiyi global olarak tanıttık

new Vue({
  el: '#app',
  render: h => h(App)
})
