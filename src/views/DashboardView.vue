<template>
  <div class="min-h-screen min-w-full bg-[#EFEFEF]">
    <div class="min-h-screen max-w-full flex flex-row items-start">

      <!-- sidebar -->
      <nav class="min-h-screen w-2/12 p-3 bg-[#fdfdfd] flex flex-col items-center">
        <div class="mt-2 flex flex-col items-center">
          <h1 class="text-7xl font-black font-serif italic tracking-[-0.2em] text-[#00020c]">TRS</h1>
          <h1 class="text-lg font-black tracking-tighter text-[#00020c]">Thesis Tracking System</h1>
        </div>
      </nav>

      <!-- main -->
      <main class="min-h-screen flex-grow flex flex-col">

        <!-- header -->
        <header class="h-20 bg-white p-3 flex flex-row items-center justify-between">
          <h2 class="text-3xl font-black tracking-tighter text-[#00020c]">Dashboard</h2>
          <div class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full" @click="sessionStore.googleSignOut">
              <svg class="absolute w-12 h-12 text-[#ec9008]/80 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
          </div>
        </header>
      </main>
    </div>
  </div>


</template>

<script setup lang="ts">

  import { useSessionStore } from '@/stores/session';
  import { ref } from "vue";

  const sessionStore = useSessionStore();

</script>