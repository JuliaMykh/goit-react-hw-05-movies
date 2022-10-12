import { Route, Routes, Navigate  } from "react-router-dom";
import { lazy } from 'react';
import Layout from './Layout/Layout';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage/MoviesPage'));
const MovieDetails = lazy(() => import('../pages/MovieDetailsPage/MovieDetailsPage'));
const Reviews = lazy(() => import('../pages/ReviewsPage/ReviewsPage'));
const Cast = lazy(() => import('../pages/CastPage/CastPage'));

const App = () => {
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
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
      </Routes>
    </>
  );
};

export default App;

