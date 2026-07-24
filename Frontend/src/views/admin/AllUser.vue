<script setup>
import AdminSidebar from '@/components/layout/AdminSidebar.vue';
import Button from '@/components/ui/Button.vue';
import { useGetUsers } from '@/composables/useGetUsers';
import { onMounted, ref } from 'vue';

const { data, getUsers } = useGetUsers()

const search = ref('')

onMounted(() => {
    getUsers()
})
</script>

<template>
    <AdminSidebar />
    <div class="ml-64 p-3 bg-white border-b border-slate-200 font-inter">
        <div class="flex items-center justify-between px-2">
            <nav>
                <ol class="flex items-center gap-1 text-sm text-gray-700">
                    <li>
                        <router-link to="/profile" class="block transition-colors hover:text-gray-900"> Dashboard
                        </router-link>
                    </li>
                </ol>
            </nav>
            <div class="flex items-center justify-center gap-2 cursor-pointer">
                <img class="rounded-full size-8" src="https://ui-avatars.com/api/?name=John+Doe" alt="avatar">
                <div class="flex flex-col items-start justify-center">
                    <div class="text-sm font-semibold text-gray-800 -mb-1">FindPaw Admin</div>
                    <div class="text-[12px] text-gray-500">admin@findpaw.com</div>
                </div>
            </div>
        </div>
    </div>
    <div class="ml-64 p-5 bg-slate-50 h-screen font-inter">
        <div class="flex flex-col gap-5">
            <div class="flex justify-between items-center">
                <div class="flex flex-col">
                    <div class="text-xl font-semibold">All User</div>
                    <div class="text-">Manage all users</div>
                </div>
                <Button class="text-sm"><i class="bx bx-plus"></i>Add User</Button>
            </div>
            <div class="flex flex-wrap items-center gap-3">
                <div
                    class="flex h-10 w-full max-w-sm items-center rounded-md border border-slate-200 bg-white px-3 transition-colors focus-within:border-slate-400 focus-within:ring-2 focus-within:ring-slate-200">
                    <i class="bx bx-search mr-2 text-lg text-slate-400"></i>
                    <input type="text" placeholder="Search..." v-model="search"
                        class="flex-1 bg-transparent text-sm placeholder:text-slate-400 focus:outline-none" />
                </div>
                <select
                    class="h-10 rounded-md border border-slate-200 bg-white px-3 text-sm text-slate-700 transition-colors focus:border-slate-400 focus:ring-2 focus:ring-slate-200 focus:outline-none">
                    <option value="">All Role</option>
                    <option value="active">Admin</option>
                    <option value="inactive">User</option>
                </select>
                <select
                    class="h-10 rounded-md border border-slate-200 bg-white px-3 text-sm text-slate-700 transition-colors focus:border-slate-400 focus:ring-2 focus:ring-slate-200 focus:outline-none">
                    <option value="">All Status</option>
                    <option value="active">Verified</option>
                    <option value="inactive">not Verified</option>
                </select>
            </div>
            <div class="overflow-hidden rounded-xl border border-slate-200 bg-white">
                <div class="overflow-x-auto">
                    <table class="min-w-full">
                        <thead class="bg-slate-50">
                            <tr class="border-b border-slate-200">
                                <th
                                    class="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                                    ID
                                </th>
                                <th
                                    class="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                                    User
                                </th>
                                <th
                                    class="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                                    Email
                                </th>
                                <th
                                    class="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                                    Phone Number
                                </th>
                                <th
                                    class="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                                    Role
                                </th>
                                <th
                                    class="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                                    Status
                                </th>
                                <th
                                    class="px-6 py-4 text-center text-xs font-semibold uppercase tracking-wide text-slate-500">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody v-for="(item, index) in data.filter(i => i.name.toLowerCase().includes(search.toLowerCase()) || i.email.toLowerCase().includes(search.toLowerCase()) || i.phone_number.toLowerCase().includes(search.toLowerCase()) )" :key="index" class="divide-y divide-slate-200">
                            <tr class="transition-colors hover:bg-slate-50">
                                <td class="px-6 py-4 text-sm text-slate-900">
                                    {{ item.id }}
                                </td>
                                <td class="px-6 py-4">
                                    <div class="flex items-center gap-3">
                                        <img :src="`https://ui-avatars.com/api/?name=${item.name}`"
                                            class="h-7 w-7 rounded-full" alt="Avatar">
                                        <div>
                                            <div class="font-medium text-sm text-slate-900">
                                                {{ item.name }}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td class="px-6 py-4 text-sm text-slate-600">
                                    {{ item.email }}
                                </td>
                                <td class="px-6 py-4 text-sm text-slate-600">
                                    {{ item.phone_number }}
                                </td>
                                <td class="px-6 py-4 text-sm">
                                    <span :class="item.role === 'admin' ? 'text-blue-700 bg-blue-100' : 'text-yellow-700 bg-yellow-100'"
                                        class="rounded-full capitalize px-3 py-1 text-xs font-medium ">
                                        {{ item.role }}
                                    </span>
                                </td>
                                <td class="px-6 py-4 text-sm">
                                    <span
                                        class="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                                        Verified
                                    </span>
                                </td>
                                <td class="px-6 py-4 text-center text-sm">
                                    <button
                                        class="rounded-md p-2 text-slate-600 transition hover:bg-slate-100">
                                        <i class="bx bx-show text-lg"></i>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>