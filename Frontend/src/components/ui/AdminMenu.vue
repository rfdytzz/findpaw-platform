<script setup>
import { ref } from 'vue';

const isUser = ref(false)
const toggleUser = () => {
    isUser.value = !isUser.value
}

const isPet = ref(false)
const togglePet = () => {
    isPet.value = !isPet.value
}
</script>

<template>
    <div class="flex flex-col items-start w-full gap-1">
        <router-link to="/admin"
            class="text-sm flex w-full items-center gap-2 px-3 py-2.5 bg-gray-100 rounded-md transition duration-100"><i
                class="bx bx-category"></i>Dashboard</router-link>
        <div class="flex flex-col gap-1 w-full">
            <button @click="toggleUser" :class="isUser ? 'bg-gray-100' : ''"
                class="text-sm group flex w-full items-center justify-between px-3 py-2.5 hover:bg-gray-100 rounded-md cursor-pointer transition duration-100">
                <div class="flex items-center gap-2"><i class="bx bx-user"></i>User</div> <i
                    class="bx bx-chevron-down text-md transition duration-100"></i>
            </button>
            <div v-if="isUser" class="flex flex-col gap-1 pl-5">
                <router-link to="#"
                    class="text-sm flex w-full items-center gap-2 px-3 py-2.5 hover:bg-gray-100 rounded-md transition duration-100">
                    All User
                </router-link>
                <router-link to="#"
                    class="text-sm flex w-full items-center gap-2 px-3 py-2.5 hover:bg-gray-100 rounded-md transition duration-100">
                    Account Verification
                </router-link>
                <router-link to="#"
                    class="text-sm flex w-full items-center gap-2 px-3 py-2.5 hover:bg-gray-100 rounded-md transition duration-100">
                    Staff Management
                </router-link>
            </div>
        </div>
        <div class="flex flex-col gap-1 w-full">
            <button @click="togglePet" :class="isPet ? 'bg-gray-100' : ''"
                class="text-sm group flex w-full items-center justify-between px-3 py-2.5 hover:bg-gray-100 rounded-md cursor-pointer transition duration-100">
                <div class="flex items-center gap-2"><i class="bx bxs-cat"></i>Pets</div> <i
                    class="bx bx-chevron-down text-md transition duration-100"></i>
            </button>
            <div v-if="isPet" class="flex flex-col gap-1 pl-5">
                <router-link to="#"
                    class="text-sm flex w-full items-center gap-2 px-3 py-2.5 hover:bg-gray-100 rounded-md transition duration-100">
                    All User
                </router-link>
                <router-link to="#"
                    class="text-sm flex w-full items-center gap-2 px-3 py-2.5 hover:bg-gray-100 rounded-md transition duration-100">
                    Account Verification
                </router-link>
                <router-link to="#"
                    class="text-sm flex w-full items-center gap-2 px-3 py-2.5 hover:bg-gray-100 rounded-md transition duration-100">
                    Staff Management
                </router-link>
            </div>
        </div>
    </div>
</template>