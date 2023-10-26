import React, { useEffect, useState } from "react";
import { MdMovie, MdSpaceDashboard } from "react-icons/md";
import { RiFilmFill } from "react-icons/ri";
import { PiTelevisionFill } from "react-icons/pi";
import { BsFillBookmarkFill } from "react-icons/bs";
import logo from "../../assets/react.svg";
import { Link, useLocation } from "react-router-dom";

import "./SideBar.css";
import DropDown from "./DropDown";

const SideBar = () => {
  const [selected, setSelected] = useState("/");
  const location = useLocation();

  const [toggleDropdown, setToggleDropdown] = useState(true); // step 203

  useEffect(() => {
    // console.log(location.pathname);
    if (location.pathname === "/") {
      setSelected("/");
    } else if (location.pathname === "/movies") {
      setSelected("/movies");
    } else if (location.pathname === "/tvseries") {
      setSelected("/tvseries");
    } else if (location.pathname === "/bookmark") {
      setSelected("/bookmark");
    }
  }, [location]);

  return (
    <div className="sidebar d-flex flex-xl-column justify-content-between justify-content-xl-start gap-xl-5 px-4 py-4 custom-bg-light-grey mx-md-4">
      {" "}
      {/*step 73 for the custom bg light, mx sm 4  and sidebar then go to rootlayout*/}
      <Link to="/">
        <MdMovie className="fs-1 custom-text-red" />
      </Link>
      <div className="d-flex flex-xl-column gap-3 gap-md-4">
        {" "}
        {/*step 75 for gap md  then create a css file for sidebar*/}
        <Link to="/">
          <MdSpaceDashboard
            className={`fs-3 ${
              selected === "/" ? "text-white" : "text-secondary"
            }`}
          />
        </Link>
        <Link to="/movies">
          <RiFilmFill
            className={`fs-3 ${
              selected === "/movies" ? "text-white" : "text-secondary"
            }`}
          />
        </Link>
        <Link to="/tvseries">
          <PiTelevisionFill
            className={`fs-3 ${
              selected === "/tvseries" ? "text-white" : "text-secondary"
            }`}
          />
        </Link>
        <Link to="/bookmark">
          <BsFillBookmarkFill
            className={`fs-3 ${
              selected === "/bookmark" ? "text-white" : "text-secondary"
            }`}
          />
        </Link>
      </div>
      <div className="mt-xl-auto position-relative">
        <img
          onClick={() => {
            setToggleDropdown(!toggleDropdown);
          }}
          src={logo}
          alt="react logo"
        />
        {toggleDropdown ? <DropDown /> : null} {/*step 203 */}
      </div>
    </div>
  );
};

export default SideBar;
