<script setup>
import Nav from '@/components/Nav.vue';
import Footer from '@/components/Footer.vue';
import { onMounted } from 'vue';

onMounted(() => {
    document.title = 'FindPaw'
})
</script>

<template>
    <Nav />

    <section>
        <div class="grid-cols-2 grid">
            <div class="w-full col-span-2 md:col-span-1 h-screen items-start flex-col justify-center md:p-15 p-10 flex">
                <div class="py-1 px-2 bg-teal-600/20 text-teal-600 rounded-full text-sm flex items-center gap-2">
                    <div class="bg-teal-500 animate-pulse rounded p-1"></div> Coming soon
                </div>
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
                    <input
                        class="inline-block md:focus:w-100 w-60 transition-all duration-200 rounded border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm hover:bg-gray-50 hover:text-gray-900"
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
            <div class="col-span-2 hidden md:block md:col-span-1 ">
                <div class="w-full h-screen flex items-center justify-center">
                    <img src="/public/img/hero.png"
                        class="w-70  animate-pulse hover:scale-105 transition duration-200" alt="">
                </div>
            </div>
        </div>
    </section>
    
    <Footer />
</template>