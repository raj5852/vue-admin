import { createWebHistory, createRouter} from 'vue-router'
import AdminDashboard from '../pages/Admin/Dashboard.vue'
const routes = [
    {
        path: '/',
        name: 'admin',
        component: AdminDashboard
    }
]

const route = createRouter({
    history: createWebHistory(),
    routes
})
export default route