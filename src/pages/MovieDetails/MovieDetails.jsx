import { useState, useEffect } from "react";
import {useParams} from "react-router-dom";

import getMovieDetails from '../../components/services/apiMovieDetails';
import { MovieDetail } from '../../components/MovieDetail/MovieDetail';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState(null);

    useEffect(() => {
        
        getMovieDetails(movieId).then(setMovieInfo);
        // console.log(movieInfo);
  }, [movieId ]);
    
  return (
      <> 
          <h2>Movie details</h2>
      {movieInfo && <MovieDetail movie={movieInfo} />}
    </>
  );
}