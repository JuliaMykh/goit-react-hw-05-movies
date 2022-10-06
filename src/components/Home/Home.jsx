import getTrends  from '../services/apiTrends';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const HomePage = () => {
  const [movies, setMovies] = useState(null);
  
  const location = useLocation();
  // console.log(location);
    
     useEffect(() => {
    getTrends().then(setMovies);
  }, []);

    return (
      <>
        <h2> Home page</h2>
          { movies &&
        movies.map(({id, title}) => (
          <li key={id}>
            <Link
              to={{
                pathname: `movies/${id}`,
                state: { params: location },
              }}
            >
              {title ? title : "Movie with no title"}
          </Link>
          </li>
        ))}
        </>
        
    );

};
