<script>
// importiamo il componente SingleMovie
import SingleMovieDetail from './SingleMovieDetail.vue';

export default{
    name:'AppMovieDetailslist',
    components:{
        SingleMovieDetail,
    }
}
</script>

<template>
     <div class="container">
        <SingleMovieDetail/>
    </div>
</template>

<style scoped lang="scss">
@use '../assets/style/general.scss'as*;
</style>