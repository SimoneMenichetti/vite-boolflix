<script>
// importiamo axios 
import axios from 'axios';
// importiamo il componente AppHeader
import AppHeader from './components/AppHeader.vue';
// importiamo il componente AppMovieDetailslist
import AppMovieDetailslist from './components/AppMovieDetailsList.vue';

// importiamo lo store 

import {store} from './store';

export default {
  name: "App",
  components: {
    AppHeader,
    AppMovieDetailslist,

  },

  data(){
    return{
      store,
    }
  },

  // inizializiamo un metodo per richiamare dall api
  methods:{
    getMovieDetails(){
      axios.
      get(store.apiURL)
      .then(res=>{
        console.log(res.data.results);
        // inseriamo nell array vuoto gli object trovati 
        store.appMovieDetailsList=res.data.results;
      })
      .catch(err =>{
        console.log(err);

      })
    }
  },
  created(){
    this.getMovieDetails();
  }

}
</script>

<template>
    <AppHeader title="BOOLFLIX" @search="getMovieDetails"/>
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
