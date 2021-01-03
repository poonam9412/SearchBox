import React from "react";

const DEFAULT_PLACEHOLDER_IMAGE =
  "https://terrigen-cdn-dev.marvel.com/content/prod/1x/";

const SearchViewResult = (props) => {

const moviesList = (props.movies || []).map((movie, i) => {
    const movieReleaseYear = movie.release_year ? movie.release_year: 'NA'
    return (
        <div key={i}>
       <h2>{movie.headline}</h2>
       <div>
       <img
          width="200"
          alt={`The movie titled: ${movie.image.title}`}
          src={DEFAULT_PLACEHOLDER_IMAGE+movie.image.filename}
        />
       </div>
      <p>({movieReleaseYear})</p>
    </div>
    )
})

if (props.error) {
    return <h2><em>{props.error}</em></h2>
  }

return (
    props.showResultView ? <div>
        <h2>Total search result for "{props.searchInput}" ({props.totalCount})</h2>
    {(moviesList.length > 0 &&  moviesList) || <div> <em>No result found </em></div>}
    </div>: null
    
)
    
};

export default SearchViewResult;
