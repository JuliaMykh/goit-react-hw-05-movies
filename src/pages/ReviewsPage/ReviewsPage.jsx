import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import {getMovieReviews} from 'components/services/apiMovieReviews';
import { ReviewsList } from 'components/Reviews/Reviews';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    try {
      getMovieReviews(movieId).then(setReviews);
    }
    catch (err) {
      console.log(err);
    }
  }, [movieId]);

  return (
    <>
      {reviews && reviews.results.length > 0 ? (<ReviewsList reviews={reviews} />) :
        (<h2>We don't have any reviews for this movie</h2>)}
    </>
  )
}