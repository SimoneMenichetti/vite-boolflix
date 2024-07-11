<script>
// importiamo il componente SingleMovie
import SingleMovieDetail from './SingleMovieDetail.vue';

import {store} from '../store';

export default{
    name:'AppMovieDetailslist',
    components:{
        SingleMovieDetail,
    },
    data(){
        return{
        store,
        }
    }

}
</script>

<template>
    <div class="container">
        <div class="movie-details" v-for="movie in store.appMovieDetailsList" :key="movie.id">
            <SingleMovieDetail :info="movie"/>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../assets/style/general.scss'as*;
.movie-details {
    box-sizing: border-box;
    padding: 16px;
    border: 1px solid #ccc;
    text-align: center;
    background-color: #f9f9f9;
    

    .movie-details h3 {
        margin-top: 0;
    }

}

</style>