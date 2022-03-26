import { Link } from 'react-router-dom';
import noPoster from '../images/no-movie-poster.jpg';
import {useState, useEffect} from 'react';
import FavButton from '../components/FavButton';
import { isFav, addToFav, deleteFav } from '../utilities/storage';

function MovieCard({ movie }) {

    const [movieFav, setMovieFav] = useState(isFav(movie.id));

    useEffect(() => {
        isFav(movie.id);
    }, [])


    function handleFavClick(fav){
        if(fav === true){
            addToFav(movie)
            setMovieFav(true);
        }else{
            deleteFav(movie);
            setMovieFav(false);
        }   
    }
    const voteColor = (vote) => {
        if( vote >=8 ) {
            return 'green';
        }else if ( vote>=6 && vote<8 ) {
            return 'blue';
        }else{
            return 'red';
        }
    }
    return (
        <div className="movie-card">
            <Link to={`/movie/${movie.id}`}>
            <div className="movie-poster">
                {movie.poster_path === null ? 
                    <img src={noPoster} alt="No Poster" /> :
                    <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />    
                }
                <div className="movie-overview">
                    <div>{movie.overview}</div>
                    <br />
                    <div>{movie.release_date}</div> 
                </div>
            </div>
            </Link>
            <div className="heart">
                {movieFav ? 
                    <FavButton movie={movie} remove={true} handleFavClick={handleFavClick} /> : 
                    <FavButton movie={movie} handleFavClick={handleFavClick} />
                }
            </div>
            <span className={`movie-rate ${voteColor(movie.vote_average)}`}>{movie.vote_average}</span>
            <div className="movie-info">
                <Link to={`/movie/${movie.id}`}>More Info</Link>
                </div>

        </div>
    )
}
export default MovieCard
