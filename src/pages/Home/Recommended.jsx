import React from "react"; // step 72
import MovieCard from "../../components/MovieCard/MovieCard";

// step 100
const Recommended = ({ data, error, loading }) => {
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="grid gap-3">
      {" "}
      {/*step 108 after css */}
      {data.map((movie) => {
        return (
          <MovieCard key={movie._id} movie={movie} /> // step 102
        );
      })}
    </div> // then go to component and create a new folder and file called moviecard... click on new file and moviecard/moviecard.jsx to create a folder and corresponding file
  );
};

export default Recommended;
