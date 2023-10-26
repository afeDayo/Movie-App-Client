import React from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
// step 143

const SearchResult = ({ userInput, filteredMovies }) => {
  return (
    <div className="px-4 text-start">
      <h2 className="pb-2">
        Found {filteredMovies.length} results for '{userInput}'{" "}
      </h2>

      <div className="grid gap-3">
        {filteredMovies.map((movie) => {
          return <MovieCard key={movie._id} movie={movie} />;
        })}
      </div>
    </div> // step 147
  );
};

export default SearchResult;
