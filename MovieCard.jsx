function MovieCard({ movie }) {
  return (
    <div className='movie-card'>
      <h3>{movie.title}</h3>
      <p>Genre: {movie.genre}</p>
      <p>Year: {movie.year}</p>
      <p>Rating: {movie.rating}</p>
      {movie.isTrending && <span>Trending</span>}
    </div>
  );
}

export default MovieCard;
