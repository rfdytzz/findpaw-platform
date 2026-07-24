<script setup>
defineProps({
    variant: {
        type: String,
        default: "default"
    }
})
</script>

<template>
    <button :class="[
        'p-2 rounded-lg transition cursor-pointer flex items-center justify-center gap-2',
        variant === 'default' && 'bg-slate-900 text-white hover:bg-slate-700',
        variant === 'light' && 'bg-slate-100 text-slate-900 hover:bg-slate-200',
        variant === 'outline' && 'border border-slate-300 hover:bg-slate-100',
        variant === 'sign' && 'w-full flex items-center justify-center gap-2 bg-slate-900 text-white font-medium py-2 rounded-md cursor-pointer text-sm hover:bg-slate-700 transition duration-200',
        variant === 'ghost' && 'hover:bg-slate-100'
    ]">
        <slot />
    </button>
</template>