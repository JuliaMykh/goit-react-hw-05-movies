import getTrends  from '../services/apiTrends';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const HomePage = () => {
  const [movies, setMovies] = useState(null);
  
  const location = useLocation();
    
     useEffect(() => {
    getTrends().then(setMovies);
     }, []);
  
  if (!movies) {
    return null;
  }

  const { id, title } = movies;

  return (
      
      <>
        <h2> Home page</h2>
          
        {movies.map(({id, title}) => (
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
