<script setup>
import { useRoute } from 'vue-router';

const route = useRoute()
</script>

<template>
    <nav aria-label="Breadcrumb">
        <ol class="flex items-center gap-1 text-sm text-gray-700">
            <li>
                <router-link to="/profile" class="block transition-colors hover:text-gray-900"> Profile </router-link>
            </li>

            <li v-if="route.path === '/profile/change-password'" class="rtl:rotate-180">
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" class="size-4" viewBox="0 0 20 20"
                    fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd" />
                </svg>
            </li>

            <li v-if="route.path === '/profile/change-password'">
                <router-link to="#" class="block transition-colors hover:text-gray-900"> Change Password </router-link>
            </li>

            <li v-if="route.path === '/profile/verified-account'" class="rtl:rotate-180">
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" class="size-4" viewBox="0 0 20 20"
                    fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd" />
                </svg>
            </li>

            <li v-if="route.path === '/profile/verified-account'">
                <router-link to="#" class="block transition-colors hover:text-gray-900"> Verified Account </router-link>
            </li>

            <li v-if="route.path === '/profile/bookmarks'" class="rtl:rotate-180">
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" class="size-4" viewBox="0 0 20 20"
                    fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd" />
                </svg>
            </li>

            <li v-if="route.path === '/profile/bookmarks'">
                <router-link to="#" class="block transition-colors hover:text-gray-900"> Bookmarks </router-link>
            </li>

            <li v-if="route.path === '/profile/account'" class="rtl:rotate-180">
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" class="size-4" viewBox="0 0 20 20"
                    fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd" />
                </svg>
            </li>

            <li v-if="route.path === '/profile/account'">
                <router-link to="#" class="block transition-colors hover:text-gray-900"> Account </router-link>
            </li>

            <li v-if="route.path === '/profile/connected-account'" class="rtl:rotate-180">
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" class="size-4" viewBox="0 0 20 20"
                    fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd" />
                </svg>
            </li>

            <li v-if="route.path === '/profile/connected-account'">
                <router-link to="#" class="block transition-colors hover:text-gray-900"> Connected Account </router-link>
            </li>
        </ol>
    </nav>
</template>