import { useLocation, Link } from 'react-router-dom';

export const MovieDetail = ({movie: { poster_path, title, genres, overview, vote_average  }},
) =>  {
  const location = useLocation();

  return (
    <div>
       <Link to={location?.state?.from ?? '/movies'}>Go Back</Link>       
        <img
          src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : "No poster"}
          alt={title}
        />
        <div>
            <h2>{title}</h2>
             {genres.map(({ name }) => name).join(', ')}
          <p>{overview}</p>
          <div>
              Vote average: <p>{vote_average}</p>
          </div>
        </div>
      
    </div>
  );
}

