<script setup>
import { useRoute } from 'vue-router';

const route = useRoute()
</script>

<template>
    <div class="h-screen hidden md:block w-65 z-10 border pt-20 p-4 border-gray-200 fixed top-0 bg-gray-50 col-span-1 font-inter">
        <ul class="space-y-1">
            <li>
                <router-link to="/profile" :class="route.path === '/profile' ? 'bg-gray-100 text-black' : ''"
                    class="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-700">
                    <i class="bx bx-user"></i>
                    Profile
                </router-link>
            </li>

            <li>
                <router-link to="/profile/change-password"
                    :class="route.path === '/profile/change-password' ? 'bg-gray-100 text-black' : ''"
                    class="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                    <i class="bx bx-key"></i>
                    Change Password
                </router-link>
            </li>

            <li>
                <router-link to="/profile/verified-account"
                    :class="route.path === '/profile/verified-account' ? 'bg-gray-100 text-black' : ''"
                    class="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                    <i class='bx bx-badge-check'></i>
                    Verified Account
                </router-link>
            </li>

            <li>
                <router-link to="/profile/connected-account"
                    :class="route.path === '/profile/connected-account' ? 'bg-gray-100 text-black' : ''"
                    class="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                    <i class='bx bx-shape-square'></i>
                    Conected Account
                </router-link>
            </li>

            <li>
                <router-link to="/profile/bookmarks" :class="route.path === '/profile/bookmarks' ? 'bg-gray-100 text-black' : ''"
                    class="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                    <i class='bx bx-bookmarks'></i>
                    Bookmarks
                </router-link>
            </li>

            <li>
                <router-link to="/profile/account"
                    :class="route.path === '/profile/account' ? 'bg-gray-100 text-black' : ''"
                    class="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                    <i class='bx bx-cog'></i>
                    Settings
                </router-link>
            </li>
        </ul>
    </div>
</template>