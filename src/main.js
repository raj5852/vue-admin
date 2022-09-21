import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import AdminHeader from './layouts/Header.vue'
import route from './router/index.js'

createApp(App).component('AdminHeader',AdminHeader).use(route).mount('#app')
