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
    getMovieDetails() {
      const searchQuery = store.searchText;
      const urlFilms = `https://api.themoviedb.org/3/search/movie?api_key=2151d1163db8f79c65ffd8f6a53575be&query=${searchQuery}`;

      axios.get(urlFilms)
        .then(res => {
          console.log(res.data.results);
          store.appMovieDetailsList = res.data.results;
        })
        .catch(err => {
          console.log(err);
        });
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
