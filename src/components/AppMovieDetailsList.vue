<script>
// Importazione del componente SingleMovieDetail
import SingleMovieDetail from './SingleMovieDetail.vue';
// Importazione dello store
import { store } from '../store';

export default {
  name: 'AppMovieDetailslist',
  components: {
    SingleMovieDetail,
  },
  data() {
    return {
      store,
    };
  },
  computed: {
    // Filtra i film dalla lista
    movies() {
      return this.store.appMovieDetailsList.filter(item => item.type === 'movie');
    },
    // Filtra le serie TV dalla lista
    tvShows() {
      return this.store.appMovieDetailsList.filter(item => item.type === 'tv');
    },
  },
};
</script>

<template>
  <div class="container">
    <!-- Sezione Film -->
    <section v-if="movies.length > 0">
      <h2>FILMS</h2>
      <div class="movie-container">
        <div class="movie-details" v-for="movie in movies" :key="movie.id">
          <SingleMovieDetail :info="movie" />
        </div>
      </div>
    </section>

    <!-- Sezione Serie TV -->
    <section v-if="tvShows.length > 0">
      <h2>TV SERIES</h2>
      <div class="tv-show-container">
        <div class="movie-details" v-for="show in tvShows" :key="show.id">
          <SingleMovieDetail :info="show" />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
@use '../assets/style/general.scss' as *;

.movie-container,
.tv-show-container {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  margin-bottom: 20px;
}

.movie-details {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 14px;
  background-color: #151515;
  width: 200px;
  height: 400px;
}
</style>
