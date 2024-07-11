<script>

export default{
    name:"SingleMovieDetail",
    props:['info'],
}
</script>

<template>
    <div class="single-movie">
        <h3>{{ info.title }}</h3>
        <p><strong>Original Title:</strong><br>{{ info.original_title }}</p>
        <p><strong>Language:</strong> {{info.original_language}}</p>
        <p><strong>Rating:</strong>{{ info.vote_average }}</p>
        <p><strong>Trame:</strong><br>{{ info.overview }}</p>
    </div>
</template>

<style scoped lang="scss">
@use '../assets/style/general.scss' as*;
    h3, p{
        margin-bottom:5px ;
    }

</style>