<script setup>
import Nav from '@/components/Nav.vue';
import Footer from '@/components/Footer.vue';
import ProfilSidebar from '@/components/ProfilSidebar.vue';
import { onMounted, ref } from 'vue';

const isDisable = ref(true)
const toggleEditor = () => {
    isDisable.value = !isDisable.value
}

const name = ref('Rafka Dyta Pratama')
const email = ref('rafka@mymart.id')
const phone_number = ref('085775590136')

onMounted(() => {
    document.title = 'FindPaw - Profile'
})
</script>

<template>
    <Nav />
    <div class="grid grid-cols-5 px-10 py-20 gap-10">
        <ProfilSidebar />
        <div class="block col-span-4">
            <div class="flex flex-col">
                <div class="flex justify-between">
                    <nav aria-label="Breadcrumb">
                        <ol class="flex items-center gap-1 text-sm text-gray-700">
                            <li>
                                <a href="#" class="block transition-colors hover:text-gray-900"> Home </a>
                            </li>

                            <li class="rtl:rotate-180">
                                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" class="size-4"
                                    viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd"
                                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                        clip-rule="evenodd" />
                                </svg>
                            </li>

                            <li>
                                <a href="#" class="block transition-colors hover:text-gray-900"> Profile </a>
                            </li>
                        </ol>
                    </nav>
                    <div class="flex items-center gap-2">
                        <div class="text-sm font-medium">Editor mode: <span v-if="isDisable">Off</span><span
                                v-else>On</span></div>
                        <div @click="toggleEditor" :class="!isDisable ? 'bg-gray-200' : ''"
                            class="p-2 flex items-center rounded-xl hover:bg-gray-200 bg-gray-100">
                            <i class='bx bx-edit-alt'></i>
                        </div>
                    </div>
                </div>
                <div class="font-medium mt-5">Public Profile</div>
                <form action="" class="mt-5">
                    <div class="grid grid-cols-3 gap-5">
                        <div class="col-span-2 flex gap-5 flex-col">
                            <div class="flex flex-col gap-2">
                                <label for="name" class="text-sm font-medium">Name <span
                                        class="text-teal-600">*</span></label>
                                <input v-model="name" type="text" :disabled="isDisable"
                                    :class="!isDisable ? 'ring-gray-300' : ''"
                                    class="focus:outline-0 ring p-2 text-sm focus:ring-teal-500 rounded-md ring-gray-200 shadow bg-gray-50 focus:bg-white"
                                    name="" id="name">
                            </div>
                            <div class="flex items-center gap-5">
                                <div class="flex flex-col gap-2 flex-1">
                                    <label for="name" class="text-sm font-medium">Email <span
                                            class="text-teal-600">*</span></label>
                                    <input v-model="email" type="text" disabled
                                        class="focus:outline-0 rounded-md text-gray-700 p-2 text-sm shadow bg-gray-200 focus:bg-white"
                                        name="" id="name">
                                </div>
                                <div class="flex flex-col gap-2 flex-1">
                                    <label for="name" class="text-sm font-medium">Phone Number <span
                                            class="text-teal-600">*</span></label>
                                    <input v-model="phone_number" type="text" :disabled="isDisable"
                                        :class="!isDisable ? 'ring-gray-300' : ''"
                                        class="focus:outline-0 ring p-2 text-sm focus:ring-teal-500 rounded-md ring-gray-200 shadow bg-gray-50 focus:bg-white"
                                        name="" id="name">
                                </div>
                            </div>
                        </div>
                        <div class="col-span-1 flex flex-col items-center gap-2">
                            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=1160"
                                alt="" class="size-40 rounded-full object-cover" />
                            <button class="flex items-center gap-2 px-2 py-1 hover:bg-gray-200g bg-gray-100 rounded-md ring ring-gray-200"><i class="bx bx-edit-alt"></i>Edit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>