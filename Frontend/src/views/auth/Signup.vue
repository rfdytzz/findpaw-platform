<script setup>
import { onMounted, ref } from 'vue';

const isShow = ref(false)
const toggleShow = () => {
    isShow.value = !isShow.value
}

const isShowConfirm = ref(false)
const toggleShowConfirm = () => {
    isShowConfirm.value = !isShowConfirm.value
}

onMounted(() => {
    document.title = 'FindPaw - Register'
})
</script>

<template>
    <div class="w-full h-fit p-10 flex justify-center items-center">
        <div class="rounded-xl border-2 gap-5 items-center border-gray-100 bg-white p-5 flex flex-col">
            <h1 class="text-3xl font-semibold">Register</h1>
            <div class="w-full text-sm flex items-center bg-red-500/20 text-red-500 p-2 gap-2 rounded">
                <i class='bx bx-info-circle' ></i>
                The email has been taken.
            </div>
            <div class="w-full text-sm flex items-center bg-teal-500/20 text-teal-500 p-2 gap-2 rounded">
                <i class='bx bx-check-circle' ></i>
                Register Success, please Login
            </div>
            <form action="" class="flex flex-col gap-4">
                <div class="flex flex-col gap-2">
                    <label for="name" class="font-medium text-sm">Full Name <span class="text-teal-600">*</span></label>
                    <div
                        class="flex flex-row focus-within:bg-white w-90 ring rounded bg-gray-50 ring-gray-200 focus-within:ring-teal-500">
                        <input type="text" placeholder="Name" class="w-full rounded p-2 focus:outline-0" name=""
                            id="name">
                    </div>
                </div>
                <div class="flex flex-col gap-2">
                    <label for="email" class="font-medium text-sm">Email <span class="text-teal-600">*</span></label>
                    <div
                        class="flex flex-row focus-within:bg-white w-90 ring rounded bg-gray-50 ring-gray-200 focus-within:ring-teal-500">
                        <input type="email" placeholder="email@example.com" class="w-full p-2 rounded focus:outline-0" name=""
                            id="email">
                    </div>
                </div>
                <div class="flex flex-col gap-2">
                    <label for="phone_number" class="font-medium text-sm">Phone Number <span class="text-teal-600">*</span></label>
                    <div
                        class="flex flex-row focus-within:bg-white w-90 ring rounded bg-gray-50 ring-gray-200 focus-within:ring-teal-500">
                        <input type="tel" placeholder="Phone Number" class="w-full p-2 rounded focus:outline-0" name=""
                            id="phone_number">
                    </div>
                </div>
                <div class="flex flex-col gap-2">
                    <label for="password" class="font-medium text-sm">Password <span
                            class="text-teal-600">*</span></label>
                    <div
                        class="flex items-center flex-row focus-within:bg-white w-90 ring rounded bg-gray-50 ring-gray-200 focus-within:ring-teal-500">
                        <input :type="isShow ? 'text' : 'password'" type="password" placeholder="••••••••"
                            class="w-full py-2 pl-2 focus:outline-0 rounded" name="" id="password">
                        <i @click="toggleShow" :class="isShow ? 'bx-show' : 'bx-hide'" class="bx bx-hide p-2"></i>
                    </div>
                </div>
                <div class="flex flex-col gap-2">
                    <label for="confirm_password" class="font-medium text-sm">Confirm Password <span
                            class="text-teal-600">*</span></label>
                    <div
                        class="flex items-center flex-row focus-within:bg-white w-90 ring rounded bg-gray-50 ring-gray-200 focus-within:ring-teal-500">
                        <input :type="isShowConfirm ? 'text' : 'password'" type="password" placeholder="••••••••"
                            class="w-full py-2 pl-2 focus:outline-0 rounded" name="" id="confirm_password">
                        <i @click="toggleShowConfirm" :class="isShowConfirm ? 'bx-show' : 'bx-hide'" class="bx bx-hide p-2"></i>
                    </div>
                </div>
                <div class="flex items-center text-sm gap-2 text-gray-500 justify-start">
                    <input type="checkbox" name="" id="">
                    Remember me
                </div>
                <button class="cursor-pointer font-medium flex justify-center items-center gap-2 bg-teal-500 rounded p-2 text-white hover:bg-teal-700">
                    <div role="status" aria-label="Loading">
                        <svg class="mx-auto size-5 animate-spin text-teal-200" xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 24 24" aria-hidden="true">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4">
                            </circle>

                            <path class="opacity-75" fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                            </path>
                        </svg>
                    </div>
                    Register
                </button>
                <div class="text-sm text-center -mt-2">have an account? <router-link to="/login"
                        class="text-teal-600 hover:underline">Login</router-link></div>
            </form>
        </div>
    </div>
</template>