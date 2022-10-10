import { useState, useEffect } from "react";
import {useParams, Outlet, Link, useLocation } from "react-router-dom";

import getMovieDetails from '../../components/services/apiMovieDetails';
import { MovieDetail } from '../../components/MovieDetail/MovieDetail';

export const MovieDetails = () => {

  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState(null);

  const location = useLocation();
  

    useEffect(() => {
        
        getMovieDetails(movieId).then(setMovieInfo);
        // console.log(movieInfo);
  }, [movieId ]);
    
  return (
      <> 
          <h2>Movie details</h2>
      {movieInfo && <MovieDetail movie={movieInfo} />}
      <Link to={`cast`} state={{ from: location.state?.from ?? '/movies' }}>Cast</Link>
      <Link to={`review`} state={{ from: location.state?.from ?? '/movies' }}>Review</Link>
      <Outlet />
    </>
  );
}