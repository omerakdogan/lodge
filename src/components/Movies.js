import MovieCard from "./MovieCard"

import { useSelector } from 'react-redux';

function Movies({ movies }) {

    const favs = useSelector((state) => state.favs.items);

    return (
        <div className="movies-container">
            {movies.map(movie => 
                <MovieCard key={movie.id} movie={movie} 
            /> )}
        </div>
    )
}

export default Movies
