import { useState, useEffect } from "react";
import {useParams, Outlet, useLocation } from "react-router-dom";

import {getMovieDetails} from 'components/services/apiMovieDetails';
import { MovieDetail } from 'components/MovieDetail/MovieDetail';
import { Loader } from 'components/Loader/Loader';
import { Title, Link } from './MovieDetailsPage.styled';


export const MovieDetails = () => {
  const [movieInfo, setMovieInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const { movieId } = useParams();
  const location = useLocation();
  
  useEffect(() => {
    try {
      setIsLoading(true);
      getMovieDetails(movieId).then(setMovieInfo);
      // console.log(movieInfo);
    }
    catch (err) {
      console.log(err);
    }
    finally {
      setIsLoading(false);
    }
  }, [movieId ]);
    
  return (
      <> 
      <Title>Movie details</Title>
      
      {isLoading && <Loader />}

      {movieInfo && <MovieDetail movie={movieInfo} />}

      <Link to={`cast`} state={{ from: location.state?.from ?? '/' }}>Cast</Link>
      <Link to={`reviews`} state={{ from: location.state?.from ?? '/' }}>Review</Link>

      <Outlet />
    </>
  );
}