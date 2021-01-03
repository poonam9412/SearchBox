import React, { useState } from 'react'
import './App.css';
import SearchView from './Component/SearchView'
import SearchViewResult from './Component/SearchResultView'
import { connect } from "react-redux";

import {searchAction} from './Api/action/action'


function App(props) {
  const [showResultView, setShowResultView] = useState(false)
  const [searchInput, setSearchInput] = useState("")
  
  const search = (searchValue, category) => {
    setSearchInput(searchValue)
    props.searchAction(searchValue, category);
    setShowResultView(true)
  };
  
  return (
    <div className="App">
      <SearchView
        search={search}
        searchHistory={props.searchHistory}
        />
      {props.loading ? <h2><em>Loading....</em></h2> :
      <SearchViewResult
        movies={props.searchResult}
        totalCount={props.totalCount}
        showResultView={showResultView}
        error={props.error}
        searchInput={searchInput}
      />}
    </div>
  );
}

function mapStatetoProps(state) {
  const {searchResult, totalCount, searchHistory, loading, error} = state.searchResult
  return {
    searchResult,
    totalCount,
    searchHistory,
    loading,
    error
  }
}

function mapDispatchToProps(dispatch) {
  return {
      searchAction: (search, category) => dispatch(searchAction(search, category))}
}
export default connect(mapStatetoProps, mapDispatchToProps)(App);
