import axios from 'axios'

export const searchAction = (searchValue, contentType) => dispatch => {
console.log(searchValue)
dispatch({
    type: "SEARCH_HISTORY",
    payload: searchValue
  });
    axios(`https://www.marvel.com/v1/pagination/search_cards?limit=20000&query=${searchValue}&offset=0&content_type=${contentType}`).then(
      jsonResponse => {
        if (jsonResponse.data) {
          dispatch({
            type: "SEARCH_MOVIES_SUCCESS",
            payload: jsonResponse.data.data || {}
          });
        }
    }
    )
    .catch(err =>  dispatch({
        type: "SEARCH_MOVIES_FAILURE",
        payload: "Something went wrong"
    })
    )
  };