import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Welcome from "./Welcome";
import Home from "./Home";
import BestInSport from "./BestInSport";
import Footer from "./Footer";

function Main() {
  const [movie, setmovie] = useState([]);
  const [menu, setmenu] = useState("");
  const [searchs, setsearch] = useState(false);

  const getMovies = async () => {
    try {
      const response = await fetch(
        menu === "home" || menu === ""
          ? `https://api.themoviedb.org/3/movie/upcoming?api_key=4981c5f377a7b8f416d17d8d8f7bd4d1`
          : `https://api.themoviedb.org/3/discover/${
              menu ? menu : "movie"
            }?api_key=4981c5f377a7b8f416d17d8d8f7bd4d1`
      );
      const json = await response.json();
      console.log(json);
      setmovie(json.results); // Assuming the movies are in the 'results' key
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getMovies();
  }, [menu]);

  return (
    <div className="bg-black min-h-screen flex flex-col">
      <div className="flex flex-col md:flex-row h-full w-full">
        <div className="md:w-1/12 w-full md:h-full h-auto">
          <Navbar setmenu={setmenu} setsearch={setsearch} searchs={searchs} />
        </div>

        <div className="md:w-11/12 w-full">
          {!searchs && (
            <div className="md:pl-4">
              <Welcome movie={movie[0]} />
            </div>
          )}
          <div className="md:pl-4">
            <Home searchs={searchs} movie={movie} />
          </div>
          <div className="md:pl-4">
            <BestInSport searchs={searchs} movie={movie} />
          </div>
        </div>
      </div>
      <div className="md:pl-4 w-full">
        <Footer />
      </div>
    </div>
  );
}

export default Main;
