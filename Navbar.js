import React, { useState } from "react";
import logo from "../Images/loginbg.jpg";
import user from "../Images/user.png";
import search from "../Images/search.png";
import home from "../Images/home.png";

import movie from "../Images/movie.png";
import tv from "../Images/tv.png";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

function Navbar({ setmenu, setsearch, searchs }) {
  const [touch, settouch] = useState(false);
  return (
    <div className="z-20  fixed grid grid-cols-2 bg-black h-full w-28">
      <div
        onMouseEnter={() => settouch(true)}
        onMouseLeave={() => settouch(false)}
      >
        <img src={logo} className="w-28 ml-5 mt-5" />
        <Link to="/login">
          <img src={user} className="w-5 ml-9  mt-8 cursor-pointer" />
        </Link>
        <img
          onClick={() => setsearch(!searchs)}
          src={search}
          className="w-10 ml-7 mt-8 cursor-pointer "
        />
        <img
          src={home}
          onClick={() => {
            setsearch(false);
            setmenu("home");
          }}
          className="w-12 ml-7 mt-8 cursor-pointer"
        />

        <img
          src={movie}
          onClick={() => {
            setsearch(false);
            setmenu("movie");
          }}
          className="w-22 mt-8 ml-5 cursor-pointer"
        />
        <img
          src={tv}
          onClick={() => {
            setsearch(false);
            setmenu("tv");
          }}
          className="w-22 mt-8 ml-5 cursor-pointer"
        />
      </div>
      {touch && (
        <Fade>
          {" "}
          (
          <div className=" bg-opacity-60 text-white z-20 ml-8 w-20 bg-black font-bold text-base text-slide-300">
            <h4 className="mt-20">Signin</h4>

            <h4 className="pt-8">Search</h4>
            <h4 className="mt-14">Home</h4>

            <h4 className="mt-12">movie</h4>
            <h4 className="mt-9">tv</h4>
          </div>
          )
        </Fade>
      )}
    </div>
  );
}

export default Navbar;
