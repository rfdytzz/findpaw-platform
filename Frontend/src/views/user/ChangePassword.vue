<script setup>
import AppNavbar from '@/components/layout/AppNavbar.vue'
import ProfileSidebar from '@/components/layout/ProfileSidebar.vue'
import Breadcrumbs from '@/components/ui/Breadcrumbs.vue'
import Button from '@/components/ui/Button.vue'
import { onMounted, ref } from 'vue'

const isShowCurent = ref(false)
const toggleShowCurent = () => {
    isShowCurent.value = !isShowCurent.value
}

const isShowNew = ref(false)
const toggleShowNew = () => {
    isShowNew.value = !isShowNew.value
}

const isShowConfirm = ref(true)
const toggleShowConfirn = () => {
    isShowConfirm.value = !isShowConfirm.value
}

onMounted(() => {
    document.title = 'FindPaw - Change Password'
})
</script>

<template>
    <AppNavbar />
    <ProfileSidebar/>

    <div class="md:ml-65 h-fit relative flex items-start font-inter">
        <div class="w-full mt-15">
            <div class="flex items-center justify-between px-6 py-5 border-b border-slate-200">
                <Breadcrumbs />
            </div>
            <div class="max-w-2xl px-6 py-8">
                <div class="mb-8">
                    <h1 class="text-2xl font-semibold text-slate-900">
                        Change Password
                    </h1>
                    <p class="mt-1 text-sm text-slate-500">
                        Update your password to keep your account secure.
                    </p>
                </div>
                <div class="rounded-xl border border-slate-200 bg-white">
                    <div class="border-b border-slate-200 px-6 py-5">
                        <h2 class="font-semibold text-slate-900">
                            Password
                        </h2>
                        <p class="mt-1 text-sm text-slate-500">
                            Make sure your new password is strong and difficult to guess.
                        </p>
                    </div>
                    <div class="space-y-6 p-6">
                        <div class="flex flex-col gap-2">
                            <label class="text-sm font-medium">
                                Current Password
                            </label>
                            <div
                                class="rounded-md text-sm flex-1 border border-slate-200 p-3 focus-within:border-slate-400 focus-within:ring-slate-200 focus-within:ring-3 transition duration-200 ease-in-out flex items-center">
                                <input required minlength="8" :type="isShowCurent ? 'text' : 'password'" id="password"
                                    placeholder="••••••••••••" class="focus:outline-0 text-sm flex-1">
                                <i :class="isShowCurent ? 'bx-show' : 'bx-hide'" @click="toggleShowCurent"
                                    class="bx text-md cursor-pointer"></i>
                            </div>
                        </div>
                        <div class="flex flex-col gap-2">
                            <label class="text-sm font-medium">
                                New Password
                            </label>
                            <div
                                class="rounded-md text-sm flex-1 border border-slate-200 p-3 focus-within:border-slate-400 focus-within:ring-slate-200 focus-within:ring-3 transition duration-200 ease-in-out flex items-center">
                                <input required minlength="8" :type="isShowNew ? 'text' : 'password'" id="password"
                                    placeholder="••••••••••••" class="focus:outline-0 text-sm flex-1">
                                <i :class="isShowNew ? 'bx-show' : 'bx-hide'" @click="toggleShowNew"
                                    class="bx text-md cursor-pointer"></i>
                            </div>
                        </div>
                        <div class="flex flex-col gap-2">
                            <label class="text-sm font-medium">
                                Confirm New Password
                            </label>
                            <div
                                class="rounded-md text-sm flex-1 border border-slate-200 p-3 focus-within:border-slate-400 focus-within:ring-slate-200 focus-within:ring-3 transition duration-200 ease-in-out flex items-center">
                                <input required minlength="8" :type="isShowConfirm ? 'text' : 'password'" id="password"
                                    placeholder="••••••••••••" class="focus:outline-0 text-sm flex-1">
                                <i :class="isShowConfirm ? 'bx-show' : 'bx-hide'" @click="toggleShowConfirn"
                                    class="bx text-md cursor-pointer"></i>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-end gap-3 border-t border-slate-200 px-6 py-5">
                        <Button class="text-sm">
                            Update Password
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>