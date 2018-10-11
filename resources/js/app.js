require('./bootstrap');

window.Vue = require('vue');

import Vue from 'vue'
// import Vuetify from 'vuetify'
 
// Vue.use(Vuetify)

// import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader

Vue.component('chat-app', require('./components/ChatApp.vue'));

const app = new Vue({
    el: '#app'
});
