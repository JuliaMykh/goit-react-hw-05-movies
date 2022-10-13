import { useState, useEffect } from 'react';

import {getTrends}  from 'components/services/apiTrends';
import { MoviesList } from 'components/MovieList/MovieList';
import { Title } from './HomePage.styled';

const HomePage = () => {
  const [results, setResults] = useState(null);

  useEffect(() => {
    try {
      getTrends().then(setResults);
    }
    catch (err){
      console.log(err);
    }
     }, []);
  
  if (!results) {
    return null;
  }

  return (
      <>
      <Title> Tranding movies for today</Title>
      
      {results && <MoviesList results={results} />}
          
        </>
    );
};

export default HomePage;