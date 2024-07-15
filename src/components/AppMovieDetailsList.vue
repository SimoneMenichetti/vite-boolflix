<script>
// importiamo il componente SingleMovie
import SingleMovieDetail from './SingleMovieDetail.vue';

import {store} from '../store';

export default{
    name:'AppMovieDetailslist',
    components:{
        SingleMovieDetail,
    },
    data() {
    return {
      store,
    };
  },
  computed: {
    movies() {
      return this.store.appMovieDetailsList.filter(item => item.type === 'movie');
    },
    tvShows() {
      return this.store.appMovieDetailsList.filter(item => item.type === 'tv');
    },
  },

}
</script>

<template>
   <div class="container">
        <!-- Sezione Film -->
        <div v-if="movies.length > 0">
            <h2>FILMS</h2>
            <div class="movie-container">
                <div class="movie-details" v-for="movie in movies" :key="movie.id">
                    <SingleMovieDetail :info="movie" />
                </div>
            </div>
        </div>

        <!-- Sezione Serie TV -->
        <div v-if="tvShows.length > 0">
            <h2>TV SERIES</h2>
            <div class="tv-show-container">
                <div class="movie-details" v-for="show in tvShows" :key="show.id">
                    <SingleMovieDetail :info="show" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../assets/style/general.scss'as*;

.movie-container, .tv-show-container {
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
  background-color: black;
  width: 200px;
  height: 400px;
    

    .movie-details h3 {
        margin-top: 0;
    }

}

</style>