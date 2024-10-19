import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const gpt = useSelector((store) => store.gpt);
  const { gptSearchMovieNames, tmdbResults } = gpt;

  if (!tmdbResults) return null;

  return (
    <div className="p-4 mt-3 m-0 w-full bg-black text-white bg-opacity-75">
      {gptSearchMovieNames?.map((movieName, index) => (
        <MovieList key={movieName} title={movieName} movies={tmdbResults[index]} />
      ))}
    </div>
  );
};

export default GptMovieSuggestions;
