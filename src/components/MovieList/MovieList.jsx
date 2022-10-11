import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

import { MovieList, MovieItem, Link } from './MovieList.styled';

export const MoviesList = ({ movies }) => {

    const location = useLocation();
    
    return (
        <>
            <MovieList>
                
    {movies.results.map(({id, title}) => (
        <MovieItem key={id}>
        <Link to={`/movies/${id}`} state={{ from: location }}>
            {title ? title : "No title"}
        </Link>
        </MovieItem>
    ))}
            </MovieList>
        </>
    )
}

MoviesList.propTypes = {
    movies: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
    }),
};











