<script setup>
import Nav from '@/components/Nav.vue';
import Footer from '@/components/Footer.vue';
import ProductCards from '@/components/ProductCards.vue';
</script>

<template>
    <Nav />
    <div class="grid grid-cols-5 mt-15 p-5 gap-10">
        <div class="w-55">
            <p class="font-medium text-gray-700">Filter</p>
            <div class="space-y-4 mt-5">
                <details class="group relative overflow-hidden rounded border border-gray-300 shadow-sm">
                    <summary
                        class="flex items-center justify-between gap-2 p-3 text-gray-700 transition-colors hover:text-gray-900 [&::-webkit-details-marker]:hidden">
                        <span class="text-sm font-medium"> Category </span>

                        <span class="transition-transform group-open:-rotate-180">
                            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor" class="size-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </span>
                    </summary>

                    <div class="divide-y divide-gray-300 border-t border-gray-300 bg-white">
                        <div class="flex items-center justify-between px-3 py-2">
                            <span class="text-sm text-gray-700"> 0 Selected </span>

                            <button type="button"
                                class="text-sm text-gray-700 underline transition-colors hover:text-gray-900">
                                Reset
                            </button>
                        </div>

                        <fieldset class="p-3">
                            <legend class="sr-only">Checkboxes</legend>

                            <div class="flex flex-col items-start gap-3">
                                <label for="Option1" class="inline-flex items-center gap-3">
                                    <input type="checkbox" class="size-5 rounded border-gray-300 shadow-sm"
                                        id="Option1" />

                                    <span class="text-sm font-medium text-gray-700"> Cat </span>
                                </label>

                                <label for="Option2" class="inline-flex items-center gap-3">
                                    <input type="checkbox" class="size-5 rounded border-gray-300 shadow-sm"
                                        id="Option2" />

                                    <span class="text-sm font-medium text-gray-700"> Dog </span>
                                </label>

                                <label for="Option3" class="inline-flex items-center gap-3">
                                    <input type="checkbox" class="size-5 rounded border-gray-300 shadow-sm"
                                        id="Option3" />

                                    <span class="text-sm font-medium text-gray-700"> Hamsters </span>
                                </label>
                            </div>
                        </fieldset>
                    </div>
                </details>

                <details class="group relative overflow-hidden rounded border border-gray-300 shadow-sm">
                    <summary
                        class="flex items-center justify-between gap-2 p-3 text-gray-700 transition-colors hover:text-gray-900 [&::-webkit-details-marker]:hidden">
                        <span class="text-sm font-medium"> Price </span>

                        <span class="transition-transform group-open:-rotate-180">
                            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor" class="size-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </span>
                    </summary>

                    <div class="divide-y divide-gray-300 border-t border-gray-300 bg-white">
                        <div class="flex items-center justify-between px-3 py-2">
                            <span class="text-sm text-gray-700"> Max price is $600 </span>

                            <button type="button"
                                class="text-sm text-gray-700 underline transition-colors hover:text-gray-900">
                                Reset
                            </button>
                        </div>

                        <div class="flex items-center gap-3 p-3">
                            <label for="MinPrice">
                                <span class="text-sm text-gray-700"> Min </span>

                                <input type="number" id="MinPrice" value="0"
                                    class="mt-0.5 focus:outline-0 w-full rounded border-gray-300 shadow-sm sm:text-sm" />
                            </label>

                            <label for="MaxPrice">
                                <span class="text-sm text-gray-700"> Max </span>

                                <input type="number" id="MaxPrice" value="600"
                                    class="mt-0.5 focus:outline-0 w-full rounded border-gray-300 shadow-sm sm:text-sm" />
                            </label>
                        </div>
                    </div>
                </details>
            </div>
        </div>
        <div class="col-span-4 h-screen">
            <div class="flex items-center justify-between">
                <div class="font-medium">Result for: Cat</div>
                <div class="flex items-center gap-2">
                    <div class="text-sm flex items-center gap-1 bg-teal-600/20 border border-teal-600 px-1.5 py-1 rounded-2xl text-teal-600"><i class="bx bx-x"></i>Cat</div>
                    <div class="text-sm flex items-center gap-1 bg-teal-600/20 border border-teal-600 px-1.5 py-1 rounded-2xl text-teal-600"><i class="bx bx-x"></i>1-2 y/o</div>
                </div>
            </div>
            <div class="grid grid-cols-5 gap-5 mt-5">
                <ProductCards />
                <ProductCards />
                <ProductCards />
                <ProductCards />
                <ProductCards />
                <ProductCards />
            </div>
        </div>
    </div>
</template>