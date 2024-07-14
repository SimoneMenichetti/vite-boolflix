<script>
    // importiamo axios 
    import axios from 'axios';
    // importiamo il componente AppHeader
    import AppHeader from './components/AppHeader.vue';
    // importiamo il componente AppMovieDetailslist
    import AppMovieDetailslist from './components/AppMovieDetailsList.vue';
    // importiamo lo store 
    import {store} from './store';
    // import libreria e css flagicon
    import '../node_modules/flag-icon-css/country.json';
   
    
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
    
      
      methods: {
    async getMovieDetails() {
      // try è gestire le eccezioni in modo che il codice possa eseguire delle istruzioni alternative o gestire l'errore in modo appropriato, anziché interrompere l'esecuzione del programma.
      try {
        const searchQuery = this.store.searchText;
        const apiKey = '2151d1163db8f79c65ffd8f6a53575be';

        // Effettua la chiamata per i film
        const moviesRes = await axios.get(`https://api.themoviedb.org/3/search/movie`, {
          params: {
            api_key: apiKey,
            query: searchQuery,
          }
        });

        // Effettua la chiamata per le serie TV
        const tvRes = await axios.get(`https://api.themoviedb.org/3/search/tv`, {
          params: {
            api_key: apiKey,
            query: searchQuery,
          }
        });

        // Console log delle risposte ricevute
        console.log('Risposta API Film:', moviesRes.data.results);
        console.log('Risposta API Serie TV:', tvRes.data.results);

        // Mappa i risultati aggiungendo il tipo (movie o tv)
        const movies = moviesRes.data.results.map(movie => ({ ...movie, type: 'movie' }));
        const tvShows = tvRes.data.results.map(show => ({ ...show, type: 'tv' }));

        // Assegna i risultati al campo appMovieDetailsList nello store
        this.store.appMovieDetailsList = [...movies, ...tvShows];
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
  },
  created() {
    this.getMovieDetails();
  },
}
</script>

<template>
    <AppHeader title="BOOLFLIX" @search="getMovieDetails" />
    <main>
        <AppMovieDetailslist/>
    </main>

</template>

<style lang="scss">
    @use './assets/style/general.scss' as*;
    @import '../node_modules/flag-icon-css/css/flag-icons.css';
    
    main {
      padding-top: 20px;
    }
</style>