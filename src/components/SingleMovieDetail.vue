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
    // metodo per mostrare dopo la chiamata i poster relativi alla ricerca
    getPosterUrl() {
      const posterPath = this.info.poster_path;
      if (posterPath) {
        const basePosterUrl = 'https://image.tmdb.org/t/p/';
        const posterSize = 'w200';
        return `${basePosterUrl}${posterSize}${posterPath}`;
      } else {
        // Se non c'è un poster disponibile, restituisci un'immagine di default
        return '/public/img/fotonondisponibile.jpg'; 
      }
    },
    // metodo per mostrare dopo la chiamata le flag relative alla ricerca per le lingue
    getFlagClass(language) {
      // mappatura personalizzata per le flag non visualizzabili 
      const languageToFlag = {
        en: 'us', 
        fr: 'fr',
        es: 'es',
        ja: 'jp',
        zh: 'cn',
        ko: 'kr',
        id: 'id',
        hi: 'in',
       
      };
      const flagCode = languageToFlag[language] || language;
      return `flag-icon flag-icon-${flagCode}`;
    },
    // metodo per trasformare le votazioni in img delle stelline per i voti 
    getRatingStars() {
      const rating = Math.ceil(this.info.vote_average);

      // Logica per determinare il numero di stelle in base al punteggio
      if (rating >= 8 && rating <= 10) {
        return 5; // Da 8 a 10 stelle
      } else if (rating >= 6 && rating < 8) {
        return 4; // Da 6 a 7.9 stelle
      } else if (rating >= 3 && rating < 6) {
        return 3; // Da 3 a 5.9 stelle
      } else if (rating >= 1 && rating < 3) {
        return 2; // Da 1 a 2.9 stelle
      } else {
        return 0; // Nessuna stella se il punteggio è fuori dai range desiderati
      }
    }
  },
}



</script>

<template>
  <div class="single-movie">
    <!-- Caricamento condizionale dell'immagine della copertina -->
    <img :src="getPosterUrl()" alt="poster" class="poster" />
    <h3>{{ info.title }}</h3>
    <p><strong>Titolo originale:</strong><br>{{ info.original_title }}</p>
    <i :class="getFlagClass(info.original_language)" class="flag-icon"></i>
    <div class="star-container">
      <span v-for="star in getRatingStars()" :key="star" class="star">★</span>
    </div>
    <p><strong>Trama:</strong><br>{{ info.overview }}</p>
  </div>
</template>

<style scoped lang="scss">
@use '../assets/style/general.scss' as*;
    h3, p{
        margin-bottom:5px ;
    }

    .poster {
    width: 200px;
    height: auto; 
    margin-bottom: 10px;
    background-color: black; 
  }
  // sezione star vote

  .star {
    color: gold; 
    font-size: 16px; 
  }

  .star.filled {
    color: gold;
  }
</style>