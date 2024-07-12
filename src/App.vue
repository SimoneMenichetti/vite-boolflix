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

  // inizializiamo un metodo per richiamare dall api la ricerca dei film
  methods: {
    getApiUrlFilms(searchQuery) {
      const apiKey = '2151d1163db8f79c65ffd8f6a53575be';
      return `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchQuery}`;
    },

    getMovieDetails() {
      const searchQuery = store.searchText;
      axios.get(this.getApiUrlFilms(searchQuery))
        .then(res => {
          console.log(res.data.results);
          store.appMovieDetailsList = res.data.results;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
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
