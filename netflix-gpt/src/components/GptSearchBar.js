import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openAi";
import { API_OPTIONS } from "../utils/constants";
import { addGptSearchResults } from "../utils/gptSlice";

const GptSearchBar = () => {
  const langConfig = useSelector((store) => store.config.lang);

  const dispatch = useDispatch();
  const searchText = useRef();

  const gptQuery = "Act as a movie recommendation system and suggest some movies for the query" + searchText?.current?.value + ". Only give me names of 5 movies, comma separated Like example result given ahead. Example result: Gadar, Sholay, Don, Stree2, Golmal";

  const handleGptSearchClick = async () => {

    ///////////////////////////
    // const gptResults = await openai.completions.create({
    //   model: 'gpt-3.5-turbo',
    //   prompt: gptQuery,
    //   max_tokens: 6,
    //   temperature: 0,
    // });

    // if(!gptResults.choices){
    //   //error handling
    // }

    // const gptMovieList = gptResults.choices[0]?.message?.content.split(",");
    ///////////////////////////////

    const gptMovieList ="Chupke Chupke, Gol Maal, Chashme Buddoor, Padosan, Angoor".split(",");

    //in gptMovieList [Gadar, Sholay, Don, Stree2, Golmal]
    //for each movie I will search TMDB API

    const promiseArray = gptMovieList.map(movie => searchMovieTMDB(movie)); // I will get array of promises

    const tmdbResults = await Promise.all(promiseArray);
    dispatch(addGptSearchResults({gptSearchMovieNames: gptMovieList, tmdbResults: tmdbResults}));

  }

  const searchMovieTMDB = async (movie) => {
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query=" + movie + "&include_adult=false&page=1", API_OPTIONS);

    const json = await data.json();
    return json.results;
  }

  return (
    <div className="pt-[35%] md:pt-[9%] flex justify-center">
      <form className="w-full mt-0 mx-1 md: bg-black md:w-1/2 grid grid-cols-12 bg-opacity-80" onSubmit={(e) => e.preventDefault()}>
        <input
        ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langConfig].gptSearchPlaceholder}
        />
        <button className="m-4 py-2 px-4 bg-red-700 text-white rounded-lg col-span-3" onClick={handleGptSearchClick}>
          {lang[langConfig].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
