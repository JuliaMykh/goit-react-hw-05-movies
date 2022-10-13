import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import {getSearchMovie} from 'components/services/apiSearchMovie';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { MoviesList } from 'components/MovieList/MovieList';
import Loader from 'components/Loader/Loader';
import { Title } from './MoviesPage.styled';

const MoviesPage = () => {
  
  const [results, setResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const { search } = useLocation();
  const query = new URLSearchParams(search).get('query') ?? '';

   useEffect(() => {
   if (query !== '') {
     try {
      setIsLoading(true);
      getSearchMovie(query).then(setResults);
     }
     catch (err) {
      console.log(err)
     }
     finally {
      setIsLoading(false);
     }
    }
    
   }, [query]);
  
  // console.log(setResults);
  //  console.log(results);
 
    return (
        <>
        <Title>Movies search page</Title>

        {isLoading && <Loader />}

        <SearchBar />

        {results && <MoviesList results={results} />}
</>
    );
}

export default MoviesPage;
 