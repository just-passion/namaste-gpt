import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";


const useNowPlayingMovies =() => {
    const dispatch = useDispatch();

    const getNowPlayingMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
        API_OPTIONS
      );
        const nowPlayingJson = await data.json();
        console.log({nowPlayingJson: nowPlayingJson.results});
        dispatch(addNowPlayingMovies(nowPlayingJson.results))
    };
  
    //many things are printed two times therefore in index.js 
    //<React.StrictMode><App/></React.StrictMode> (remove stricMode tag just keep App but in production it wont be called two times anyways)
  
  
    useEffect(() =>{
      getNowPlayingMovies();
    }, []);
}

export default useNowPlayingMovies;