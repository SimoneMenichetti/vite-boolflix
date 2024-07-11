<script>
export default{
    name:'AppMovieDetailslist'
}
</script>

<template>
     <div class="container">
        <div class="movie-details">
            <h3>Movie Title 1</h3>
            <p><strong>Original Title:</strong> Original Title 1</p>
            <p><strong>Language:</strong> English</p>
            <p><strong>Rating:</strong></p>
            <p><strong>Trame:</strong></p>
        </div>
        <div class="movie-details">
            <h3>Movie Title 2</h3>
            <p><strong>Original Title:</strong> Original Title 2</p>
            <p><strong>Language:</strong> Spanish</p>
            <p><strong>Rating:</strong></p>
            <p><strong>Trame:</strong></p>
        </div>
        <div class="movie-details">
            <h3>Movie Title 3</h3>
            <p><strong>Original Title:</strong> Original Title 3</p>
            <p><strong>Language:</strong> French</p>
            <p><strong>Rating:</strong></p>
            <p><strong>Trame:</strong></p>
        </div>
        <div class="movie-details">
            <h3>Movie Title 4</h3>
            <p><strong>Original Title:</strong> Original Title 4</p>
            <p><strong>Language:</strong> Italian</p>
            <p><strong>Rating:</strong></p>
            <p><strong>Trame:</strong></p>
        </div>
       <!-- qui aggiunta card dei film / serie -->
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