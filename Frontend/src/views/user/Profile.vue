<script setup>
import Nav from '@/components/Nav.vue';
import Footer from '@/components/Footer.vue';
import ProfilSidebar from '@/components/ProfilSidebar.vue';
import { onMounted, ref } from 'vue';

const isDisable = ref(true)
const toggleEditor = () => {
    isDisable.value = !isDisable.value
}

const editAvatar = ref(false)
const toggleEditAvatar = () => {
    editAvatar.value = !editAvatar.value
}

const name = ref('Rafka Dyta Pratama')
const email = ref('rafka@mymart.id')
const phone_number = ref('085775590136')
const address = ref('Jl. Sakhuji RT 1/1, Desa Candinegara, Kec Pekuncen, Kab. Banyumas, Prov. Jateng')

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
                                <label for="name">
                                    <span class="text-sm font-medium text-gray-700"> Name <span
                                            class="text-teal-600">*</span> </span>

                                    <input v-model="name" type="text" id="name" :disabled="isDisable"
                                        class="mt-0.5 w-full rounded focus:ring-teal-600 ring focus:outline-0 ring-gray-100 p-2 shadow-sm sm:text-sm" />
                                </label>
                            </div>
                            <div class="flex items-center gap-5">
                                <label for="email" class="flex-1">
                                    <span class="text-sm font-medium text-gray-700"> Email <span
                                            class="text-teal-600">*</span> </span>

                                    <input v-model="email" type="email" id="email" disabled
                                        class="mt-0.5 w-full rounded focus:ring-teal-600 ring focus:outline-0 ring-gray-100 p-2 shadow-sm sm:text-sm" />
                                </label>
                                <label for="phone_number" class="flex-1">
                                    <span class="text-sm font-medium text-gray-700"> Phone Number <span
                                            class="text-teal-600">*</span> </span>

                                    <input v-model="phone_number" type="tel" id="phone_number" :disabled="isDisable"
                                        class="mt-0.5 w-full rounded focus:ring-teal-600 ring focus:outline-0 ring-gray-100 p-2 shadow-sm sm:text-sm" />
                                </label>
                            </div>
                            <div class="flex items-center gap-5">
                                <label for="gender" class="">
                                    <span class="text-sm font-medium text-gray-700"> Gender <span
                                            class="text-teal-600">*</span> </span>

                                    <select name="" :disabled="isDisable"
                                        class="mt-0.5 w-full rounded focus:ring-teal-600 ring focus:outline-0 ring-gray-100 p-2 shadow-sm sm:text-sm"
                                        id="gender">
                                        <option disabled>Select</option>
                                        <option value=""><i class='bx bx-male-sign'></i>Male</option>
                                        <option value="">Female</option>
                                    </select>
                                </label>
                                <label for="phone_number" class="flex-1">
                                    <span class="text-sm font-medium text-gray-700"> Address <span
                                            class="text-teal-600">*</span> </span>

                                    <input v-model="address" type="text" id="address" :disabled="isDisable"
                                        class="mt-0.5 w-full rounded focus:ring-teal-600 ring focus:outline-0 ring-gray-100 p-2 shadow-sm sm:text-sm" />
                                </label>
                            </div>
                        </div>
                        <div class="col-span-1 flex flex-col relative">
                            <div class="justify-center flex">
                                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=1160"
                                    alt="" class="size-40 rounded-full object-cover" />
                            </div>
                            <div class="justify-end flex flex-col flex-1 absolute right-15 top-0">
                                <div @click="toggleEditAvatar"
                                    class="flex items-center cursor-pointer gap-2 px-2 py-1 hover:bg-gray-200 bg-gray-100 rounded-md ring ring-gray-200">
                                    <i class="bx bx-edit-alt"></i>Edit
                                </div>
                                <div role="menu" :class="editAvatar ? 'block' : 'hidden'"
                                    class="absolute inset-e-0 top-12 z-auto w-31 divide-y divide-gray-200 overflow-hidden rounded border border-gray-300 bg-white shadow-sm">
                                    <div>
                                        <label for="avatar"
                                            class="block px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900"
                                            role="menuitem">
                                            Change Avatar
                                            <input type="file" name="" id="avatar" hidden>
                                        </label>

                                        <a href="#"
                                            class="block px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900"
                                            role="menuitem">
                                            Remove Avatar
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-if="!isDisable" class="flex mt-7 items-center gap-2">
                        <button
                            class="inline-block rounded border border-teal-600 bg-teal-600 px-2 py-1 font-medium text-white shadow-sm transition-colors hover:bg-teal-700"
                            href="#">
                            Save Changes
                        </button>
                        <button @click="toggleEditor"
                            class="inline-block rounded border border-teal-600 bg-white-600 px-2 py-1 font-medium text-teal-600 shadow-sm transition-colors hover:bg-gray-100"
                            href="#">
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>