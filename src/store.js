
import { reactive } from 'vue'


export const store = reactive({
    // array vuoto popolato al momento della chiamata Api
    appMovieDetailsList: [],
    apiURL: 'https://api.themoviedb.org/3/search/movie?api_key=2151d1163db8f79c65ffd8f6a53575be&language=it_IT&query=ritorno',
    searchText: "",
});

