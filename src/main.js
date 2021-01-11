import './styles/style.scss';
import 'uikit/dist/css/uikit.min.css';

import Vue from 'vue';
import App from './App.vue';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import VueScrollTo from 'vue-scrollto';
import store from "./store";

Vue.use(VueScrollTo, {
    duration: 200,
});
Vue.config.productionTip = false
UIkit.use(Icons);

new Vue({
    store,
    render: h => h(App)
}).$mount('#app')