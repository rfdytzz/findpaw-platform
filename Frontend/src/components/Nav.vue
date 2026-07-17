<script setup>
import { ref } from 'vue'

const token = ref(null)

const isDrop = ref(false)

const toggleDrop = () => {
    isDrop.value = !isDrop.value
}
</script>

<template>
<header class="fixed top-0 left-0 z-50 w-full bg-white border-b border-gray-100">

    <div class="max-w-7xl mx-auto px-5">
        <div class="h-16 flex items-center justify-between">

            <router-link to="/" class="text-xl font-bold text-teal-600">
                FindPaw
            </router-link>


            <nav class="hidden md:flex items-center gap-6">

                <div
                    class="group flex items-center gap-2 w-52 focus-within:w-72 transition-all duration-300 border border-gray-200 rounded-xl px-3 py-2">

                    <input 
                        class="flex-1 text-sm outline-none"
                        placeholder="Search pet..."
                    >

                    <i class="bx bx-search text-gray-500"></i>

                </div>


                <router-link
                    class="text-sm text-gray-600 hover:text-teal-600"
                    to="#">
                    About
                </router-link>

                <router-link
                    class="text-sm text-gray-600 hover:text-teal-600"
                    to="#">
                    History
                </router-link>

                <router-link
                    class="text-sm text-gray-600 hover:text-teal-600"
                    to="#">
                    Blog
                </router-link>


                <div v-if="token" class="relative">

                    <button 
                        @click="toggleDrop"
                        class="rounded-full overflow-hidden border border-gray-200">

                        <img
                            class="w-10 h-10 object-cover"
                            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
                        >

                    </button>


                    <div
                        v-if="isDrop"
                        class="absolute right-0 top-12 w-44 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden z-50">

                        <router-link
                            class="block px-4 py-3 text-sm hover:bg-gray-50"
                            to="#">
                            Profile
                        </router-link>

                        <router-link
                            class="block px-4 py-3 text-sm hover:bg-gray-50"
                            to="#">
                            Bookmarks
                        </router-link>

                        <button
                            class="w-full text-left px-4 py-3 text-sm text-red-600 hover:bg-red-50">
                            Logout
                        </button>

                    </div>

                </div>


                <div v-else class="flex gap-2">

                    <router-link
                        to="/login"
                        class="px-4 py-2 rounded-xl bg-teal-600 text-white text-sm font-medium hover:bg-teal-700">
                        Login
                    </router-link>


                    <router-link
                        to="/register"
                        class="px-4 py-2 rounded-xl border border-teal-600 text-teal-600 text-sm font-medium hover:bg-teal-50">
                        Register
                    </router-link>

                </div>

            </nav>


            <button class="md:hidden p-2 rounded-lg bg-gray-100">
                <i class="bx bx-menu text-xl"></i>
            </button>

        </div>
    </div>

</header>
</template>