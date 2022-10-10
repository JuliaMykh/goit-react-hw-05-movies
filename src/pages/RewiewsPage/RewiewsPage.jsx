import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import getMovieReviews from 'components/services/apiMovieReviews';
import { ReviewsList } from 'components/Reviews/Reviews';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);    

  useEffect(() => {
    getMovieReviews(movieId).then(setReviews);
  }, [movieId]);

  return (
    <>
      <h2>Reviews Page</h2>
        {reviews && <ReviewsList reviews={reviews} />}
    </>
    ) 
}