<script setup lang="ts">
  import { RouterView } from 'vue-router'
  import { getDocs } from 'firebase/firestore'
  import { departmentsRef } from '@/firebase'
  import { onMounted } from 'vue';
  import { useSessionStore } from './stores/session';

  const sessionStore = useSessionStore();

  onMounted(async () => {
    const querySnapshot = await getDocs(departmentsRef)
    querySnapshot.forEach((doc) => {
      console.log('=== doc', doc.data())
    })

    await sessionStore.getAuthenticatedUser();
  }) 

</script>

<template>
  <RouterView/>
</template>