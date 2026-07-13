<script setup>
import Nav from '@/components/Nav.vue';
import Footer from '@/components/Footer.vue';
</script>

<template>
    <Nav />

    <div class="w-full h-screen flex justify-center items-center">
        <div class="max-w-md text-center">
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke-width="1.5" stroke="currentColor" class="mx-auto size-20 text-gray-400">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M15.182 16.318A4.486 4.486 0 0 0 12.016 15a4.486 4.486 0 0 0-3.198 1.318M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
            </svg>

            <h2 class="mt-6 text-2xl font-bold text-gray-900">Hmm, Page nothing found</h2>

            <p class="mt-4 text-pretty text-gray-700">
                We couldn't find what you were looking for. Try a different search term or explore our
                popular categories.
            </p>

            <div class="mt-6 space-y-2">
                <a href="#"
                    class="block w-full rounded-lg bg-teal-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-teal-700">
                    Back to Home
                </a>

                <a href="#"
                    class="block w-full rounded-lg border border-teal-600 px-6 py-3 text-sm font-medium text-teal-600 transition-colors hover:bg-indigo-50">
                    Refine Search
                </a>
            </div>

            <p class="mt-6 text-sm text-gray-700">
                Popular searches: <a href="#" class="text-teal-600 hover:underline">Trending</a>,
                <a href="#" class="text-teal-600 hover:underline">New</a>,
                <a href="#" class="text-teal-600 hover:underline">Best sellers</a>
            </p>
        </div>
    </div>

    <Footer />
</template>