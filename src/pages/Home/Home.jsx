import React, { useEffect, useState } from "react"; // step 70 create a new component called Trending.jsx under home folder
import Trending from "./Trending";
import Recommended from "./Recommended";
import { useFetch } from "../../hooks/useFetch"; // step 96 pasted from trending
import { useSearchParams } from "react-router-dom";
import SearchResult from "./SearchResult";
import { useCustomParams } from "../../hooks/useCustomParams";
import Loading from "../../utils/Loading";

const Home = () => {
  // const [searchParams, setSearchParams] = useSearchParams(); // step 140

  const { data, error, loading, updateUI } = useFetch("/api/movie"); // step 95 pasted from trending
  const { userInput, filteredMovies } = useCustomParams(data); // step 200 after the hook useCustomParams

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p>{error}</p>;
  }
  

  // const [filteredMovies, setFilteredMovies] = useState([]); // step 145

  // const userInput = searchParams.get("search")
  //   ? searchParams.get("search")
  //   : ""; // step 142 create a new file in home called searchresult

  // useEffect(() => {
  //   console.log(searchParams.get("search"));

  //   if (data) {
  //     // step 146
  //     const searchedMovies = data.filter((movie) => {
  //       return movie.title.toLowerCase().includes(userInput.toLowerCase());
  //     });
  //     setFilteredMovies(searchedMovies);
  //   }
  // }, [searchParams]); // step 141

  if (userInput) {
    return <SearchResult userInput={userInput} filteredMovies={filteredMovies}/>;
  } // step 144

  return (
    <div className="px-4">
      <div className="text-start py-3">
        <h2 className="py-2">Trending</h2>{" "}
        {/*step 87 for styling then go to home.css then moviecarosel*/}
        <Trending
          data={data}
          error={error}
          loading={loading}
          updateUI={updateUI} // step 114 then go to trending
        />{" "}
        {/*step 97 then go to trending */}
      </div>

      <div className="text-start">
        <h2 className="py-2">Recommended For You</h2>
        <Recommended data={data} error={error} loading={loading} updateUI={updateUI} />{" "}
        {/*step 99 then go to trending */}
      </div>
    </div>
  );
};

export default Home;
