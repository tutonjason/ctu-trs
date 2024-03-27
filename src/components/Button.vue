<template>
  <button :type="type" @click="$emit('on-clicked')"
  class="w-fit h-fit px-5 py-2.5 rounded-[.25rem] text-center inline-flex items-center text-[#fdfdfd] bg-[#00020c] hover:bg-[#ec9008] hover:text-[#00020c]">
  <slot></slot> 
  {{ name }}
  </button>
</template>

<script setup lang="ts">
  import { AppDesign } from '@/constants/design';

  const textCarrotOrange = AppDesign.TextColors.GHOST_WHITE;

  const props = defineProps<{
    name: string, 
    type: 'submit' | 'reset' | 'button',
  }>();

  

</script>