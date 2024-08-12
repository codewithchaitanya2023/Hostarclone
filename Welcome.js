import React from "react";

function Welcome({ movie }) {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.1)), url(https://image.tmdb.org/t/p/w500${movie?.poster_path})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "1260px 900px",
      }}
      className="h-screen pb-7 grid grid-cols"
    >
      <div>
        <h1 className="text-slate-300 mt-4 pt-44 font-bold text-4xl">
          {movie?.title ?? movie?.name}
        </h1>
        <h1 className="text-slate-300 mt-3 text-lg">
          {movie?.release_date ?? movie?.first_air_date}
        </h1>
        <h1 className="text-slate-300 mt-4 text-base">
          {movie?.overview.substring(0, movie.overview.indexOf(".") + 1)}
        </h1>
        <h1 className="text-yellow-500 font-bold text-3xl mt-4">
          Langauge - {movie?.original_language}
        </h1>
        <button className="bg-gray-600 mt-10 h-12 w-80 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
          Watch now
        </button>
      </div>
    </div>
  );
}

export default Welcome;
