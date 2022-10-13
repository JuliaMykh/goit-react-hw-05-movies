import { useState, useEffect, Suspense } from "react";
import { useParams, Outlet, useLocation } from "react-router-dom";

import {getMovieDetails} from 'components/services/apiMovieDetails';
import { MovieDetail } from 'components/MovieDetail/MovieDetail';
import Loader from 'components/Loader/Loader';
import { Title, Link } from './MovieDetailsPage.styled';


const MovieDetails = () => {
  const [movieInfo, setMovieInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const { movieId } = useParams();
  const location = useLocation();
  
  // console.log(typeof movieId);

  useEffect(() => {
      setIsLoading(true);
      getMovieDetails(Number(movieId))
      .then(setMovieInfo)
      .catch((err => console.log(err)))
      .finally(setIsLoading(false))
    
    // try {
    //   setIsLoading(true);
    //   getMovieDetails(Number(movieId)).then(setMovieInfo);
      
    // }
    // catch (err) {
    //   console.log(err);
    // }
    // finally {
    //   setIsLoading(false);
    // }
  }, [movieId]);
    
  return (
    <>
      <Title>Movie details</Title>
      
      {isLoading && <Loader />}

      {movieInfo && <MovieDetail movie={movieInfo} />}

      <Link to={`cast`} state={{ from: location.state?.from ?? '/' }}>Cast</Link>
      <Link to={`reviews`} state={{ from: location.state?.from ?? '/' }}>Review</Link>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};


export default MovieDetails;