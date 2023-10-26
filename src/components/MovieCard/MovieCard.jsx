// step 101 and go back recommended
import React from "react";
import { BiBookmark, BiSolidBookmark } from "react-icons/bi"; // step 105

import { RiFilmFill } from "react-icons/ri";
import { PiTelevisionFill } from "react-icons/pi";

import "./MovieCard.css"; // step 108 then go to css
import useAuth from "../../hooks/useAuth";

const MovieCard = ({ movie, updateUI }) => {
  const { user, token } = useAuth();

  const { _id, image, title, year, type, rated, bookmarkedBy } = movie; // step 104

  const bookmarkIcon = bookmarkedBy.includes(user?.id) ? (
    <BiSolidBookmark
      onClick={() => {
        updateUI("remove", _id, token, user?.id);
      }}
      className="icon position-absolute top-0 end-0 fs-3 me-3 mt-3"
    />
  ) : (
    <BiBookmark
      onClick={() => {
        updateUI("add", _id, token, user?.id); // step 119 add id and token then go to rootlayout
      }} // step 117 then go to usefetch
      className="icon position-absolute top-0 end-0 fs-3 me-3 mt-3"
    />
  ); // step 106

  return (
    <div key={_id} className="position-relative movie_card">
      <img className="rounded-2" src={image} alt="" />
      {bookmarkIcon} {/*step 107 */}
      <div className="d-flex gap-2 align-items-center mt-3">
        <p className="m-0">{year}</p>
        <span className="d-flex align-items-center gap-1">
          {type === "movie" ? <RiFilmFill /> : <PiTelevisionFill />}
          <p className="m-0">{type === "movie" ? "Movie" : "TV Series"}</p>
        </span>
        <p className="m-0">{rated}</p>
      </div>
      <p className="fw-semibold fs-4">{title}</p>
    </div> // step 103 cut and pasted from recommended
  );
};

export default MovieCard;
