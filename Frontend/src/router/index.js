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
import ConnectedAccount from '@/views/user/ConnectedAccount.vue'
import Dashboard from '@/views/admin/Dashboard.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/', component: Main, meta: { auth: true } },
        { path: '/search', component: Search },
        { path: '/signin', component: Signin, meta: { guest: true } },
        { path: '/signup', component: Signup, meta: { guest: true } },

        { path: '/admin', component: Dashboard, meta: { auth: true, role: 'admin' } },

        { path: '/profile', component: Profile, meta: { auth: true } },
        { path: '/profile/change-password', component: ChangePassword, meta: { auth: true } },
        { path: '/profile/verified-account', component: VerifiedAccount, meta: { auth: true } },
        { path: '/profile/bookmarks', component: Bookmarks, meta: { auth: true } },
        { path: '/profile/account', component: Account, meta: { auth: true } },
        { path: '/profile/connected-account', component: ConnectedAccount, meta: { auth: true } },

        { path: '/detail', component: Detail },

        // { path: '/:pathMatch(.*)*', component: NotFound }
    ],
})

NProgress.configure({
    showSpinner: false,
});

router.beforeEach((to, from) => {
    NProgress.start()
    const token = localStorage.getItem('token')
    const role = localStorage.getItem('role')

    if (to.meta.auth && !token) {
        return '/signin'
    }

    if (to.meta.guest && token) {
        return '/'
    }

    if (to.meta.role === 'admin') {
        if (role !== 'admin') {
            return '/'
        }
        return true
    }
});

router.afterEach(() => {
    NProgress.done()
});

router.onError(() => {
    NProgress.done();
});

export default router
