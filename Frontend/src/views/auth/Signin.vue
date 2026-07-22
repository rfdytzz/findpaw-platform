<script setup>
import Button from '@/components/Button.vue';
import Loader from '@/components/Loader.vue';
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();

const isShow = ref(false)
const toggleShow = () => {
    isShow.value = !isShow.value
}

const email = ref('')
const password = ref('')
const message = ref('')
const loading = ref(false)
const getSignin = async () => {
    try {
        loading.value = true
        const res = await axios.post('http://localhost:8000/api/signin',
            {
                email: email.value,
                password: password.value
            }
        )
        localStorage.setItem('token', res.data.token)
        console.log(res.data)
        router.push('/')
    } catch(error) {
        console.log(error?.response?.data)
        message.value = error?.response?.data?.message
    } finally {
        loading.value = false
    }
}

const closeMessage = () => {
    message.value = ''
}

onMounted(() => {
    document.title = 'FindPaw - Sign in'
})
</script>

<template>
    <div class="flex bg-slate-50 justify-center items-center min-h-screen md:py-5">
        <div class="bg-white md:border border-slate-200 px-5 py-10 rounded-xl gap-5 flex flex-col max-w-md w-full">
            <div class="flex flex-col items-center gap-2">
                <div class="font-semibold text-slate-900 font-inter text-2xl">Welcome Back</div>
                <div class="text-md text-gray-600">Please enter your details to Sign in</div>
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
            <div class="w-full px-1 hidden">
                <div
                    class="flex items-center justify-between p-3 rounded-md text-sm bg-green-50 border border-green-200 text-green-700">
                    <div class="flex gap-2 items-center">
                        <i class="bx bx-check-circle text-green-600"></i>
                        <span>Sign in Successfully</span>
                    </div>
                    <i class="bx bx-x cursor-pointer"></i>
                </div>
            </div>
            <div v-if="message" class="w-full px-1">
                <div
                    class="flex items-center justify-between p-3 rounded-md text-sm bg-red-50 border border-red-200 text-red-700">
                    <div class="flex gap-2 items-center">
                        <i class="bx bx-info-circle text-red-600"></i>
                        <span>{{ message }}</span>
                    </div>
                    <i @click="closeMessage" class="bx bx-x cursor-pointer"></i>
                </div>
            </div>
            <form @submit.prevent="getSignin" class="flex flex-col items-start justify-center px-1 gap-4">
                <div class="flex flex-col w-full gap-2">
                    <label for="email" class="font-medium text-sm">Email address <span>*</span></label>
                    <input v-model="email" required type="email" id="email" placeholder="Enter your email address"
                        class="rounded-md text-sm flex-1 focus:outline-0 border border-slate-200 p-3 focus:border-slate-400 focus:ring-slate-200 focus:ring-3 transition duration-200 ease-in-out">
                </div>
                <div class="flex flex-col w-full gap-2">
                    <label for="password" class="font-medium text-sm">Password <span>*</span></label>
                    <div
                        class="rounded-md text-sm flex-1 border border-slate-200 p-3 focus-within:border-slate-400 focus-within:ring-slate-200 focus-within:ring-3 transition duration-200 ease-in-out flex items-center">
                        <input v-model="password" required minlength="8" :type="isShow ? 'text' : 'password'" id="password"
                            placeholder="••••••••••••" class="focus:outline-0 text-sm flex-1">
                        <i :class="isShow ? 'bx-show' : 'bx-hide'" @click="toggleShow"
                            class="bx text-md cursor-pointer"></i>
                    </div>
                </div>
                <div class="flex items-center justify-between w-full">
                    <div class="flex items-center gap-2 px-1">
                        <input type="checkbox" id="remember" class="accent-slate-900">
                        <label for="remember" class="text-sm text-slate-600">Remember Me</label>
                    </div>
                    <router-link to="" class="text-sm">Forgot Password?</router-link>
                </div>
                <Button variant="sign">
                    <loader v-if="loading" />
                    Sign in
                </Button>
                <div class="text-center w-full text-slate-600">New on our platform? <router-link to="/signup"
                        class="text-black">Create an account</router-link></div>
            </form>
        </div>
    </div>
</template>