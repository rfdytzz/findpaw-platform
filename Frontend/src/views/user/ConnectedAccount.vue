<script setup>
import AppNavbar from '@/components/layout/AppNavbar.vue'
import ProfileSidebar from '@/components/layout/ProfileSidebar.vue'
import Breadcrumbs from '@/components/ui/Breadcrumbs.vue'
import Button from '@/components/ui/Button.vue'
import { onMounted, ref } from 'vue'

const googleConnected = ref(true)
const facebookConnected = ref(false)

onMounted(() => {
    document.title = 'FindPet - Connected Accounts'
})
</script>

<template>
    <AppNavbar />
    <ProfileSidebar />

    <div class="md:ml-65 relative flex items-start font-inter">
        <div class="w-full mt-15">
            <div class="flex items-center justify-between px-6 py-5 border-b border-slate-200">
                <Breadcrumbs />
            </div>
            <div class="max-w-3xl px-6 py-8">
                <div class="mb-8">
                    <h1 class="text-2xl font-semibold text-slate-900">
                        Connected Accounts
                    </h1>
                    <p class="mt-1 text-sm text-slate-500">
                        Connect your social accounts to sign in faster and improve account recovery.
                    </p>
                </div>
                <div class="overflow-hidden rounded-xl border border-slate-200 bg-white">
                    <div class="border-b border-slate-200 px-6 py-5">
                        <h2 class="font-semibold text-slate-900">
                            Social Accounts
                        </h2>
                        <p class="mt-1 text-sm text-slate-500">
                            Manage the accounts connected to your FindPaw account.
                        </p>
                    </div>
                    <div class="divide-y divide-slate-200">
                        <div class="flex items-center justify-between p-6">
                            <div class="flex items-center gap-4">
                                <div
                                    class="flex h-12 w-12 items-center justify-center rounded-lg border border-slate-200">
                                    <i class="bx bxl-google text-xl"></i>
                                </div>
                                <div>
                                    <h3 class="font-medium text-slate-900">
                                        Google
                                    </h3>
                                    <p class="mt-1 text-sm text-slate-500">
                                        Sign in using your Google account.
                                    </p>
                                </div>
                            </div>
                            <div class="flex items-center gap-3">
                                <span v-if="googleConnected"
                                    class="rounded-md border hidden md:block border-green-200 bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
                                    Connected
                                </span>
                                <Button class="text-sm" v-if="googleConnected" variant="outline">
                                    Disconnect
                                </Button>
                                <Button class="text-sm" v-else>
                                    Connect
                                </Button>
                            </div>
                        </div>
                        <div class="flex items-center justify-between p-6">
                            <div class="flex items-center gap-4">
                                <div
                                    class="flex h-12 w-12 items-center justify-center rounded-lg border border-slate-200">
                                    <i class="bx bxl-facebook text-xl"></i>
                                </div>
                                <div>
                                    <h3 class="font-medium text-slate-900">
                                        Facebook
                                    </h3>
                                    <p class="mt-1 text-sm text-slate-500">
                                        Connect your Facebook account.
                                    </p>
                                </div>
                            </div>
                            <div class="flex items-center gap-3">
                                <span v-if="facebookConnected"
                                    class="rounded-md border border-green-200 bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
                                    Connected
                                </span>
                                <Button class="text-sm" v-if="facebookConnected" variant="outline">
                                    Disconnect
                                </Button>
                                <Button class="text-sm" v-else>
                                    Connect
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>