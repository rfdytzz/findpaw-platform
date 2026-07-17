<script setup>
import Nav from '@/components/Nav.vue';
import Footer from '@/components/Footer.vue';
import ProductCards from '@/components/ProductCards.vue';
</script>

<template>
    <Nav />

    <div class="max-w-7xl mx-auto mt-20 px-5">
        <div class="grid grid-cols-1 lg:grid-cols-5 gap-8">

            <aside class="lg:col-span-1">
                <div class="sticky top-24">
                    <h2 class="font-semibold text-gray-800">
                        Filter
                    </h2>

                    <div class="space-y-4 mt-5">

                        <details open
                            class="group rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
                            <summary
                                class="flex items-center justify-between p-4 cursor-pointer text-sm font-medium text-gray-700">
                                Category

                                <i class="bx bx-chevron-down transition group-open:rotate-180"></i>
                            </summary>

                            <div class="border-t border-gray-200 p-4 space-y-3">

                                <label class="flex items-center gap-3 text-sm text-gray-700">
                                    <input type="checkbox" class="size-4 rounded border-gray-300">
                                    Cat
                                </label>

                                <label class="flex items-center gap-3 text-sm text-gray-700">
                                    <input type="checkbox" class="size-4 rounded border-gray-300">
                                    Dog
                                </label>

                                <label class="flex items-center gap-3 text-sm text-gray-700">
                                    <input type="checkbox" class="size-4 rounded border-gray-300">
                                    Hamster
                                </label>

                            </div>
                        </details>


                        <details open
                            class="group rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">

                            <summary
                                class="flex items-center justify-between p-4 cursor-pointer text-sm font-medium text-gray-700">
                                Price

                                <i class="bx bx-chevron-down transition group-open:rotate-180"></i>
                            </summary>


                            <div class="border-t border-gray-200 p-4">

                                <div class="flex gap-3">

                                    <input type="number" value="0"
                                        class="w-full rounded-xl border-gray-300 text-sm focus:ring-0">

                                    <input type="number" value="600"
                                        class="w-full rounded-xl border-gray-300 text-sm focus:ring-0">

                                </div>

                            </div>

                        </details>

                    </div>

                </div>
            </aside>


            <main class="lg:col-span-4">

                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">

                    <h2 class="font-semibold text-gray-800">
                        Result for: Cat
                    </h2>


                    <div class="flex gap-2 flex-wrap">

                        <span
                            class="flex items-center gap-1 text-sm px-3 py-1.5 rounded-full bg-teal-50 text-teal-600 border border-teal-200">
                            Cat
                            <i class="bx bx-x"></i>
                        </span>


                        <span
                            class="flex items-center gap-1 text-sm px-3 py-1.5 rounded-full bg-teal-50 text-teal-600 border border-teal-200">
                            1-2 y/o
                            <i class="bx bx-x"></i>
                        </span>

                    </div>

                </div>


                <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-5 mt-6">

                    <ProductCards />
                    <ProductCards />
                    <ProductCards />
                    <ProductCards />
                    <ProductCards />
                    <ProductCards />
                    <ProductCards />
                    <ProductCards />

                </div>

            </main>

        </div>
    </div>


    <Footer />

</template>