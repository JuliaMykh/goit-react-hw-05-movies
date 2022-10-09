// import { Link, useLocation } from 'react-router-dom';
// import propTypes from 'prop-types';


// function MovieCard({ id, title, poster, voteAverage, voteCount }) {
//   const location = useLocation();

//   return (
//     <Item>
//       <Link to={`/movies/${id}`} state={{ from: location }}>
//         <h2>{title ? title : 'Movie without a title'}</h2>
//         <img
//           src={poster ? `https://image.tmdb.org/t/p/w500/${poster}` : 'No poster'}
//           alt={title}
//         />
//         <div>
//             Vote average: <p>{voteAverage}</p>
//             Vote count:<p> {voteCount}</p>
//         </div>
//       </Link>
//     </Item>
//   );
// }