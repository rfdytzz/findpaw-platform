<script setup>
import Nav from '@/components/Nav.vue';
import { onMounted } from 'vue';

onMounted(() => {
    document.title = 'FindPaw'
})
</script>

<template>
    <Nav />

    <section>
        <div class="grid-cols-2 grid">
            <div class="w-full h-screen items-start flex-col justify-center p-15 flex">
                <h1 class="text-4xl font-bold text-gray-900 sm:text-5xl">
                    Understand user flow and
                    <strong class="text-teal-600"> increase </strong>
                    conversions
                </h1>

                <p class="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, nisi. Natus, provident
                    accusamus impedit minima harum corporis iusto.
                </p>
                <div class="mt-4 flex gap-4 sm:mt-6">
                    <input class="inline-block focus:w-100 w-60 transition-all duration-200 rounded border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm hover:bg-gray-50 hover:text-gray-900"
                        placeholder="Search...">
                    </input>

                    <a class="inline-block rounded border border-teal-600 bg-teal-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-teal-700"
                        href="#">
                        <div class="flex items-center gap-2">
                            <i class="bx bx-search"></i>Search
                        </div>
                    </a>
                </div>
            </div>
            <div class="w-full h-screen flex items-center justify-center">
                <img src="/public/img/hero.png" class="max-w-md hover:scale-105 transition duration-200" alt="">
            </div>
        </div>
    </section>
</template>