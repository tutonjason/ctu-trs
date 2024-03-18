<template>
  <div :class="[containerClass]">
    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ label }}</label>
    <input 
      :type="type"
      :id="id" 
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      :placeholder="placeholder"
      v-model="model"
      required />
  </div>
</template>

<script setup lang="ts">

  const props = defineProps({
    containerClass: { type: String },
    label: {type: String},
    type: {type: String, required: true},
    id: {type: String, required: true},
    placeholder: {type: String, default: ''},
    autoComplete: {type: String, default: 'off'}
  });

  const model = defineModel();
  
</script>