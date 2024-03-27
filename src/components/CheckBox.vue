<template>
  <div class="flex items-start">
    <label class="flex items-center h-5 my-auto">
      <input :id="id" type="checkbox" v-model="model"
      :class="[
        'w-4', 
        'h-4',
        'text-[#00020c]',
        'border', 
        'border-gray-300', 
        'rounded-sm', 
        'bg-gray-50', 
        'focus:ring-2',
        'focus:ring-[#ec9008]',
      ]" 
      required />
    <span for="remember" class="ms-2 text-base font-medium text-gray-900">Remember me</span>
    </label>
  </div>
</template>

<script setup lang="ts">
  import { AppDesign } from '@/constants/design';

  defineProps<{
    id?: string
  }>();

  const model = defineModel();
</script>