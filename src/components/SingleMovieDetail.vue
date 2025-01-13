<script>
export default {
  name: "SingleMovieDetail",
  props: {
    info: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isHovering: false,
    };
  },
  computed: {
    flipCardTransform() {
      return this.isHovering ? "rotateY(180deg)" : "rotateY(0deg)";
    },
  },
  methods: {
    // Metodo per ottenere l'URL del poster
    getPosterUrl() {
      const posterPath = this.info.poster_path;
      if (posterPath) {
        const basePosterUrl = "https://image.tmdb.org/t/p/";
        const posterSize = "w200";
        return `${basePosterUrl}${posterSize}${posterPath}`;
      }
      return "/public/img/immagine-non-disponibile-510x510.png"; // Immagine di default
    },
    // Metodo per ottenere la classe della bandiera in base alla lingua
    getFlagClass(language) {
      const languageToFlag = {
        en: "us",
        fr: "fr",
        es: "es",
        ja: "jp",
        zh: "cn",
        ko: "kr",
        id: "id",
        hi: "in",
      };
      const flagCode = languageToFlag[language] || language;
      return `flag-icon flag-icon-${flagCode}`;
    },
    // Metodo per calcolare il numero di stelle del voto
    getRatingStars() {
      const rating = Math.max(Math.round(this.info.vote_average / 2), 1);
      return rating;
    },
  },
};
</script>

<template>
  <div 
    class="single-movie" 
    @mouseenter="isHovering = true" 
    @mouseleave="isHovering = false"
  >
    <div class="flip-card">
      <div class="flip-card-inner" :style="{ transform: flipCardTransform }">
        <!-- Fronte del poster -->
        <div class="flip-card-front">
          <img :src="getPosterUrl()" alt="poster" class="poster" />
        </div>
        <!-- Retro del poster con i dettagli -->
        <div class="flip-card-back">
          <div class="back-content">
            <h3><strong>Titolo:</strong><br />{{ info.title || "Non disponibile" }}</h3>
            <p><strong>Titolo originale:</strong><br />{{ info.original_title || "Non disponibile" }}</p>
            <i :class="getFlagClass(info.original_language)" class="flag-icon"></i>
            <div class="star-container">
              <span 
                v-for="star in getRatingStars()" 
                :key="star" 
                class="star"
              >★</span>
            </div>
            <p><strong>Trama:</strong><br />{{ info.overview || "Non disponibile" }}</p>
            <p><strong>Generi:</strong><br />{{ info.genres || "Non disponibile" }}</p>
            <p><strong>Cast:</strong><br />{{ info.cast.join(", ") || "Non disponibile" }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "../assets/style/general.scss" as *;

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
  background-color: black;
}

.flip-card-back {
  transform: rotateY(180deg);
  color: #fff;
  padding: 16px;
  box-sizing: border-box;
  text-align: center;
  overflow-y: auto;
}

.poster {
  width: 100%;
  height: 100%;
  object-fit: cover;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.star {
  color: gold;
  font-size: 16px;
}

.back-content {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  overflow-y: auto;
  padding: 10px;
  text-align: center;

  h3, p, i, .star-container {
    margin: 10px 0;
  }

  strong {
    color: #de020c;
  }
}

.flag-icon {
  font-size: 24px;
}
</style>
