import Vue from 'vue';
import './lang'
window.Vue = Vue;

Vue.component('quiz', require('./views/Quiz.vue').default);

new Vue({
    el: '#app',
    props: ['lang']
})