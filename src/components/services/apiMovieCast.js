async function getMovieCast(movieId) {
  const key = '73f6ff20fa414d222403a4af56220c3d';
  const url = `https://api.themoviedb.org/3/movie/${movieId}/credits`;
  const filter = `?api_key=${key}&language=en-US`;

  const response = await fetch(`${url}${filter}`);
  const data = await response.json();

  console.log(data);
  return data;

}

export default getMovieCast;