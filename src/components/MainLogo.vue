<template>
  <div :class="['flex', 'flex-col', 'items-center', containerClass]">
    <h1 class="text-8xl font-black font-serif italic tracking-[-0.2em] text-[#00020c]">TRS</h1>
    <h1 class="text-4xl font-black tracking-tighter text-[#00020c]">Thesis Record System</h1>
  </div>
</template>


<script setup lang="ts">
  const props = defineProps({
    containerClass: { type: String },
  })
</script>