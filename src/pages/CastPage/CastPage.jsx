import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import {getMovieCast} from 'components/services/apiMovieCast';
import { CastList } from 'components/Cast/Cast';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);    

  useEffect(() => {
    getMovieCast(Number(movieId))
      .then(setCast)
      .catch(err => console.log(err))
  }, [movieId ]);
    
    return (
        <>
        {cast && cast.length > 0 ? (<CastList cast={cast} />) : (<h2>We don't have the information about actors</h2>)}
            </>
    );
}

export default Cast;