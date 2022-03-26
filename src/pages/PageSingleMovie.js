import { useEffect, useState } from 'react'; 
import { useParams } from 'react-router-dom';
import { API_KEY} from '../globals/globals';
import noPoster from '../images/no-movie-poster.jpg';
import FavButton from '../components/FavButton';
import { isFav, addToFav, deleteFav } from '../utilities/storage'


function PageSingleMovie() {

    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [movieFav, setMovieFav] = useState(null);

    useEffect(() => {
        
        const getMovie = async () => {
            const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`)
            const movieDataFromAPI = await res.json();
            setMovieFav(isFav(movieDataFromAPI.id));  
            setMovie(movieDataFromAPI);
        }
        
        getMovie();
        
    }, [id])

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
        <section className="page-single-movie">
            {movie !== null &&
                <div className='single-movie'>
                    <div className='single-movie-1' 
                        style={{
                            backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
                            backgroundSize: "cover"
                        }}
                    >
                        <div className='single-movie-poster'>
                            {movie.backdrop_path === null ? 
                                <img src={noPoster} alt="No Poster" /> :
                                <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
                            }

                        <div className="heart">
                            {movieFav ? 
                                <FavButton movie={movie} remove={true} handleFavClick={handleFavClick} /> : 
                                <FavButton movie={movie} handleFavClick={handleFavClick} />
                            }
                        </div>
                        <span className={`movie-rate ${voteColor(movie.vote_average)}`}>{movie.vote_average}</span>
                        </div>

                        <div className='single-movie-summary'>
                            {movie !== null && <h2>{movie.title}</h2>}
                            {movie !== null && <p>{movie.release_date}</p>}
                            {movie !== null && <p>{movie.overview}</p>} 
                        </div>
                    </div>
                </div>
            } 
        </section>
    )
}

export default PageSingleMovie
