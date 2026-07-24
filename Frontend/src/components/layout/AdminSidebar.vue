<script setup>
import AdminMenu from '../ui/AdminMenu.vue';
import { onMounted } from 'vue';

onMounted(() => {
    document.title = 'Findpaw - Admin'
})
</script>

<template>
    <div class="w-64 fixed top-0 left-0 h-screen border-r border-slate-200 bg-white font-inter p-3">
        <div class="flex flex-col items-start justify-center p-2">
            <a href="/" class="text-xl font-semibold flex items-center gap-2"><i class="bx bxs-dog"></i>FindPaw</a>
        </div>
        <AdminMenu />
    </div>
</template>