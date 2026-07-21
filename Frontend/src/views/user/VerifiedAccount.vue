<script setup>
import Nav from '@/components/Nav.vue'
import ProfileSidebar from '@/components/ProfileSidebar.vue'
import Breadcrumbs from '@/components/Breadcrumbs.vue'
import Button from '@/components/Button.vue'
import { onMounted, ref } from 'vue'

const emailVerified = ref(true)
const phoneVerified = ref(false)

onMounted(() => {
    document.title = 'FindPaw - Verified Account'
})
</script>

<template>
    <Nav />
    <ProfileSidebar />

    <div class="md:ml-65 h-fit relative flex items-start font-inter">
        <div class="w-full mt-15">
            <div class="flex items-center justify-between px-6 py-5 border-b border-slate-200">
                <Breadcrumbs />
            </div>
            <div class="max-w-3xl px-6 py-8">
                <div class="mb-8">
                    <h1 class="text-2xl font-semibold text-slate-900">
                        Verified Account
                    </h1>
                    <p class="mt-1 text-sm text-slate-500">
                        Verify your email address and phone number to improve your account security.
                    </p>
                </div>
                <div class="rounded-xl border border-slate-200 bg-white">
                    <div class="border-b border-slate-200 px-6 py-5">
                        <h2 class="font-semibold text-slate-900">
                            Verification
                        </h2>
                        <p class="mt-1 text-sm text-slate-500">
                            Complete the verification below.
                        </p>
                    </div>
                    <div class="divide-y divide-slate-200">
                        <div class="flex items-center justify-between p-6">
                            <div>
                                <h3 class="font-medium text-slate-900">
                                    Email Address
                                </h3>
                                <p class="mt-1 text-sm text-slate-500">
                                    rafka@example.com
                                </p>
                            </div>
                            <div class="flex items-center gap-3">
                                <span v-if="emailVerified"
                                    class="rounded-md border border-green-200 bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
                                    Verified
                                </span>
                                <Button v-else variant="outline">
                                    Verify
                                </Button>
                            </div>
                        </div>
                        <div class="flex items-center justify-between p-6">
                            <div>
                                <h3 class="font-medium text-slate-900">
                                    Phone Number
                                </h3>
                                <p class="mt-1 text-sm text-slate-500">
                                    +62 812-3456-7890
                                </p>
                            </div>
                            <div class="flex items-center gap-3">
                                <span v-if="phoneVerified"
                                    class="rounded-md border border-green-200 bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
                                    Verified
                                </span>
                                <Button class="text-sm" v-else>
                                    Verify
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>