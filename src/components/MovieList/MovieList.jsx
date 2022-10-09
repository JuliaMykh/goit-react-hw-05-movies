// import propTypes from 'prop-types';


function MoviesList({ movies }) {
  return (
    <div>
      {movies.map(({ id, title, poster, voteAverage }) => {
        return (
          <li
            key={id}
            id={id}
            title={title}
            poster={poster}
            voteAverage={voteAverage}
          />
        );
      })}
    </div>
  );
}












