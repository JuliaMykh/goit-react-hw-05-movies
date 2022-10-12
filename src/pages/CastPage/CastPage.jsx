import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import {getMovieCast} from 'components/services/apiMovieCast';
import { CastList } from 'components/Cast/Cast';

const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState(null);    

  useEffect(() => {
    try {
      
      getMovieCast(movieId).then(setActors);  
    }
    catch (err) {
      console.log(err);
    }
  }, [movieId ]);
    
    return (
        <>
        {actors && actors.cast.length > 0 ? (<CastList actors={actors} />) : (<h2>We don't have the information about actors</h2>)}
            </>
    );
}

export default Cast;