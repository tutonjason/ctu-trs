<template>
  <div class="min-h-screen min-w-full flex justify-center items-center">
    <div class="min-w-max flex flex-col items-center">
      <MainLogo containerClass="mb-14"/>
      <form class="w-4/5" @submit-prevent="handleSubmit">
        <InputField containerClass="mb-5" label="Your email" type="email" id="email" v-model="email"/>
        <InputField containerClass="mb-5" label="Your password" type="password" id="password" v-model="password" autoComplete="current-password"/>
        <div class="flex flex-row items-center justify-between">
          <CheckBox/>
          <Button type="submit" name="Login" @on-clicked="handleSubmit"/>
        </div>
      </form>

      <div class="separator mt-5 px-10">
        <hr class="line">
        <span>or</span>
        <hr class="line">
      </div>

      <div class="me-2 mt-5 mb-2">
        <Button 
          type="button" 
          name="Continue with Google" 
          @on-clicked="handleGoogleSignin">
          <GoogleIcon />
        </Button>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import { auth } from '@/firebase';
  import { useSessionStore } from '@/stores/session';
  import GoogleIcon from '@/components/Icon/GoogleIcon.vue';
  import MainLogo from '@/components/MainLogo.vue';
  import InputField from '@/components/InputField.vue';
  import Button from '@/components/Button.vue';
  import CheckBox from '@/components/CheckBox.vue';

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
    console.log('>>> testing.....',);
  }

  const handleGoogleSignin = () => sessionStore.googleSignIn()

  // :bgClass="AppDesign.BgColors.CARROT_ORANGE"
  // :textClass="AppDesign.TextColors.RICH_BLACK"
  // :hoverBgClass="AppDesign.BgColors.RICH_BLACK"
  // :hoverTextClass="AppDesign.TextColors.GHOST_WHITE"

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

