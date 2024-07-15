<script>

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
      this.$emit('search'); // Emetti l'evento 'search' verso il componente genitore
    },
    // Metodo per gestire la pressione del tasto "Invio" nella tastiera
    handleKeyPress(event) {
      if (event.key === 'Enter') {
        this.handleSearch(); // Richiama il metodo di ricerca quando viene premuto "Enter"
      }
    },
  },

}
</script>

<template>
    <header class="header">
        <div class="logo">
            <span>{{ title }}</span>
        </div>
        <!-- sezione input barra di ricerca e button -->
        <div class="search-bar">
            <!-- searchbar -->
            <input type="text"v-model="store.searchText"placeholder="Search for a movie" @keypress.enter="handleKeyPress"/>
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
}
</style>