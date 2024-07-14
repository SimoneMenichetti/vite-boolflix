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
            <h2>Films</h2>
            <div class="movie-container">
                <div class="movie-details" v-for="movie in movies" :key="movie.id">
                    <SingleMovieDetail :info="movie" />
                </div>
            </div>
        </div>

        <!-- Sezione Serie TV -->
        <div v-if="tvShows.length > 0">
            <h2>TV Series</h2>
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
.movie-details {
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    padding: 16px;
    border: 1px solid #ccc;
    text-align: center;
    font-size: 10px;
    background-color: #f9f9f9;
    

    .movie-details h3 {
        margin-top: 0;
    }

}

</style>