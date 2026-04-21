
//wara ntem fridz eliezer

//afficher un film individuel
function MovieCard({ movie }) {
    return (
        <div className="movie-card">
            <h3>{movie.title}</h3>  
            <p>Genre: {movie.genre}</p>
            <p>Annee: {movie.year}</p>
            <p>Note: {movie.rating}/10</p>

            {/**logique conditionnelle */}
            {movie.isTrending && <span className="badge trending">Trending</span>}
            {movie.rating >8 && <span className="badge top-rated">Top Rated</span>}
            {movie.year<2000 && <span className="badge classic">Classic</span>}
        </div>
    );
}

export default MovieCard;
