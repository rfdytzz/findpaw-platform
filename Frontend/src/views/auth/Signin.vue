<script setup>
import { onMounted, ref } from 'vue';

const isShow = ref(false)
const toggleShow = () => {
    isShow.value = !isShow.value
}

onMounted(() => {
    document.title = 'FindPaw - Login'
})
</script>

<template>
    <div class="flex bg-slate-50 justify-center items-center h-screen">
        <div
            class="bg-white border border-slate-200 px-5 py-10 rounded-xl gap-5 flex flex-col md:w-[35%] w-full">
            <div class="flex flex-col items-center gap-2">
                <div class="font-semibold text-slate-900 font-inter text-2xl">Welcome Back</div>
                <div class="text-md text-gray-600">Please enter your details to Sign in</div>
            </div>
            <div class="flex gap-3 mt-2 w-full items-center justfiy-center">
                <div class="flex-1 flex items-center py-2 hover:bg-slate-50 cursor-pointer justify-center border rounded-md border-slate-200">
                    <i class="bx bxl-google text-xl"></i>
                </div>
                <div class="flex-1 flex items-center py-2 hover:bg-slate-50 cursor-pointer justify-center border rounded-md border-slate-200">
                    <i class="bx bxl-facebook text-xl"></i>
                </div>
                <div class="flex-1 flex items-center py-2 hover:bg-slate-50 cursor-pointer justify-center border rounded-md border-slate-200">
                    <i class="bx bxl-microsoft text-xl"></i>
                </div>
            </div>
            <div class="flex items-center gap-2 justify-center">
                <span class="text-sm text-slate-600">OR</span>
            </div>
            <form class="flex flex-col items-start justify-center px-1 gap-4">
                <div class="flex flex-col w-full gap-2">
                    <label for="email" class="font-medium text-sm">Email address <span>*</span></label>
                    <input type="text" id="email" placeholder="Enter your email address" class="rounded-md text-sm flex-1 focus:outline-0 border border-slate-200 px-3 py-2 focus:border-slate-400 focus:ring-slate-200 focus:ring-3 transition duration-200 ease-in-out">
                </div>
                <div class="flex flex-col w-full gap-2">
                    <label for="password" class="font-medium text-sm">Password <span>*</span></label>
                    <div class="rounded-md text-sm flex-1 border border-slate-200 px-3 py-2 focus-within:border-slate-400 focus-within:ring-slate-200 focus-within:ring-3 transition duration-200 ease-in-out flex items-center">
                        <input :type="isShow ? 'text' : 'password'" id="password" placeholder="••••••••••••" class="focus:outline-0 text-sm flex-1">
                        <i :class="isShow ? 'bx-show' : 'bx-hide'" @click="toggleShow" class="bx text-md cursor-pointer"></i>
                    </div>
                </div>
                <div class="flex items-center justify-between w-full">
                    <div class="flex items-center gap-2 px-1">
                        <input type="checkbox" id="remember" class="accent-slate-900">
                        <label for="remember" class="text-sm text-slate-600">Remember Me</label>
                    </div>
                    <router-link to="" class="text-sm">Forgot Password?</router-link>
                </div>
                <button class="w-full bg-black text-white font-medium py-2 rounded-md cursor-pointer text-sm hover:bg-slate-800 transition duration-200">Sign in to FindPaw</button>
                <div class="text-center w-full text-slate-600">New on our platform? <router-link to="" class="text-black">Create an account</router-link></div>
            </form>
        </div>
    </div>
</template>