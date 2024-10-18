import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId +"/videos?language=en-US",
      API_OPTIONS
    );
    const movieDetails = await data.json();

    const filterData = movieDetails?.results?.filter(
      (video) => video.type === "Trailer" && video.name === "Official Trailer"
    );
    const trailer =
      filterData.length > 0 ? filterData[0] : movieDetails?.results[0];

    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;
