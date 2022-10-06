import { Route, Routes } from "react-router-dom";

import { Navigation } from './Navigation/Navigation';
import {HomePage} from './Home/Home';


export const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="movies" element={<div>Movies-сторінка пошуку фільміф</div>}>
            <Route path=":movieId" element={<div>MovieDetails</div>}>
              <Route path="cast" element={<div>Cast-актори</div>} />
              <Route path="reviews" element={<div>Reviews-інформація про огляди</div>} />
            </Route>
          </Route>
      </Routes>
    </>
  );
};



