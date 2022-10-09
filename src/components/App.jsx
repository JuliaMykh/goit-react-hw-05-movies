import { Route, Routes } from "react-router-dom";

import { Layout } from './Layout/Layout';
import { HomePage } from '../pages/Home/Home';
import { MoviesPage } from '../pages/Movies/Movies';
import { MovieDetails } from '../pages/MovieDetails/MovieDetails';


export const App = () => {
  return (
    <>
     
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />}></Route>
          <Route path="movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<div>Cast-актори</div>} />
              <Route path="reviews" element={<div>Reviews-інформація про огляди</div>} />
            </Route>
            <Route path="*" element={<HomePage />} />
          </Route>
      </Routes>
    </>
  );
};



