<script setup>
import Button from '@/components/ui/Button.vue';
import Loader from '@/components/ui/Loader.vue';
import { onMounted, ref } from 'vue';

const isShow = ref(false)
const toggleShow = () => {
    isShow.value = !isShow.value
}

const isShowConfirm = ref(false)
const toggleShowConfirm = () => {
    isShowConfirm.value = !isShowConfirm.value
}

const phone_number = ref('');

const formatPhone = (event) => {
    let value = event.target.value.replace(/\D/g, '');

    let formattedValue = '';

    if (value.length > 0) {
        formattedValue += value.substring(0, 3);
    }
    if (value.length > 3) {
        formattedValue += '-' + value.substring(3, 7);
    }
    if (value.length > 7) {
        formattedValue += '-' + value.substring(7, 12);
    }

    phone_number.value = formattedValue;
};

onMounted(() => {
    document.title = 'FindPaw - Sign up'
})
</script>

<template>
    <div class="flex bg-slate-50 justify-center items-center min-h-screen md:py-5">
        <div class="bg-white md:border border-slate-200 px-5 py-10 rounded-xl gap-5 flex flex-col max-w-md w-full">
            <div class="flex flex-col items-center gap-2">
                <div class="font-semibold text-slate-900 font-inter text-2xl">Create Account</div>
                <div class="text-md text-gray-600">Please enter your information to Sign up</div>
            </div>
            <div class="flex gap-3 mt-2 w-full items-center justify-center">
                <div
                    class="flex-1 flex items-center py-2 hover:bg-slate-50 cursor-pointer justify-center border rounded-md border-slate-200">
                    <i class="bx bxl-google text-xl"></i>
                </div>
                <div
                    class="flex-1 flex items-center py-2 hover:bg-slate-50 cursor-pointer justify-center border rounded-md border-slate-200">
                    <i class="bx bxl-facebook text-xl"></i>
                </div>
                <div
                    class="flex-1 flex items-center py-2 hover:bg-slate-50 cursor-pointer justify-center border rounded-md border-slate-200">
                    <i class="bx bxl-microsoft text-xl"></i>
                </div>
            </div>
            <div class="flex items-center gap-2 justify-center">
                <span class="text-sm text-slate-600">OR</span>
            </div>
            <div class="w-full px-1">
                <div
                    class="flex items-center justify-between p-3 rounded-md text-sm bg-green-50 border border-green-200 text-green-700">
                    <div class="flex gap-2 items-center">
                        <i class="bx bx-check-circle text-green-600"></i>
                        <span>Sign up Successfully</span>
                    </div>
                    <i class="bx bx-x cursor-pointer"></i>
                </div>
            </div>
            <div class="w-full px-1">
                <div
                    class="flex items-center justify-between p-3 rounded-md text-sm bg-red-50 border border-red-200 text-red-700">
                    <div class="flex gap-2 items-center">
                        <i class="bx bx-info-circle text-red-600"></i>
                        <span>Email has been already taken</span>
                    </div>
                    <i class="bx bx-x cursor-pointer"></i>
                </div>
            </div>
            <form class="flex flex-col items-start justify-center px-1 gap-4">
                <div class="flex flex-col w-full gap-2">
                    <label for="name" class="font-medium text-sm">Name <span>*</span></label>
                    <input required type="text" id="name" placeholder="Enter your name"
                        class="rounded-md text-sm flex-1 focus:outline-0 border border-slate-200 p-3 focus:border-slate-400 focus:ring-slate-200 focus:ring-3 transition duration-200 ease-in-out">
                </div>
                <div class="flex flex-col w-full gap-2">
                    <label for="email" class="font-medium text-sm">Email address <span>*</span></label>
                    <input required type="email" id="email" placeholder="Enter your email address"
                        class="rounded-md text-sm flex-1 focus:outline-0 border border-slate-200 p-3 focus:border-slate-400 focus:ring-slate-200 focus:ring-3 transition duration-200 ease-in-out">
                </div>
                <div class="flex flex-col w-full gap-2">
                    <label for="phone_number" class="font-medium text-sm">Phone Number <span>*</span></label>
                    <div
                        class="rounded-md text-sm gap-2 flex-1 border border-slate-200 p-3 focus-within:border-slate-400 focus-within:ring-slate-200 focus-within:ring-3 transition duration-200 ease-in-out flex items-center">
                        <span class="text-slate-600">+62</span>
                        <input @input="formatPhone" :value="phone_number" required minlength="8" type="tel"
                            id="phone_number" placeholder="Enter your phone number"
                            class="focus:outline-0 text-sm flex-1">
                    </div>
                </div>
                <div class="flex flex-col w-full gap-2">
                    <label for="password" class="font-medium text-sm">Password <span>*</span></label>
                    <div
                        class="rounded-md text-sm flex-1 border border-slate-200 p-3 focus-within:border-slate-400 focus-within:ring-slate-200 focus-within:ring-3 transition duration-200 ease-in-out flex items-center">
                        <input required minlength="8" :type="isShow ? 'text' : 'password'" id="password"
                            placeholder="••••••••••••" class="focus:outline-0 text-sm flex-1">
                        <i :class="isShow ? 'bx-show' : 'bx-hide'" @click="toggleShow"
                            class="bx text-md cursor-pointer"></i>
                    </div>
                </div>
                <div class="flex flex-col w-full gap-2">
                    <label for="confirm_password" class="font-medium text-sm">Confirm Password <span>*</span></label>
                    <div
                        class="rounded-md text-sm flex-1 border border-slate-200 p-3 focus-within:border-slate-400 focus-within:ring-slate-200 focus-within:ring-3 transition duration-200 ease-in-out flex items-center">
                        <input required minlength="8" :type="isShowConfirm ? 'text' : 'password'" id="confirm_password"
                            placeholder="••••••••••••" class="focus:outline-0 text-sm flex-1">
                        <i :class="isShowConfirm ? 'bx-show' : 'bx-hide'" @click="toggleShowConfirm"
                            class="bx text-md cursor-pointer"></i>
                    </div>
                </div>
                <div class="flex items-center justify-between w-full">
                    <div class="flex items-center gap-2 px-1">
                        <input type="checkbox" id="remember" class="accent-slate-900">
                        <label for="remember" class="text-sm text-slate-600">Remember Me</label>
                    </div>
                </div>
                <Button variant="sign">
                    <loader />
                    Sign up
                </Button>
                <div class="text-center w-full text-slate-600">Have an account? <router-link to="/signin"
                        class="text-black">Sign in</router-link></div>
            </form>
        </div>
    </div>
</template>