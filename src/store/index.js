import Vue from 'vue';
import Vuex from 'vuex';

import { littleStore } from './modules';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        littleStore,
    }
});