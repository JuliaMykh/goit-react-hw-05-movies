import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import {getMovieReviews} from 'components/services/apiMovieReviews';
import { ReviewsList } from 'components/Reviews/Reviews';

const Reviews = () => {
  const { movieId } = useParams();
  const [results, setResults] = useState(null);

  useEffect(() => {
    try {
      getMovieReviews(Number(movieId)).then(setResults);
    }
    catch (err) {
      console.log(err);
    }
  }, [movieId]);

  return (
    <>
      {results && results.length > 0 ? (<ReviewsList results={results} />) :
        (<h2>We don't have any reviews for this movie</h2>)}
    </>
  )
}

export default Reviews;