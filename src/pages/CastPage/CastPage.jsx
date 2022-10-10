import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import getMovieCast from 'components/services/apiMovieCast';
import { CastList } from 'components/Cast/Cast';

export const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState(null);    

    useEffect(() => {
    getMovieCast(movieId).then(setActors);
  }, [movieId ]);
    
    return (
        <>
            <h2>Cast</h2>
            <CastList actors={actors} />
            </>
    );
}