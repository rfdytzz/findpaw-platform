<script setup>
import Nav from '@/components/Nav.vue'
import ProfileSidebar from '@/components/ProfileSidebar.vue'
import Breadcrumbs from '@/components/Breadcrumbs.vue'
import Button from '@/components/Button.vue'
import { onMounted, ref } from 'vue'

const isEdit = ref(false)
const toggleEdit = () => {
    isEdit.value = !isEdit.value
}

onMounted(() => {
    document.title = 'FindPaw - Profile'
})
</script>

<template>
    <Nav />
    <ProfileSidebar />

    <div class="relative flex items-start md:ml-65 font-inter">
        <div class="w-full md:mt-15">
            <div class="flexitems-center justify-between px-6 py-5 border-b border-slate-200">
                <Breadcrumbs />
            </div>
            <div class="max-w-4xl px-6 py-8 space-y-8">
                <div>
                    <h1 class="text-2xl font-semibold text-slate-900">
                        Public Profile
                    </h1>
                    <p class="mt-1 text-sm text-slate-500">
                        Manage your public information and account details.
                    </p>
                </div>
                <div class="rounded-2xl border border-slate-200 bg-white">
                    <div class="border-b border-slate-200 px-6 py-5">
                        <h2 class="font-semibold text-slate-900">
                            Personal Information
                        </h2>
                        <p class="mt-1 text-sm text-slate-500">
                            This information will appear on your profile.
                        </p>
                    </div>
                    <div class="space-y-6 p-6">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center gap-5">
                                <div
                                    class="flex h-20 w-20 items-center justify-center rounded-full bg-slate-100 text-xl font-semibold text-slate-700">
                                    R
                                </div>
                                <div v-if="isEdit">
                                    <Button variant="outline" class="text-sm">
                                        Change Photo
                                    </Button>
                                    <p class="mt-2 text-xs text-slate-500">
                                        JPG, PNG up to 2MB.
                                    </p>
                                </div>
                            </div>
                            <Button @click="toggleEdit" v-if="!isEdit" variant="outline"
                                class="flex itemx-center gap-2"><i class="bx bx-edit-alt"></i>Edit</Button>
                        </div>
                        <div class="space-y-2 flex flex-col">
                            <label class="text-sm font-medium">
                                Full Name
                            </label>
                            <input type="text" value="Rafka Dyta Pratama" :disabled="!isEdit"
                                :class="isEdit ? 'border border-slate-200 focus:border-slate-400 focus:ring-slate-200 focus:ring-3' : 'bg-gray-100 text-gray-500'"
                                class="rounded-md text-sm flex-1 focus:outline-0 p-3 transition duration-200 ease-in-out" />
                        </div>
                        <div class="space-y-2 flex flex-col">
                            <label class="text-sm font-medium">
                                Email *
                            </label>
                            <input type="text" value="rafka@mail.com" disabled
                                class="rounded-md text-gray-500 text-sm flex-1 focus:outline-0 p-3 transition duration-200 ease-in-out bg-gray-100" />
                        </div>
                        <div class="space-y-2 flex flex-col">
                            <label class="text-sm font-medium">
                                Number Phone *
                            </label>
                            <input type="text" value="+62 857-7559-0136" :disabled="!isEdit"
                                :class="isEdit ? 'border border-slate-200 focus:border-slate-400 focus:ring-slate-200 focus:ring-3' : 'bg-gray-100 text-gray-500'"
                                class="rounded-md text-sm flex-1 focus:outline-0 p-3 transition duration-200 ease-in-out" />
                        </div>
                        <div class="space-y-2 flex flex-col">
                            <label class="text-sm font-medium">
                                Birthdate *
                            </label>
                            <input type="date" value="2009-12-02" :disabled="!isEdit"
                                :class="isEdit ? 'border border-slate-200 focus:border-slate-400 focus:ring-slate-200 focus:ring-3' : 'bg-gray-100 text-gray-500'"
                                class="rounded-md text-sm flex-1 focus:outline-0 p-3 transition duration-200 ease-in-out" />
                        </div>
                        <div class="space-y-2 flex flex-col">
                            <label class="text-sm font-medium">
                                Address *
                            </label>
                            <input type="text" value="Jl. Sakhuji, RT 1/1, Desa Candinegara, Kec. Pekuncen, Kab. Banyumas, Prov. Jateng, Indonesia" :disabled="!isEdit"
                                :class="isEdit ? 'border border-slate-200 focus:border-slate-400 focus:ring-slate-200 focus:ring-3' : 'bg-gray-100 text-gray-500'"
                                class="rounded-md text-sm flex-1 focus:outline-0 p-3 transition duration-200 ease-in-out" />
                        </div>
                    </div>
                    <div v-if="isEdit" class="flex justify-end gap-3 border-t border-slate-200 px-6 py-5">
                        <Button class="text-sm" variant="outline" @click="toggleEdit">
                            <i class="bx bx-x"></i>Cancel
                        </Button>
                        <Button class="text-sm">
                            <i class="bx bx-check"></i>Save Changes
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>