require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import Axios from 'axios';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

Vue.use(VueRouter,VueAxios,Axios, BootstrapVue, IconsPlugin);

import App from './components/App.vue';
import Read from './components/Read.vue';

const routes = [
    {
        name: 'read',
        path: '/',
        component: Read
    },
]

const router = new VueRouter({ mode: 'history', routes: routes });
new Vue(Vue.util.extend({ router }, App)).$mount("#app");