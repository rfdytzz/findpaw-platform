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
        <div class="w-full h-screen flex justify-around items-center">
            <div class="flex flex-col items-center">
                <div class="text-4xl">Find your Paw now!</div>
                <p>on</p>
                <div class="font-bold text-5xl text-teal-500">FindPaw</div>
                <div class="mt-7 flex items-center">
                    <!-- Category Selector -->
                    <label for="category"
                        class="flex px-5 py-3 ring ring-gray-200 rounded-l-2xl items-start w-40 flex-col">
                        <div class="text-sm font-medium text-gray-700">Category</div>
                        <select name="category" class="w-full text-gray-500 focus:outline-0 bg-transparent"
                            id="category">
                            <option value="" disabled selected>Select</option>
                            <option value="cat">Cat</option>
                            <option value="dog">Dog</option>
                        </select>
                    </label>

                    <!-- Age Selector -->
                    <label for="age" class="flex px-5 py-3 ring ring-gray-200 items-start w-40 flex-col border-l-0">
                        <div class="text-sm font-medium text-gray-700">Age</div>
                        <select name="age" class="w-full text-gray-500 focus:outline-0 bg-transparent" id="age">
                            <option value="" disabled selected>Select</option>
                            <option value="0-1">0-1 year</option>
                            <option value="1-5">1-5 years</option>
                            <option value="5-10">5-10 years</option>
                        </select>
                    </label>

                    <!-- Search Button -->
                    <button type="submit"
                        class="flex px-5 py-5.5 ring ring-gray-200 items-center justify-center w-40 rounded-r-2xl bg-teal-600 text-white font-semibold hover:bg-teal-700 transition cursor-pointer">
                        Search
                    </button>
                </div>

            </div>
            <img class="w-100" src="/public/img/hero.png" alt="">
        </div>
    </section>
</template>