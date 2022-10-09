import { useState, useEffect } from 'react';
import { useLocation,useNavigate,  Link } from 'react-router-dom';

import getSearchMovie from '../../components/services/apiSearchMovie';
// import { SearchBar } from '../../components/SearchBar/SearchBar';

export const MoviesPage = () => {
  const [movies, setMovies] = useState(null);
  
  const location = useLocation();
  const navigate = useNavigate();
  const { search } = useLocation();
  const query = new URLSearchParams(search).get('query') ?? '';

useEffect(() => {
    if (query !== '') {
      getSearchMovie(query).then(({ results }) => {
        const moviesArr = [];
        results.map(
          ({ id, title}) => {
            const movie = {
              id,
              title: title,
            };
            return moviesArr.push(movie);
          },
        );
        setMovies(moviesArr);
      });
    }
  }, [query]);
    
    function onSubmitForm(e) {
        e.preventDefault();
        const value = e.target.elements.query.value;
    //    console.log(value);
        navigate({
      ...location,
      search: `query=${value}`,
    });
  }
    
    return (
        <>
            <h2>Movies Page</h2>
            <form onSubmit={onSubmitForm}>
                <input type="text" name='query' />
                <button type='submit'>Submit</button>
                </form>
      {movies &&
        movies.map(({id, title}) => (
          <li key={id}>
            <Link
              to={{
                pathname: `/movies/${id}`,
                state: { params: location },
              }}
            >
              {title}
            </Link>
          </li>
        ))}
</>
    );
}


