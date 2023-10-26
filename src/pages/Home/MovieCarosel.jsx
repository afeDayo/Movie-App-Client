import React from "react"; //step 82 go to trending

import { RiFilmFill } from "react-icons/ri";
import { PiTelevisionFill } from "react-icons/pi"; // step 88 for both icons

import { BiBookmark, BiSolidBookmark } from "react-icons/bi";

import useAuth from "../../hooks/useAuth";

import "./Home.css"; // step 86 then go to home.jsx

const MovieCarosel = ({ data, updateUI }) => {
  // step 116 destructure updateUI
  //step 84 then create a new file for home folder called home.css
  // step 94 for the bookmark icon logics then go to trending
  // step 110 for logic
  const { user, token } = useAuth(); //step 111 user is from authcontext
  // const bookmarkIcon = false ? (
  //   <BiSolidBookmark className="position-absolute top-0 end-0 fs-3 me-3 mt-3" />
  // ) : (
  //   <BiBookmark className="position-absolute top-0 end-0 fs-3 me-3 mt-3" />
  // ); cut and paste this into data.map

  return (
    <div className="carousel">
      <div className="inner_carousel d-flex gap-3">
        {data.map((movie) => {
          const { _id, title, year, type, rated, image, bookmarkedBy } = movie;
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
          ); // step 112
          
          return (
            <div key={_id} className="carousel_item position-relative">
              {/*step 92*/}
              <img className="rounded-2" src={image} alt="" />
              {bookmarkIcon}
              <div className="position-absolute bottom-0 start-0 ps-2 pb-2">
                {/*step 91*/}
                <div className="d-flex align-items-center gap-2">
                  {" "}
                  {/*step 93*/}
                  <p className="m-0">{year}</p>
                  <span className="d-flex align-items-center gap-1">
                    {" "}
                    {type === "movie" ? <RiFilmFill /> : <PiTelevisionFill />}
                    {/*step 89 */}
                    <p className="m-0">
                      {type === "movie" ? "Movie" : "TV Series"}
                    </p>{" "}
                    {/*step 90*/}
                  </span>
                  <p className="m-0">{rated}</p>
                </div>
                <p className="m-0 fw-semibold fs-6">{title}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MovieCarosel;
