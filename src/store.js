
import { reactive } from 'vue'


export const store = reactive({
    // array vuoto popolato al momento della chiamata Api
    appMovieDetailsList: [],
    apiBase: 'api_key=2151d1163db8f79c65ffd8f6a53575be',
    searchText: "",
});

