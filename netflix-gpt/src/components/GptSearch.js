import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { NETFLIX_BG } from "../utils/constants";

const GptSearch = () => {
  return (
    <>
      <div className="fixed w-full h-full -z-10">
        <img
          src={NETFLIX_BG}
          alt="netflix-background"
          className="object-cover w-full h-screen"
        />
      </div>
      <div className="w-screen box-border">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};

export default GptSearch;
