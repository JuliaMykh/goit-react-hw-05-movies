import { useState, useEffect } from 'react';

import {getTrends}  from 'components/services/apiTrends';
import { MoviesList } from 'components/MovieList/MovieList';
import { Title } from './HomePage.styled';

const HomePage = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    try {
      getTrends().then(setMovies);
    }
    catch (err){
      console.log(err);
    }
     }, []);
  
  if (!movies) {
    return null;
  }

  return (
      <>
      <Title> Tranding movies for today</Title>
      
      {movies && <MoviesList movies={movies} />}
          
        </>
    );
};

export default HomePage;