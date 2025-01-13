<script>
// Importazione dello store
import { store } from '../store';

export default {
  name: "AppHeader",
  props: ["title"],
  data() {
    return {
      store,
    };
  },
  methods: {
    // Metodo per gestire la ricerca tramite pulsante o evento "Invio"
    handleSearch() {
      this.$emit('search');
    },
    // Metodo per gestire la pressione del tasto "Invio"
    handleKeyPress(event) {
      if (event.key === 'Enter') {
        this.handleSearch();
      }
    },
  },
};
</script>

<template>
  <header class="header">
    <!-- Logo e titolo -->
    <div class="logo">
      <h1>{{ title }}</h1>
    </div>
    
    <!-- Barra di ricerca -->
    <div class="search-bar">
      <input
        type="text"
        v-model="store.searchText"
        placeholder="Search for a movie"
        @keypress.enter.prevent="handleKeyPress"
      />
      <button @click.prevent="handleSearch">
        Search
      </button>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use '../assets/style/general.scss' as *;

// Stile per l'header
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: black;
  color: #de020c;

 /* Logo */
.logo {
    display: flex;
    align-items: center;
    justify-content: center;
}

/* Titolo animato */
.logo h1 {
    color: #e50914;
    text-align: center;
    position: relative;
    animation: wave 2s infinite linear; /* Animazione del titolo */
    font-size: 2rem; /* Dimensione di base del titolo */
}

  // Stile per la barra di ricerca
  .search-bar {
    display: flex;
    align-items: center;

    input {
      padding: 5px;
      margin-right: 10px;
      border: 1px solid #de020c;
      border-radius: 4px;
      background-color: #fff;
      color: #464646;
    }

    button {
      color: white;
      padding: 5px 10px;
      background-color: #de020c;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s;

      &:hover {
        background-color: #464646;
        color: #fff;
      }
    }
  }

  // Animazione del titolo (effetto onda)
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
