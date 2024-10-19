import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath, originalTitle }) => {
  if(!posterPath) return <div className="w-48 pr-4"><img className="bg-slate-500 w-full h-full" alt={originalTitle}/></div>
  return (
    <div className="w-48 pr-4">
      <img src={IMG_CDN_URL + posterPath} alt="movie-card" />
    </div>
  );
};

export default MovieCard;
