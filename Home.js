import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

function Home({ movie, searchs }) {
  const [searchkey, setsearchkey] = useState("");
  const [showAll, setShowAll] = useState(false);
  const carouselRef = useRef(null);

  const handleNextClick = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const handlePrevClick = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const filteredMovies = movie
    ?.filter(
      (data) =>
        data?.title?.includes(searchkey) || data?.name?.includes(searchkey)
    )
    .slice(0, showAll ? movie.length : 6);

  return (
    <>
      {searchs && (
        <input
          onChange={(e) => setsearchkey(e.target.value)}
          type="text"
          className="ml-28 bg-gray-950 w-10/12 mt-3 border border-gray-700 text-sm text-white rounded-lg focus:ring-blue-500 focus:border-gray-500 block w-96 p-2.5 outline-none"
          placeholder="Movies, Shows and More"
          required
        />
      )}
      <div className="flex justify-between items-center pl-28 pr-10">
        <h1 className="mt-5 text-slate-300 font-bold text-xl">
          Latest Releases
        </h1>
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-5 text-blue-500 text-sm"
        >
          {showAll ? "Show all" : "View less"}
        </button>
      </div>
      <div className="relative">
        <div
          className="flex overflow-x-scroll pl-24 pt-7 space-x-4"
          ref={carouselRef}
        >
          {filteredMovies.map((data) => {
            return (
              <Link to="/details" state={{ data: data }} key={data.id}>
                <div className="w-64 flex-shrink-0 rounded overflow-hidden shadow-lg relative group transform transition duration-300 ease-in-out hover:scale-105 hover:bg-opacity-75">
                  <img
                    className="w-full"
                    src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                    alt={data.title || data.name}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-75 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <h2 className="text-lg font-bold">
                      {data.title || data.name}
                    </h2>
                    <p className="text-sm">
                      {data.release_date} | {data.runtime} mins
                    </p>
                    <p className="text-xs">
                      {data.overview.substring(
                        0,
                        data.overview.indexOf(".") + 1
                      )}
                    </p>
                    <button className="mt-2 px-3 py-1 bg-pink-200 hover:bg-gray-600 text-white font-bold rounded">
                      Watch Now
                    </button>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        {/* <button
          type="button"
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={handlePrevClick}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only  pr-5">Previous</span>
          </span>
        </button> */}
        <button
          type="button"
          className="absolute top-0   right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={handleNextClick}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </>
  );
}

export default Home;
