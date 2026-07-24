<script setup>
import AppNavbar from '@/components/layout/AppNavbar.vue'
import ProfileSidebar from '@/components/layout/ProfileSidebar.vue'
import Breadcrumbs from '@/components/ui/Breadcrumbs.vue'
import { onMounted, ref } from 'vue';
onMounted(() => {
    document.title = 'FindPaw - Change Password'
})
</script>

<template>
    <AppNavbar />
    <ProfileSidebar />
    <div class="ml-65 h-fit relative flex items-start font-inter">
        <div class="w-full h-screen mt-15">
            <div class="flex items-center justify-between py-5 px-5">
                <Breadcrumbs />
            </div>
            <div class="w-full h-screen"></div>
        </div>
    </div>
</template>