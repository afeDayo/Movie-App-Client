import React, { useState } from "react"; // step 200
import { useFetch } from "../../hooks/useFetch";
import MovieCard from "../../components/MovieCard/MovieCard";
import { useCustomParams } from "../../hooks/useCustomParams";
import Loading from "../../utils/Loading";

const Movies = () => {
  const { data, error, loading, updateUI } = useFetch("/api/movie/movies");
  const { userInput, filteredMovies } = useCustomParams(data);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (userInput) {
    return (
      <SearchResult userInput={userInput} filteredMovies={filteredMovies} />
    );
  }

  return (
    <div className="grid gap-3 mx-4 text-start">
      {data.map((movie) => {
        return <MovieCard key={movie._id} movie={movie} updateUI={updateUI} />;
      })}
    </div>
  );
};

export default Movies;
