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
          try {
            const searchQuery = this.store.searchText;
            const apiKey = '2151d1163db8f79c65ffd8f6a53575be';
            // aggiungiamo lo stato di caricamento al momento dell inizializzazione ricerca
            this.store.isLoading = true;

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

            const movies = [];
            for (const movie of moviesRes.data.results) {
              const details = await this.getAdditionalDetails(movie.id, 'movie');
              movies.push({ ...movie, type: 'movie', ...details });
            }

            const tvShows = [];
            for (const show of tvRes.data.results) {
              const details = await this.getAdditionalDetails(show.id, 'tv');
              tvShows.push({ ...show, type: 'tv', ...details });
            }

            // Assegna i risultati al campo appMovieDetailsList nello store
            this.store.appMovieDetailsList = [...movies, ...tvShows];
          } catch (error) {
            console.error('Error fetching data:', error);
          } finally {
            // inseriamo il momento della fine del caricamento
            this.store.isLoading = false;
          }
        },

        // metodo aggiuntivo BONUS MILES 5 ( otteniamo i dettagli del cast e il genere film/serie)
        async getAdditionalDetails(id, type) {
          try {
            const apiKey = '2151d1163db8f79c65ffd8f6a53575be';

            // Chiamata API per ottenere i dettagli del cast
            const creditsRes = await axios.get(`https://api.themoviedb.org/3/${type}/${id}/credits`, {
              params: {
                api_key: apiKey,
              }
            });

            // Chiamata API per ottenere i dettagli del genere
            const detailsRes = await axios.get(`https://api.themoviedb.org/3/${type}/${id}`, {
              params: {
                api_key: apiKey,
              }
            });

            const cast = creditsRes.data.cast.slice(0, 5).map(actor => `${actor.name}`);
            const genres = detailsRes.data.genres.map(genre => genre.name).join(', ');

            // Log dei risultati aggiuntivi ottenuti
            console.log(`Dettagli per ${type} con ID ${id}:`);
            console.log('Cast:', cast);
            console.log('Generi:', genres);

            return { cast, genres };
          } catch (error) {
            console.error('Error fetching additional details:', error);
            return { cast: [], genres: '' };
          }
        }
      },
      created() {
        this.getMovieDetails();
      }
    }
</script>

<template>
    <AppHeader title="BOOLFLIX" @search="getMovieDetails" />
    <main>
      <!-- utilizzo di una condizione ciclo v if per il caricamento con il relativo mex -->
      <div v-if="store.isLoading" class="loading-indicator">
        Caricamento...
        Un Attimo e siamo ssshBoolflix da lei
      </div>
      <div v-else>
        <AppMovieDetailslist/>
      </div>
    </main>
</template>

<style lang="scss">
  @use './assets/style/general.scss' as*;
  @import '../node_modules/flag-icon-css/css/flag-icons.css';
</style>