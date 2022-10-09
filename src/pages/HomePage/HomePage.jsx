import getTrends  from '../../components/services/apiTrends';
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

  return (
      <>
        <h2> Home page</h2>
          
        {movies.map(({id, title}) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {title ? title : "Movie with no title"}
          </Link>
          </li>
        ))}
        </>
    );

};
