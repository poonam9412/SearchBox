import React from 'react';
import './search.css'

const SearchHistory = (props) => {
    const searchHistory = props.searchHistory.map((history, index) => {
        return (
            <div key={index} className="clickableItem" onClick={() => props.selectItem(history)}>{history}</div>
        )
    })
    return (
        <div className="suggestions">
            <h2>Recent searches</h2>
            {props.searchHistory.length > 0 ? searchHistory : <em>No Recent searches</em>}
            </div>
    )
}

export default SearchHistory