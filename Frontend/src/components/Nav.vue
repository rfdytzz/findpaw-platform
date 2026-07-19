<script setup>
import { ref } from 'vue';

const isDrop = ref(false)
const toggleDrop = () => {
    isDrop.value = !isDrop.value
}
</script>

<template>
    <header
        class="fixed top-0 left-0 w-full h-16 bg-white/80 backdrop-blur-md border-b border-slate-200 flex justify-between items-center px-6 md:px-10 z-50">
        <a href="/" class="font-bold text-xl"><i class='bx bxs-dog'></i> FindPaw</a>
        <ul class="text-sm font-inter flex items-center gap-5">
            <router-link to=""
                class="bg-gray-100 px-3 ease-in-out p-2 rounded-md ring ring-gray-100 transition-all duration-200">
                Home
            </router-link>
            <router-link to=""
                class="hover:bg-gray-100 flex hover:px-3 ease-in-out p-2 rounded-md hover:ring hover:ring-gray-100 transition-all duration-200">
                About
            </router-link>
            <div
                class="flex focus-within:w-80 w-70 items-center transition-all duration-200 ease-in-out p-2 text-sm border border-gray-100 bg-gray-100 rounded-md">
                <input type="text" class="focus:outline-0 flex-1" name="" id="" placeholder="Search">
                <i class="bx bx-search"></i>
            </div>
            <router-link to=""
                class="hover:bg-gray-100 hover:px-3 ease-in-out p-2 rounded-md hover:ring hover:ring-gray-100 transition-all duration-200">
                Blog
            </router-link>
            <router-link to=""
                class="hover:bg-gray-100 hover:px-3 ease-in-out p-2 rounded-md hover:ring hover:ring-gray-100 transition-all duration-200">
                Community
            </router-link>
        </ul>
        <div class="flex relative">
            <img @click="toggleDrop" src="https://ui-avatars.com/api/?name=Elon+Musk"
                class="size-8 rounded-full relative cursor-pointer" alt="">
            <div :class="isDrop ? 'visible translate-y-0 translate-x-0 opacity-100 scale-100' : 'invisible -translate-y-3 translate-x-0.5 opacity-0 scale-95'"
                class="absolute bg-white w-40 border border-slate-200 rounded-xl top-10 inset-e-0 p-1 transition-all duration-65 ease-in-out">
                <div class="flex flex-col font-inter text-sm gap-1">
                    <router-link to="/profile"
                        class="py-1 px-2 flex text-gray-600 hover:text-gray-900 items-center justify-between hover:bg-gray-100 rounded-md transition duration-200 ease-in-out">Profile<i
                            class="bx bx-user"></i></router-link>
                    <router-link to="/profile/settings"
                        class="py-1 px-2 flex text-gray-600 hover:text-gray-900 items-center justify-between hover:bg-gray-100 rounded-md transition duration-200 ease-in-out">Settings<i
                            class="bx bx-cog"></i></router-link>
                    <router-link to="/profile/bookmarks"
                        class="py-1 px-2 flex text-gray-600 hover:text-gray-900 items-center justify-between hover:bg-gray-100 rounded-md transition duration-200 ease-in-out">Bookmarks<i
                            class="bx bx-bookmarks"></i></router-link>
                    <router-link to=""
                        class="py-1 px-2 flex items-center justify-between hover:bg-red-50 rounded-md transition duration-200 ease-in-out text-red-800 hover:text-red-700">Sign
                        out<i class="bx bx-log-out"></i></router-link>
                </div>
            </div>
        </div>
    </header>
</template>