import './styles/style.scss';
import UIkit from 'uikit/dist/css/uikit.min.css';

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.use(UIkit);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')