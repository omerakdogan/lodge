import { appTitle } from '../globals/globals';
import { useState, useEffect } from 'react';
import { API_KEY } from '../globals/globals'; 
import Movies from '../components/Movies';
import NavSort from '../components/NavSort';
import NoSearchMovie from '../components/NoSearchMovie';

function PageHome({ sort }) {
    
    useEffect(() => {
        document.title = `${appTitle} - Home`;
    }, []);
    const [moviesData, setMoviesData] = useState(null);
    const [searchTerm, setSearchTerm] = useState(' ');
    const [showResetButton, setShowResetButton] = useState(false);

    const fetchMovies = async () => {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${sort}?api_key=${API_KEY}&language=en-US&page=1`);
        let moviesDataFromAPI = await res.json();
        // Get the first 12 movies from the returned movies array...
        moviesDataFromAPI = moviesDataFromAPI.results.splice(0, 12);
        setMoviesData(moviesDataFromAPI);
    }

    useEffect(() => {
        fetchMovies();
    }, [sort]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const searchMovies = async () => {
            const res = await fetch(`https://api.themoviedb.org/3/search/movie?&api_key=${API_KEY}&query=`+searchTerm);
            let moviesDataFromAPI = await res.json();
            // Get the first 12 movies from the returned movies array...
            moviesDataFromAPI = moviesDataFromAPI.results.splice(0, 12);
            setMoviesData(moviesDataFromAPI);
        }
        searchMovies();
        setShowResetButton(true);
    }

    const resetSearch = () => {
        fetchMovies();
        setSearchTerm('');
        setShowResetButton(false);
    }

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    }
    return (
        <section className="home-page">
            <NavSort />
            <div className='header_form_wrapper'>
                <form onSubmit={handleSubmit}>
                    <input  className='headersearch' 
                            type="search" 
                            placeholder="Search for a movie"
                            value={searchTerm}
                            onChange={handleChange}/>
                </form>
                { showResetButton && <button className="reset-button" onClick={resetSearch}>RESET</button>}
            </div>
            {moviesData !== null && moviesData.length > 0 ? 
                    <Movies movies={moviesData} /> : <NoSearchMovie />}
            
        </section>
    )
}

export default PageHome

