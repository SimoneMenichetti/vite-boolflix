<script>
// import store
import {store} from '../store';

export default {
    name: "AppHeader",
    props:["title"],
    data() {
        return {
            store,
        };
    },
    methods: {
    // Metodo per gestire la ricerca sia con il pulsante che con "Invio"
    handleSearch() {
      this.$emit('search'); 
    },
    // Metodo per gestire la pressione del tasto "Invio" nella tastiera
    handleKeyPress(event) {
      if (event.key === 'Enter') {
        this.handleSearch(); 
      }
    },
  },
}
</script>
<template>
    <header class="header">
        <div class="logo">
            <h1>{{ title }}</h1>
        </div>
        <!-- sezione input barra di ricerca e button -->
        <div class="search-bar">
            <!-- searchbar -->
            <input type="text"v-model="store.searchText"placeholder="Search for a movie" @keypress.enter.prevent="handleKeyPress"/>
            <!-- bottone di ricerca aggangiato event al click-->
            <button @click.prevent="$emit('search')">
                Search
            </button>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@use'../assets/style/general.scss' as*;

// regole sezione HEADER
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: black;
  color:#DE020C;
    // REGOLE LOGO/TEXT
    .logo {
        display: flex;
        align-items: center;
        span{
            font-size: 24px;
        }
    }
    // SEZIONE INPUT SEARCHBAR & BUTTON
    .search-bar {
        display: flex;
        align-items: center;
    }
    .search-bar input {
        padding: 5px;
        margin-right: 10px;
        border: 1px solid #DE020C;
        border-radius: 4px;
        background-color:#fff;
        color:#464646;
    }
    .search-bar button {
        color: white;
        padding: 5px 10px;
        background-color:  #DE020C;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }
    .search-bar button:hover {
        background-color:  #464646;
        color: #fff;
    }

    h1 {
        color: #E50914; 
        text-align: center;
        position: relative;
        /* Animazione di tipo onda */
        animation: wave 2s infinite linear;
  }

  /* Chiave dell'animazione per creare l'effetto onda */
  @keyframes wave {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0);
    }
  }
}
</style>