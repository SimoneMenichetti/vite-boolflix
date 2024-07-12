<script>

export default {
  name: "SingleMovieDetail",
  props: {
    info: {
      type: Object,
      required: true
    }
  },
  methods: {
    getPosterUrl() {
        const posterPath = this.info.poster_path;
            if (posterPath) {
                // URL base delle immagini di TMDB per le copertine dei film
                const basePosterUrl = 'https://image.tmdb.org/t/p/';
                // dimensione copertina
                const posterSize = 'w200';
                return `${basePosterUrl}${posterSize}${posterPath}`;
            } 
        },
    } 
}
//     getFlagUrl() {
//       const languageCode = this.info.original_language;
//       return `https://flagcdn.com/16x12/${languageCode}.png`;
//     },
//     handleError(event) {
//       console.error('Errore nel caricamento dell\'immagine:', event.target.src);
//       event.target.src = 'https://flagcdn.com/16x12/eu.png'; // Imposta un'immagine di fallback in caso di errore di caricamento
//     }
//   }

</script>

<template>
   <div class="single-movie">
    <!-- Caricamento condizionale dell'immagine della copertina -->
    <img :src="getPosterUrl()" alt="poster" class="poster" />
    <h3>{{ info.title }}</h3>
    <p><strong>Titolo originale:</strong><br>{{ info.original_title }}</p>
    <!-- <img :src="getFlagUrl()" @error="handleError" alt="flag" /> -->
    <p><strong>Voto:</strong> {{ info.vote_average }}</p>
    <p><strong>Trama:</strong><br>{{ info.overview }}</p>
  </div>
</template>

<style scoped lang="scss">
@use '../assets/style/general.scss' as*;
    h3, p{
        margin-bottom:5px ;
    }

    .poster {
    width: 200px; /* Dimensione della copertina */
    height: auto; /* Altezza automatica */
    margin-bottom: 10px;
    background-color: black; /* Colore di sfondo nero */
  }

</style>