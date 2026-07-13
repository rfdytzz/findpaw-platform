import Login from '@/views/auth/Login.vue'
import Register from '@/views/auth/Register.vue'
import Main from '@/views/Main.vue'
import NotFound from '@/views/NotFound.vue'
import Profile from '@/views/user/Profile.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Main },
    { path: '/login', component: Login, meta: {guest:true} },
    { path: '/register', component: Register, meta: {guest:true} },
    { path: '/profile', component: Profile, meta: {auth:true} },

    { path: '/:pathMatch(.*)*', component: NotFound }
  ],
})

export default router
