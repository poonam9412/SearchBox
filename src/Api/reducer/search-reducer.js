
export const initialState = {
    loading: false,
    searchResult: [],
    errorMessage: null,
    searchHistory: []
  };
 export const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SEARCH_MOVIES_SUCCESS":
        return {
            ...state,
            searchResult: action.payload.results,
            totalCount: action.payload.total,
            loading: false
        }
        case "SEARCH_MOVIES_FAILURE":
        return {
            ...state,
            searchResult: [],
            error: action.payload,
            loading: false
        }
        case "SEARCH_HISTORY":
            const recentSearchHistory =  [...state.searchHistory].filter((item) => item !== action.payload)
            recentSearchHistory.unshift(action.payload)
                if (recentSearchHistory.length > 5)
                recentSearchHistory.splice(5);
            // localStorage.setItem('searchHistory', JSON.stringify(recentSearchHistory))
        return {
            ...state,
            searchHistory: recentSearchHistory,
            loading: true
        }
        default:
            return {...state}
    }
}