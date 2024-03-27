<template>
  <div :class="[containerClass]">
    <label 
      for="email" 
      :class="[
        'block', 
        'mb-2',
        AppDesign.DesignConstant.LABEL_FONT_WEIGHT, 
        AppDesign.TextColors.RICH_BLACK,
      ]">{{ label }}</label>
    <input 
      :type="type"
      :id="id" 
      :placeholder="placeholder"
      :autocomplete="autoComplete"
      v-model="model"
      :class="[
        'block', 
        'w-full', 
        'p-2.5', 
        'bg-gray-50', 
        'border', 
        'border-gray-300', 
        'text-gray-900', 
        'focus:outline-none',
        AppDesign.DesignConstant.BORDER_RADIUS, 
        `focus:ring-[#${AppDesign.Colors.CARROT_ORANGE}]`,
        `focus:border-[#${AppDesign.Colors.CARROT_ORANGE}]`
      ]"
      required />
  </div>
</template>

<script setup lang="ts">

  import { AppDesign } from '@/constants/design'

  defineProps({
    containerClass: { type: String },
    label: {type: String},
    type: {type: String, required: true},
    id: {type: String, required: true},
    placeholder: {type: String, default: ''},
    autoComplete: {type: String, default: 'off'}
  });

  const model = defineModel();
  
</script>