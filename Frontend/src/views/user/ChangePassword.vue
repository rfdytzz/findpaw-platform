<script setup>
import Nav from '@/components/Nav.vue';
import ProfileSidebar from '@/components/ProfileSidebar.vue';
import Breadcrumbs from '@/components/Breadcrumbs.vue';
import { onMounted, ref } from 'vue';

onMounted(() => {
    document.title = 'FindPaw - Profile'
})
</script>

<template>
    <Nav />
    <div class="grid grid-cols-5 px-10 py-20 gap-10">
        <ProfileSidebar />
        <div class="block col-span-4">
            <div class="flex flex-col">
                <div class="flex justify-between">
                    <Breadcrumbs />
                </div>
                <div class="font-medium mt-5">Change Password</div>
                <form action="" class="mt-5">
                    <div class="grid grid-cols-3 gap-5">
                        <div class="col-span-2 text-sm flex gap-5 flex-col">
                            <label for="name" class="flex flex-col gap-2">
                                <span class="text-sm font-medium text-gray-700"> Old Password <span
                                        class="text-teal-600">*</span> </span>

                                <input v-model="name" type="password" id="name" :disabled="isDisable" placeholder="••••••••"
                                    class="mt-0.5 w-full rounded focus:ring-teal-600 ring focus:outline-0 ring-gray-100 p-2 shadow-sm sm:text-sm" />
                            </label>
                            <label for="name" class="flex flex-col gap-2">
                                <span class="text-sm font-medium text-gray-700"> New Password <span
                                        class="text-teal-600">*</span> </span>

                                <input v-model="name" type="password" id="name" :disabled="isDisable" placeholder="••••••••"
                                    class="mt-0.5 w-full rounded focus:ring-teal-600 ring focus:outline-0 ring-gray-100 p-2 shadow-sm sm:text-sm" />
                            </label>
                            <label for="name" class="flex flex-col gap-2">
                                <span class="text-sm font-medium text-gray-700"> Confirm Password <span
                                        class="text-teal-600">*</span> </span>

                                <input v-model="name" type="password" id="name" :disabled="isDisable" placeholder="••••••••"
                                    class="mt-0.5 w-full rounded focus:ring-teal-600 ring focus:outline-0 ring-gray-100 p-2 shadow-sm sm:text-sm" />
                            </label>
                            <div class="flex items-center gap-2 text-[12px] font-normal">
                                <input type="checkbox" name="" id="showPassword">
                                <label for="showPassword">Show Password</label>
                            </div>
                            <div class="flex items-center justify-start">
                                <button
                                    class="inline-block rounded border border-teal-600 bg-teal-600 px-2 py-1 font-medium text-white shadow-sm transition-colors hover:bg-teal-700"
                                    href="#">
                                    <i class='bx bx-check'></i>
                                    Save Changes
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>