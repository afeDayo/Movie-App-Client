import React, { useEffect, useState } from "react";

import { useLocation, useSearchParams } from "react-router-dom";

// step 133
import { BiSearch } from "react-icons/bi";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [userInput, setUserInput] = useState();

  const [placeholder, setPlaceholder] = useState("/");

  const location = useLocation();

  useEffect(() => {
    setUserInput(searchParams.get("search"));
  }, [searchParams]); //200

  useEffect(() => {
    // console.log(location.pathname);
    if (location.pathname === "/") {
      setPlaceholder("Search for movies or TV series");
    } else if (location.pathname === "/movies") {
      setPlaceholder("Search for movies");
    } else if (location.pathname === "/tvseries") {
      setPlaceholder("Search for TV series");
    } else if (location.pathname === "/bookmark") {
      setPlaceholder("Search for bookmarked shows");
    }
  }, [location]); //200

  return (
    <div className="position-relative my-3 mx-4">
      <BiSearch className="position-absolute top-0 bottom-0 my-auto text-white fs-1" />
      <input
        onChange={(event) => {
          // setUserInput(event.target.value);
          setSearchParams({ search: event.target.value });
        }}
        value={userInput ? userInput : ""}
        type="text"
        className="w-100 py-2 rounded-2 custom-bg-dark-grey border-0 ps-5 fw-semibold fs-5"
        placeholder={placeholder}
      />
    </div>
  );
};

export default Search;
