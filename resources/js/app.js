/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
import VueRouter from 'vue-router';

import HeaderComponent from "./components/HeaderComponent";
import Links from "./components/html/Links";
import List from "./components/html/List";
import Table from "./components/html/Table";
import Form from "./components/html/Form";

import UniversalSelectors from "./components/css/UniversalSelectors";
import TypeSelectors from "./components/css/TypeSelectors";
import ClassSelectors from "./components/css/ClassSelectors";
import IDSelectors from "./components/css/IDSelectors";
import AttributeSelectors from "./components/css/AttributeSelectors";
import PseudoClasses from "./components/css/PseudoClasses";
import PseudoElements from "./components/css/PseudoElements";
import BackgroundProperties from "./components/css/BackgroundProperties";
import TextProperties from "./components/css/TextProperties";
import FontProperties from "./components/css/FontProperties";
import BoxProperties from "./components/css/BoxProperties";

require('./bootstrap');

window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))
Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/html/links',
            component: Links
        },
        {
            path: '/html/list',
            component: List
        },
        {
            path: '/html/table',
            component: Table
        },
        {
            path: '/html/form',
            component: Form
        },

        {
            path: '/css/universal-selectors',
            component: UniversalSelectors
        },
        {
            path: '/css/type-selectors',
            component: TypeSelectors
        },
        {
            path: '/css/class-selectors',
            component: ClassSelectors
        },
        {
            path: '/css/id-selectors',
            component: IDSelectors
        },
        {
            path: '/css/attribute-selectors',
            component: AttributeSelectors
        },
        {
            path: '/css/pseudo-classes',
            component: PseudoClasses
        },
        {
            path: '/css/pseudo-elements',
            component: PseudoElements
        },
        {
            path: '/css/background-properties',
            component: BackgroundProperties
        },
        {
            path: '/css/text-properties',
            component: TextProperties
        },
        {
            path: '/css/font-properties',
            component: FontProperties
        },
        {
            path: '/css/box-properties',
            component: BoxProperties
        },
        
    ]
});

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('header-component', HeaderComponent);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    router
});
