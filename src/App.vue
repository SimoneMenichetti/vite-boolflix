<template>
  <div>
    <AppHeader title="BOOLFLIX" @search="getMovieDetails" />
    <main>
      <!-- Messaggio di benvenuto con sfondo nero -->
      <div v-if="!store.appMovieDetailsList.length && !store.isLoading" class="welcome-message">
        <h2>Inizia a vedere il tuo film o la tua serie TV preferita</h2>
        <p>Inserisci nel prompt il titolo della locandina ed inizia subito la ricerca!</p>
      </div>

      <!-- Condizione per mostrare il caricamento -->
      <div v-if="store.isLoading" class="loading-indicator">
        <div class="spinner"></div>Caricamento...
      </div>

      <!-- Mostra i risultati quando non ci sono più caricamenti -->
      <div v-else>
        <AppMovieDetailslist />
      </div>
    </main>
  </div>
</template>

<script>
import axios from "axios";
// Importiamo i componenti
import AppHeader from "./components/AppHeader.vue";
import AppMovieDetailslist from "./components/AppMovieDetailsList.vue";
// Importiamo lo store
import { store } from "./store";
// Importiamo flag-icon-css
import "../node_modules/flag-icon-css/country.json";

export default {
  name: "App",
  components: {
    AppHeader,
    AppMovieDetailslist,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    // Metodo per ottenere i dettagli dei film e serie TV
    async getMovieDetails() {
      const apiKey = "2151d1163db8f79c65ffd8f6a53575be";
      const searchQuery = this.store.searchText;

      try {
        // Impostiamo lo stato di caricamento
        this.store.isLoading = true;

        // Esegui le chiamate alle API
        const [moviesRes, tvRes] = await Promise.all([
          axios.get("https://api.themoviedb.org/3/search/movie", {
            params: { api_key: apiKey, query: searchQuery },
          }),
          axios.get("https://api.themoviedb.org/3/search/tv", {
            params: { api_key: apiKey, query: searchQuery },
          }),
        ]);

        // Elaboriamo i risultati
        const movies = await this.fetchDetails(moviesRes.data.results, "movie");
        const tvShows = await this.fetchDetails(tvRes.data.results, "tv");

        // Salviamo i dati nello store
        this.store.appMovieDetailsList = [...movies, ...tvShows];
      } catch (error) {
        console.error("Errore durante il caricamento dei dati:", error);
      } finally {
        this.store.isLoading = false; // Fine del caricamento
      }
    },

    // Metodo per ottenere i dettagli aggiuntivi (cast e generi)
    async fetchDetails(items, type) {
      const apiKey = "2151d1163db8f79c65ffd8f6a53575be";

      const promises = items.map(async (item) => {
        try {
          const [creditsRes, detailsRes] = await Promise.all([
            axios.get(`https://api.themoviedb.org/3/${type}/${item.id}/credits`, {
              params: { api_key: apiKey },
            }),
            axios.get(`https://api.themoviedb.org/3/${type}/${item.id}`, {
              params: { api_key: apiKey },
            }),
          ]);

          const cast = creditsRes.data.cast
            .slice(0, 5)
            .map((actor) => actor.name);
          const genres = detailsRes.data.genres.map((genre) => genre.name).join(", ");

          return { ...item, cast, genres, type };
        } catch (error) {
          console.error(`Errore durante il caricamento dei dettagli per ${type} con ID ${item.id}:`, error);
          return { ...item, cast: [], genres: "", type };
        }
      });

      return await Promise.all(promises);
    },
  },
  created() {
    // La ricerca non viene eseguita automaticamente; il messaggio di benvenuto rimarrà visibile finché non viene avviata una ricerca
  },
};
</script>

<style lang="scss">
@use "./assets/style/general.scss" as *;
@import "../node_modules/flag-icon-css/css/flag-icons.css";

// Regole per lo spinner di caricamento
.spinner {
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top: 4px solid #de020c;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
  margin-right: 10px;
}

// Messaggio di benvenuto con sfondo nero
.welcome-message {
  color: #fff;
  text-align: center;
  padding: 50px;
  font-size: 24px;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
