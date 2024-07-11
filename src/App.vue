<script>
// importiamo axios 
import axios from 'axios';
// importiamo il componente AppHeader
import AppHeader from './components/AppHeader.vue';


export default {
  name: "App",
  components: {
    AppHeader,

  }
}
</script>

<template>
  <AppHeader />
  <main>

  </main>

</template>

<style lang="scss">
main {
  padding-top: 20px;
}
</style>
