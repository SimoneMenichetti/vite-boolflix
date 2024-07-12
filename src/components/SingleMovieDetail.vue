<script>

export default{
    name:"SingleMovieDetail",
    props:['info'],
    
    // utilizzo proprieta computed per trasformare la stringa delle flag in img
    computed: {
        flagUrl() {
        const languageCode = this.info.original_language;
        return `https://flagcdn.com/16x12/${languageCode}.png`;
        }
    },
// metodo  caso di fallback utilizzare un path src alternativo univoco
    methods: {
        handleError(event) {
        console.log('Error loading flag for:', this.info.original_language);  
        
        event.target.src = "https://flagcdn.com/16x12/gb-eng.png"; 
        }
    },
}
</script>

<template>
    <div class="single-movie">
        <h3>{{ info.title }}</h3>
        <p><strong>Original Title:</strong><br>{{ info.original_title }}</p>
        <!-- aggancio @error per popolare con il path alternativo  -->
        <img :src="flagUrl"  @error="handleError" alt="flag" />
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