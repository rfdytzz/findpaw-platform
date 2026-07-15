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
                <div class="font-medium mt-5">Account Information</div>
                <form action="" class="mt-5">
                </form>
            </div>
        </div>
    </div>
</template>