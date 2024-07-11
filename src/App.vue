<script>
// importiamo axios 
import axios from 'axios';
// importiamo il componente AppHeader
import AppHeader from './components/AppHeader.vue';
// importiamo il componente AppMovieDetailslist
import AppMovieDetailslist from './components/AppMovieDetailsList.vue';


export default {
  name: "App",
  components: {
    AppHeader,
    AppMovieDetailslist,

  }
}
</script>

<template>
    <AppHeader title="BOOLFLIX" />
  <main>
    <AppMovieDetailslist/>
  </main>

</template>

<style lang="scss">
@use './assets/style/general.scss' as*;

main {
  padding-top: 20px;
}
</style>
