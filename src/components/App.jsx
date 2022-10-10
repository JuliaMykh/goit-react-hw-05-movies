import { Route, Routes } from "react-router-dom";

import { Layout } from './Layout/Layout';
import { HomePage } from '../pages/HomePage/HomePage';
import { MoviesPage } from '../pages/MoviesPage/MoviesPage';
import { MovieDetails } from '../pages/MovieDetailsPage/MovieDetailsPage';
import { Reviews } from "pages/RewiewsPage/RewiewsPage";
import { Cast } from "pages/Cast/CastPage";


export const App = () => {
  return (
    <>
     
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />}></Route>
          <Route path="movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<HomePage />} />
          </Route>
      </Routes>
    </>
  );
};



