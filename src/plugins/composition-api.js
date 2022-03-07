import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'
import JsonExcel from 'vue-json-excel'

Vue.use(VueCompositionAPI)
Vue.component('downloadExcel', JsonExcel)