
import { reactive } from 'vue'
import AppMovieDetailsList from './components/AppMovieDetailsList.vue';

export const store = reactive({
    // array vuoto popolato al momento della chiamata Api
    AppMovieDetailsList: [],
    apiURL: 'https://api.themoviedb.org/3/movie/550?api_key=2151d1163db8f79c65ffd8f6a53575be',
    searchQuery: '',
});

