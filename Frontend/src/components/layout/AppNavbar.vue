<script setup>
import { useSignout } from '@/composables/useSignout';
import { useUser } from '@/composables/useUser';
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import Loader from '../ui/Loader.vue';

document.body.classList.remove('overflow-hidden')

const route = useRoute()

const isDrop = ref(false)
const toggleDrop = () => {
    isDrop.value = !isDrop.value
}

const isSidebar = ref(false)
const toggleSidebar = () => {
    isSidebar.value = !isSidebar.value

    if (isSidebar.value) {
        document.body.classList.add('overflow-hidden')
    } else {
        document.body.classList.remove('overflow-hidden')
    }
}

const isSignout = ref(false)
const toggleSignout = () => {
    isSignout.value = !isSignout.value

    if (isSignout.value) {
        document.body.classList.add('overflow-hidden')
    } else {
        document.body.classList.remove('overflow-hidden')
    }
}

const { data, loading, getData } = useUser()
const { getSignout, signoutLoading } = useSignout()
const avatar = computed(() => data.value?.name)

onMounted(() => {
    getData()
})
</script>

<template>
    <header
        class="fixed top-0 left-0 w-full h-16 bg-white/90 backdrop-blur-md border-b border-slate-200 flex justify-between items-center px-6 md:px-10 z-50">
        <a href="/" class="font-bold text-xl"><i class='bx bxs-dog'></i> FindPaw</a>
        <div class="hidden md:block">
            <ul class="text-sm font-inter flex items-center gap-5">
                <router-link to="/" :class="route.path === '/' ? 'bg-gray-100 px-3' : ''"
                    class="hover:bg-gray-100 flex hover:px-3 ease-in-out p-2 rounded-md hover:ring hover:ring-gray-100 transition-all duration-200">
                    Home
                </router-link>
                <router-link to="/" :class="route.path === '/about' ? 'bg-gray-100 px-3' : ''"
                    class="hover:bg-gray-100 flex hover:px-3 ease-in-out p-2 rounded-md hover:ring hover:ring-gray-100 transition-all duration-200">
                    About
                </router-link>
                <div
                    class="flex focus-within:w-80 w-70 items-center transition-all duration-200 ease-in-out p-2 text-sm border border-gray-100 bg-gray-100 rounded-md">
                    <input type="text" class="focus:outline-0 flex-1" name="" id="" placeholder="Search">
                    <i class="bx bx-search"></i>
                </div>
                <router-link to="/search" :class="route.path === '/search' ? 'bg-gray-100 px-3' : ''"
                    class="hover:bg-gray-100 hover:px-3 ease-in-out p-2 rounded-md hover:ring hover:ring-gray-100 transition-all duration-200">
                    Explore
                </router-link>
                <router-link to="#" :class="route.path === '/blog' ? 'bg-gray-100 px-3' : ''"
                    class="hover:bg-gray-100 hover:px-3 ease-in-out p-2 rounded-md hover:ring hover:ring-gray-100 transition-all duration-200">
                    Blog
                </router-link>
            </ul>
        </div>
        <div class="hidden md:block">
            <div class="flex relative">
                <img @click="toggleDrop" alt="avatar" :src="`https://ui-avatars.com/api/?name=${avatar}`"
                    class="size-8 rounded-full relative cursor-pointer">
                <div :class="isDrop ? 'visible translate-y-0 translate-x-0 opacity-100 scale-100' : 'invisible -translate-y-3 translate-x-0.5 opacity-0 scale-95'"
                    class="absolute bg-white w-40 border border-slate-200 rounded-md top-10 inset-e-0 p-1 transition-all duration-65 ease-in-out">
                    <div class="flex flex-col font-inter text-sm gap-1">
                        <router-link to="/profile"
                            class="p-2 flex text-gray-600 hover:text-gray-900 items-center justify-between hover:bg-gray-100 rounded-md transition duration-200 ease-in-out">Profile<i
                                class="bx bx-user"></i></router-link>
                        <router-link to="#"
                            class="p-2 flex text-gray-600 hover:text-gray-900 items-center justify-between hover:bg-gray-100 rounded-md transition duration-200 ease-in-out">Settings<i
                                class="bx bx-cog"></i></router-link>
                        <router-link to="/profile/bookmarks"
                            class="p-2 flex text-gray-600 hover:text-gray-900 items-center justify-between hover:bg-gray-100 rounded-md transition duration-200 ease-in-out">Bookmarks<i
                                class="bx bx-bookmarks"></i></router-link>
                        <button type="submit" @click="toggleSignout"
                            class="p-2 flex items-center cursor-pointer justify-between hover:bg-red-50 rounded-md transition duration-200 ease-in-out text-red-800 hover:text-red-700">Sign
                            out<i class="bx bx-log-out"></i></button>
                    </div>
                </div>
            </div>
        </div>
        <div class="block md:hidden">
            <i @click="toggleSidebar"  class="bx bx-menu text-4xl cursor-pointer"></i>
        </div>
    </header>

    <div @click="toggleSidebar" :class="isSidebar ? 'block' : 'hidden'"
        class="inset-0 md:hidden block bg-black/50 fixed z-50"></div>

    <div :class="isSidebar ? 'translate-x-0' : 'translate-x-full'"
        class="md:hidden block transition duration-200 ease-in-out fixed top-0 right-0 bg-gray-50 h-screen w-75 z-60">
        <div class="flex h-full flex-col p-5">
            <div class="text-xl mb-5 font-semibold font-inter flex justify-between items-center">
                <div class="font-extrabold">FindPaw</div>
                <i @click="toggleSidebar" class="bx bx-x text-3xl cursor-pointer"></i>
            </div>
            <div class="pt-5 w-full flex flex-col gap-8 overflow-y-auto">
                <div class="flex items-center gap-5">
                    <img class="rounded-full" src="https://ui-avatars.com/api/?name=Elon+Musk">
                    <div class="flex flex-col">
                        <div class="md font-semibold">Elon Musk</div>
                        <div class="text-sm text-gray-500 font-semibold">elon@mail.com</div>
                    </div>
                </div>
                <div class="flex flex-col gap-2">
                    <div class="font-semibold text-sm text-gray-600">Menu</div>
                    <router-link to=""
                        class="p-2 hover:bg-gray-100 bg-gray-100 text-black rounded-md">Home</router-link>
                    <router-link to="" class="p-2 hover:bg-gray-100 text-gray-600 rounded-md">About</router-link>
                    <router-link to="" class="p-2 hover:bg-gray-100 text-gray-600 rounded-md">Explore</router-link>
                </div>
                <div class="flex flex-col gap-2">
                    <div class="font-semibold text-sm text-gray-600">Account</div>
                    <router-link to="" class="p-2 hover:bg-gray-100 text-gray-600 rounded-md">Profile</router-link>
                    <router-link to="" class="p-2 hover:bg-gray-100 text-gray-600 rounded-md">Change
                        Password</router-link>
                    <router-link to="" class="p-2 hover:bg-gray-100 text-gray-600 rounded-md">Bookmarks</router-link>
                </div>
                <div class="flex flex-col gap-2">
                    <div class="font-semibold text-sm text-gray-600">Services</div>
                    <router-link to="" class="p-2 hover:bg-gray-100 text-gray-600 rounded-md">FAQs</router-link>
                    <router-link to="" class="p-2 hover:bg-gray-100 text-gray-600 rounded-md">Customer
                        Service</router-link>
                    <router-link to="" class="p-2 hover:bg-gray-100 text-gray-600 rounded-md">Report</router-link>
                </div>
                <div class="flex flex-col gap-2">
                    <div class="font-semibold text-sm text-gray-600">Services</div>
                    <router-link to="" class="p-2 hover:bg-gray-100 text-gray-600 rounded-md">FAQs</router-link>
                    <router-link to="" class="p-2 hover:bg-gray-100 text-gray-600 rounded-md">Customer
                        Service</router-link>
                    <router-link to="" class="p-2 hover:bg-gray-100 text-gray-600 rounded-md">Report</router-link>
                </div>
            </div>
        </div>
    </div>

    <div v-if="isSignout" class="fixed transition duration-200 inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
        <div class="w-full max-w-md rounded-xl border border-slate-200 bg-white">
            <div class="px-6 py-5">
                <h2 class="text-lg font-semibold text-slate-900">
                    Sign out
                </h2>
                <p class="mt-2 text-sm leading-6 text-slate-500">
                    Are you sure you want to sign out? You will need to sign in again
                    to access your FindPaw account.
                </p>
            </div>
            <div class="flex justify-end gap-3 border-t border-slate-200 px-6 py-4">
                <button @click="toggleSignout"
                    class="rounded-md border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100">
                    Cancel
                </button>
                <button @click="getSignout"
                    class="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800 flex items-center gap-2">
                    <loader v-if="signoutLoading" />
                    Sign Out
                </button>
            </div>
        </div>
    </div>
</template>