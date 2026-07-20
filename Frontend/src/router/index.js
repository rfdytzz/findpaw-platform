import Signin from '@/views/auth/Signin.vue'
import Signup from '@/views/auth/Signup.vue'
import Main from '@/views/Main.vue'
import NotFound from '@/views/NotFound.vue'
import Detail from '@/views/product/Detail.vue'
import Search from '@/views/Search.vue'
import Account from '@/views/user/Account.vue'
import Bookmarks from '@/views/user/Bookmarks.vue'
import ChangePassword from '@/views/user/ChangePassword.vue'
import Profile from '@/views/user/Profile.vue'
import VerifiedAccount from '@/views/user/VerifiedAccount.vue'
import { createRouter, createWebHistory } from 'vue-router'
import NProgress from "nprogress"
import "nprogress/nprogress.css"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Main },
    { path: '/search', component: Search },
    { path: '/signin', component: Signin, meta: {guest:true} },
    { path: '/signup', component: Signup, meta: {guest:true} },
    { path: '/profile', component: Profile, meta: {auth:true} },
    { path: '/profile/change-password', component: ChangePassword, meta: {auth:true} },
    { path: '/profile/verified-account', component: VerifiedAccount, meta: {auth:true} },
    { path: '/profile/bookmarks', component: Bookmarks, meta: {auth:true} },
    { path: '/profile/account', component: Account, meta: {auth:true} },

    { path: '/detail', component: Detail },

    { path: '/:pathMatch(.*)*', component: NotFound }
  ],
})

NProgress.configure({
    showSpinner: false,
});

router.beforeEach((to, from, next) => {
    NProgress.start();
    next();
});

router.afterEach(() => {
    NProgress.done();
});

router.onError(() => {
    NProgress.done();
});

export default router
