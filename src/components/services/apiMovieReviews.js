export async function getMovieReviews(movieId) {
  const key = '73f6ff20fa414d222403a4af56220c3d';
  const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews`;
  const filter = `?api_key=${key}&language=en-US&page=1`;

  const response = await fetch(`${url}${filter}`);
  const data = await response.json();

  // console.log(data);
  return data.results;

  // const reviewsMovies = data.results.map(
  //   ({ author, content, id }) => {
  //     return { author, content, id };
  //   },
  // );
  
  // console.log(reviewsMovies);
  // return reviewsMovies;
}

