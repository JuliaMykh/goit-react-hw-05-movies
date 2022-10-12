import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

import {
  GoBackLink,
  MovieBox,
  MovieImg,
  MovieInform,
  MovieTitle,
  MovieGenres,
  MovieOverview,
  MovieVote,
  MovieAverage,
} from './MovieDetail.styled';

export const MovieDetail = ({movie: { poster_path, title, genres, overview, vote_average  }},
) =>  {
  const location = useLocation();

  return (
    <MovieBox>
       <GoBackLink to={location?.state?.from ?? '/movies'}>Go Back</GoBackLink>       
        <MovieInform>
      <MovieImg
          src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : "No poster"}
          alt={title}
        />
        <div>
          <MovieTitle>{title}</MovieTitle>
          <MovieGenres>{genres.map(({ name }) => name).join(', ')}</MovieGenres>
             
          <MovieOverview>{overview}</MovieOverview>
          <MovieVote> Vote average:</MovieVote> <MovieAverage>{vote_average}</MovieAverage>
             
          
        </div>
      </MovieInform>
    </MovieBox>
  );
}

MovieDetail.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
        poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.shape),
    overview: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    })
  ),

};

