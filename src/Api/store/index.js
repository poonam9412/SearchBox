import { combineReducers } from 'redux'
import {searchReducer} from '../reducer/search-reducer'
export default combineReducers({
    searchResult: searchReducer
})