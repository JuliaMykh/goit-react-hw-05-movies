import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

import { MovieLst, MovieItem, Link } from './MovieList.styled';

export const MoviesList = ({ results  }) => {
    const location = useLocation();
    
    return (
        <>
            <MovieLst>
                
    {results.map(({id, title}) => (
        <MovieItem key={id}>
        <Link to={`/movies/${id}`} state={{ from: location }}>
            {title ? title : "No title"}
        </Link>
        </MovieItem>
    ))}
            </MovieLst>
        </>
    )
}

MoviesList.propTypes = {
    results: PropTypes.arrayOf(
        PropTypes.shape(
             {
       id: PropTypes.number,
       title: PropTypes.string,
    }
         )
        )
   
};











