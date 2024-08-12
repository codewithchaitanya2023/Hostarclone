import React, { useRef } from "react";
import { Link } from "react-router-dom";

function CategoryCarousel({ category, movies }) {
  const carouselRef = useRef(null);

  const handleNextClick = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="relative my-8">
      <h2 className="text-3xl font-extrabold text-white mb-4">{category}</h2>
      <div
        className="flex overflow-x-scroll pl-4 pr-4 pt-4 space-x-4 scrollbar-hide"
        ref={carouselRef}
      >
        {movies.map((movie) => (
          <Link to="/details" state={{ data: movie }} key={movie.id}>
            <div className="w-48 sm:w-64 flex-shrink-0 rounded-lg overflow-hidden shadow-lg relative group transform transition duration-300 ease-in-out hover:scale-105">
              <img
                className="w-full object-cover"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title || movie.name}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                <h2 className="text-base sm:text-lg font-bold text-white mb-1">
                  {movie.title || movie.name}
                </h2>
                <p className="text-xs sm:text-sm text-gray-300">
                  {movie.release_date} | {movie.runtime || "N/A"} mins
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  {movie.overview.substring(0, 100)}...
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Next Button */}
      <button
        type="button"
        className="absolute top-1/2 transform -translate-y-1/2 right-2 sm:right-4 z-30 flex items-center justify-center h-full px-2 sm:px-4 cursor-pointer group focus:outline-none"
        onClick={handleNextClick}
      >
        <span className="inline-flex items-center justify-center w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
          <svg
            className="w-3 sm:w-4 h-3 sm:h-4 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
}

function Home({ movie }) {
  const categories = {
    Action: movie.filter((m) => m.genre_ids.includes(28)),
    Drama: movie.filter((m) => m.genre_ids.includes(18)),
    Comedy: movie.filter((m) => m.genre_ids.includes(35)),
  };

  return (
    <div className="pt-16 pr-4">
      {" "}
      {/* Add padding-top to avoid overlap with navbar */}
      {Object.entries(categories).map(([category, movies]) => (
        <CategoryCarousel key={category} category={category} movies={movies} />
      ))}
    </div>
  );
}

export default Home;
