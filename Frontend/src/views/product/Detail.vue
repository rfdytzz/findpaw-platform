<script setup>
import Nav from '@/components/Nav.vue';
import { onMounted, ref } from 'vue';

const isPhoto = ref(true)
const togglePhoto = () => {
    isPhoto.value = !isPhoto.value
}

onMounted(() => {
    document.title = 'Cat - Domestic Cat'
})
</script>

<template>
    <Nav />

    <div class="grid md:px-10 px-5 mt-15 relative pb-10 pt-10 gap-5 grid-cols-1 md:grid-cols-3">
        <div class="flex flex-col gap-5">

            <div class="overflow-hidden rounded-md bg-gray-100 ">
                <img v-if="isPhoto" class="w-full aspect-square object-cover"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE6kJNbOdTh7CJim_pJdlLOBn-tZ7UGSJS-H9CTzautg&s=10"
                    alt="">

                <iframe v-else class="w-full aspect-video"
                    src="https://www.youtube.com/embed/l6FN5RG14Lg?si=V3IlYa4y9wrQJ2y2" title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                </iframe>
            </div>

            <div class="flex items-center gap-1 rounded-full p-1 w-fit text-sm font-medium">
                <button :class="isPhoto
                    ? 'bg-gray-100 text-gray-800'
                    : 'text-gray-500'" @click="togglePhoto" class="px-4 py-2 rounded-full transition">
                    Photo
                </button>

                <button :class="!isPhoto
                    ? 'bg-gray-100 text-gray-800'
                    : 'text-gray-500'" @click="togglePhoto" class="px-4 py-2 rounded-full transition">
                    Video
                </button>
            </div>
        </div>

        <div class="flex flex-col font-inter gap-6 pb-15 md:pb-0">
            <div class="flex flex-col gap-1">
                <h1 class="text-3xl font-bold text-gray-800">
                    Larry - Domestic Cat
                </h1>

                <div class="flex items-center gap-2 text-sm text-gray-500">
                    <span>Indonesia, Asia</span>
                    <span>•</span>
                    <span class="flex items-center gap-1">
                        <i class="bx bxs-star text-yellow-500"></i>
                        4.9 Rate
                    </span>
                </div>
            </div>

            <div class="text-3xl font-bold text-slate-800">
                $14.99
            </div>

            <div class="flex flex-col gap-3">
                <h2 class="font-semibold text-gray-800">
                    Detail Pet
                </h2>

                <div class="flex flex-col gap-3 text-sm text-gray-600 leading-relaxed">
                    <p>
                        Kucing domestik (Felis catus) atau kucing kampung memiliki spesifikasi fisik
                        dan perilaku yang sangat adaptif. Bobotnya berkisar 2 - 5 kg dengan panjang
                        tubuh rata-rata 46 cm dan ekor 30 cm. Bulunya pendek dan bervariasi dari hitam,
                        oranye, hingga belang tiga. Kucing ini aktif, mandiri, dan sangat teritorial.
                    </p>

                    <ul class="space-y-1 font-medium text-gray-700">
                        <li>• Age: 2-5 Years</li>
                        <li>• Weight: 2-5 Kg</li>
                        <li>• Health: <span class="font-normal text-slate-900">Very Good</span></li>
                    </ul>
                </div>
            </div>

            <div class="flex flex-col gap-3">
                <h2 class="font-semibold text-gray-800">
                    Delivery
                </h2>

                <div class="flex items-center gap-2 text-sm text-gray-600">
                    <i class="bx bx-map text-slate-600 text-lg"></i>
                    <span>
                        Shipped from Semarang, Central Java, Indonesia
                    </span>
                </div>
            </div>
        </div>

        <div class="h-fit hidden md:block">
            <div class="max-w-md p-5 border sticky top-50 border-slate-200 rounded-md bg-white">

                <div class="flex items-center justify-between mb-5">
                    <h2 class="font-semibold text-gray-800">
                        Manage Purchase
                    </h2>
                    <span class="text-xs px-2 py-1 rounded-full bg-slate-50 text-slate-600">
                        Cat
                    </span>
                </div>

                <div class="flex gap-4">
                    <img class="w-24 h-24 object-cover rounded-xl"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE6kJNbOdTh7CJim_pJdlLOBn-tZ7UGSJS-H9CTzautg&s=10"
                        alt="">

                    <div class="flex flex-col justify-center gap-1">
                        <h3 class="font-semibold text-gray-800">
                            Larry - Domestic Cat
                        </h3>

                        <p class="text-sm text-gray-500">
                            2-5 y/o
                        </p>

                        <p class="text-sm text-gray-500">
                            Indonesia, Asia
                        </p>
                    </div>
                </div>

                <div class="mt-6 flex items-center justify-between">
                    <div class="flex items-center gap-2">
                        <button class="w-8 h-8 rounded-lg border border-gray-300 hover:bg-gray-100">
                            -
                        </button>

                        <input type="number" value="1" disabled
                            class="w-12 text-center py-1.5 rounded-lg border border-gray-300 text-sm">

                        <button class="w-8 h-8 rounded-lg border border-gray-300 hover:bg-gray-100">
                            +
                        </button>
                    </div>
                </div>

                <p class="mt-3 text-xs text-gray-500">
                    You can only buy one of this pet.
                </p>

                <div class="border-t border-gray-200 my-5"></div>

                <div class="flex justify-between items-center">
                    <span class="font-medium text-gray-700">
                        Subtotal
                    </span>

                    <span class="text-xl font-bold text-slate-900">
                        $14.99
                    </span>
                </div>

                <button class="w-full mt-5 py-3 rounded-xl bg-slate-900 
            hover:bg-slate-700 transition text-white font-semibold">
                    Buy Now
                </button>

            </div>
        </div>
    </div>

    <div class="block md:hidden">
        <div class="w-full px-5 py-3 border-t shadow-xl border-slate-200 bg-white fixed bottom-0 flex gap-2">
            <button
                class="bg-slate-100 border border-slate-300 p-3 font-inter rounded-md text-slate-900 flex items-center"><i
                    class="bx bx-message-dots text-xl"></i></button>
            <button class="bg-slate-900 hover:bg-slate-700 transition duration-200 ease-in-out cursor-pointer p-3 flex-1 font-inter rounded-md text-white">Buy Now</button>
        </div>
    </div>
</template>