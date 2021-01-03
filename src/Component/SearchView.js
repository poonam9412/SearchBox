import React, { useState } from "react";
import SearchHistory from './SearchHistory'
import './search.css'
const Search = ({ search, searchHistory }) => {
  const [searchValue, setSearchValue] = useState("");
  const [disableButton, setDisableButton] = useState(false)
  const [showSearchHistory, setSearchHistory] = useState(false);
  const [category, setCategory] = useState('movie')

  const handleSearchInputChanges = (searchValue, e) => {
    setSearchValue(searchValue || e.target.value);
    setSearchHistory(true);
    setDisableButton(true);
  };

  const resetInputField = () => {
    setSearchValue("");
    setSearchHistory(false);
    setDisableButton(false);
  };

  const callSearchFunction = e => {
    e.preventDefault();
    search(searchValue, category);
    resetInputField();
  };

  const selectCategory = (e) => {
    setCategory(e.target.value)
  } 

  return (
      <div>
          
    <form className="search">
      <input
        value={searchValue}
        placeholder='Search...'
        onChange={(e) => handleSearchInputChanges(undefined, e)}
        type="text"
      />

      <button onClick={callSearchFunction} disabled={!disableButton}>SEARCH</button>
    </form>
    <div className='searchBox'>
       {showSearchHistory && <SearchHistory searchHistory={searchHistory} selectItem={handleSearchInputChanges}/>}
       </div>
    <div>
    <label htmlFor="category">Choose a category: </label>
    <select name="category" id="category" onClick={selectCategory}>
            <option value="movie">Movie</option>
            <option value="series">Series</option>
            <option value="Character">Character</option>
    </select>
    </div>
    </div>
  );
};

export default Search;
