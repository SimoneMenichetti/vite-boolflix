
import { reactive } from 'vue'


export const store = reactive({
    // array vuoto popolato al momento della chiamata Api
    appMovieDetailsList: [],
    apiBase: 'https://api.themoviedb.org/3',
    searchText: "",
});

