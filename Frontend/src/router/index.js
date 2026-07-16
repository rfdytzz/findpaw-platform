import Login from '@/views/auth/Login.vue'
import Register from '@/views/auth/Register.vue'
import Main from '@/views/Main.vue'
import NotFound from '@/views/NotFound.vue'
import Search from '@/views/Search.vue'
import Account from '@/views/user/Account.vue'
import Bookmarks from '@/views/user/Bookmarks.vue'
import ChangePassword from '@/views/user/ChangePassword.vue'
import Profile from '@/views/user/Profile.vue'
import VerifiedAccount from '@/views/user/VerifiedAccount.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Main },
    { path: '/search', component: Search },
    { path: '/login', component: Login, meta: {guest:true} },
    { path: '/register', component: Register, meta: {guest:true} },
    { path: '/profile', component: Profile, meta: {auth:true} },
    { path: '/profile/change-password', component: ChangePassword, meta: {auth:true} },
    { path: '/profile/verified-account', component: VerifiedAccount, meta: {auth:true} },
    { path: '/profile/bookmarks', component: Bookmarks, meta: {auth:true} },
    { path: '/profile/account', component: Account, meta: {auth:true} },

    { path: '/:pathMatch(.*)*', component: NotFound }
  ],
})

export default router
