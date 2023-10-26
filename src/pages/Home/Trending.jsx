import React from "react"; //step 71 create another file in home go to sidebar in components for 73
import { useFetch } from "../../hooks/useFetch"; // cut and paste in home.jsx step 96
import MovieCarosel from "./MovieCarosel";

const Trending = ({ data, error, loading, updateUI }) => {
  // step 98
  // step 81 then create a new file in home folder and call it movie carosel
  // const { data, error, loading } = useFetch("/api/movie"); step 95 cut this out and past on home.jsx

  // console.log(data);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  } // step 100 copy this logic and paste in recommended.jsx

  return (
    <div>
      <MovieCarosel data={data} updateUI={updateUI} />{" "}
      {/*step 83 then go back to moviecaro ...//step 115 to destructure and include updateUI then go to movie caro*/}
    </div>
  );
};

export default Trending;
