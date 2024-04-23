<template>
  <div class="bg-purple-50 min-h-screen">
    <PageNav>
      <div :class="containerClass" class="px-4 md:px-6 py-2">
        <NuxtLink to="/" class="text-lg font-semibold">BOT Practice</NuxtLink>
      </div>
    </PageNav>

    <div :class="containerClass" class="py-4">
      <div class="rounded-lg shadow-lg border border-slate-200 bg-white px-4 md:px-6 py-2 md:py-4">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const containerClass = 'max-w-screen-md mx-1 md:mx-auto'
</script>
