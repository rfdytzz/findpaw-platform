<script setup>
import AdminSidebar from '@/components/layout/AdminSidebar.vue';
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
    <div class="ml-64 p-5 bg-slate-50 h-screen"></div>
</template>