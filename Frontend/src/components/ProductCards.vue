<template>
    <router-link to="/detail" class="group border border-gray-100 hover:border-gray-200 relative w-full block overflow-hidden">
        <button
            class="absolute hover:text-gray-500 inset-e-2 bottom-2 z-10 rounded-full bg-white p-1.5 text-gray-900 transition">
            <span class="sr-only">Wishlist</span>

            <i class="bx bx-bookmark"></i>
        </button>

        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE6kJNbOdTh7CJim_pJdlLOBn-tZ7UGSJS-H9CTzautg&s=10"
            alt="" class="w-full object-cover transition duration-500 group-hover:scale-105 h-40" />

        <div class="relative bg-white p-4">
            <h3 class="text-sm font-medium text-gray-900">Larry - Domesctic Cat</h3>
            <p class="text-sm text-gray-700">Indonesia, Asia</p>

            <div class="flex justify-between">
                <p class="mt-1.5 text-sm font-medium text-gray-700">$14.99</p>
            </div>
        </div>
    </router-link>
</template>