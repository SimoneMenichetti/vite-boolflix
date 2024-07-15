<script>



export default {
  name: "SingleMovieDetail",
  props: {
    info: {
      type: Object,
      required: true
      
    }
  },

  data() {
    return {
      isHovering: false
    };
  },
  computed: {
    flipCardTransform() {
      return this.isHovering ? 'rotateY(180deg)' : 'rotateY(0deg)';
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
        return '/public/img/fotonondisponibile.jpg'; // Immagine di default se non c'è il poster
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
        return 4; // Da 6 a 8 stelle
      } else if (rating >= 3 && rating < 6) {
        return 3; // Da 3 a 6 stelle
      } else if (rating >= 1 && rating < 3) {
        return 2; // Da 1 a 3 stelle
      } else {
        return 0; // Nessuna stella se il punteggio è fuori dai range desiderati
      }
    }
  },
}



</script>

<template>
 <div class="single-movie" @mouseenter="isHovering = true" @mouseleave="isHovering = false">
    <div class="flip-card">
      <!-- Fronte del poster -->
      <div class="flip-card-inner" :style="{ transform: flipCardTransform }">
        <div class="flip-card-front">
          <img :src="getPosterUrl()" alt="poster" class="poster" />
        </div>
        <!-- Retro del poster con i dettagli -->
        <div class="flip-card-back">
          <div class="back-content">
            <h3><strong>Titolo:</strong><br>{{ info.title  || 'Non disponibile'}}</h3>
            <p><strong>Titolo originale:</strong><br>{{ info.original_title || 'Non disponibile' }}</p>
            <i :class="getFlagClass(info.original_language)"  class="flag-icon"></i>
            <div class="star-container">
              <span v-for="star in getRatingStars()" :key="star" class="star">★</span>
            </div>
            <p><strong>Trama:</strong><br>{{ info.overview }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '../assets/style/general.scss' as *;

.single-movie {
  position: relative;
  width: 100%;
  height: 100%;
  perspective: 1000px;
}

.flip-card {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.5s;
}

.flip-card-inner {
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.5s;
  transform-style: preserve-3d;
}

.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  backface-visibility: hidden;
}

.flip-card-front {
  /* Fronte del poster */
}

.flip-card-back {
  /* Retro del poster con i dettagli */
  width: 100%;
  height: 100%;
  overflow-y: auto; 
  overflow-x: hidden;
  transform: rotateY(180deg);
  color: #fff;
  padding: 16px;
  box-sizing: border-box;
  text-align: center;
}

.poster {
  width: 100%;
  height: 100%;
  object-fit: cover;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

// sezione star

.star {
  color: gold;
  font-size: 16px;
}

// sezione text content

.back-content {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%; 
  overflow-y: auto;
  padding: 10px;
  text-align: center;
}

.back-content h3,
.back-content p,
.back-content i,
.back-content .star-container {
  margin: 10px 0; 
}

.flip-card-back strong {
  color: #DE020C;
}
// sezione flag

.flag-icon {
  font-size: 24px; 
}
</style>