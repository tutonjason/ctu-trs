<template>
  <div class="min-h-screen min-w-full flex justify-center items-center">
    <div class="min-w-max flex flex-col items-center">
      <MainLogo containerClass="mb-14"/>
      <form class="w-4/5" @submit-prevent="handleSubmit">
        <InputField containerClass="mb-5" label="Your email" type="email" id="email" v-model="email"/>
        <InputField containerClass="mb-5" label="Your password" type="password" id="password" v-model="password" auto-complete="on"/>
        <div class="flex flex-row items-center justify-between">
          <div class="flex items-start">
            <div class="flex items-center h-5 my-auto">
              <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
            </div>
            <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
          </div>
          <button
            type="submit" 
            class="
            text-white bg-[#00020c] hover:bg-[#ec9008] hover:text-[#00020c] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
        </div>
      </form>

      <div class="separator mt-5 px-10">
        <hr class="line">
        <span>or</span>
        <hr class="line">
      </div>

      <button @click="sessionStore.googleSignIn"
        type="button" 
        class="text-[#00020c] bg-[#ec9008] 
          hover:bg-[#00020c]/90 
          hover:text-white
          focus:ring-4 
          focus:outline-none 
          focus:ring-[#ec9008]/50 
          font-medium rounded-lg text-sm px-5 py-2.5 
          text-center inline-flex items-center
          me-2 mt-5 mb-2"
        :class="{'animate-pulse': sessionStore.currentUser}">
        <GoogleIcon />
        Login in with Google
      </button>
    </div>
  </div>
</template>


<script setup lang="ts">
  import { auth } from '@/firebase';
  import { useSessionStore } from '@/stores/session';
  import { ref, onMounted } from 'vue';
  import GoogleIcon from '@/components/Icon/GoogleIcon.vue';
  import MainLogo from '@/components/MainLogo.vue';
  import InputField from '@/components/InputField.vue';

  const sessionStore = useSessionStore();
  const isLoggedIn = ref(false);
  const email = ref();
  const password = ref();

  onMounted(async () => {
    if(auth.currentUser) {
      isLoggedIn.value = true
    }
  })

  const handleSubmit = () => {
    console.log('>>> email', email.value);
  }
</script>

<style scoped>
  .separator {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    color: #8B8E98;
  }

  .separator .line {
    display: block;
    width: 100%;
    height: 1px;
    border: 0;
    background-color: #e8e8e8;
  }
</style>