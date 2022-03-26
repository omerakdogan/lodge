import { appTitle } from '../globals/globals';
import { useState, useEffect } from 'react';
import Movies from '../components/Movies';
import NoFavMovie from '../components/NoFavMovie';
import { appStorageName } from '../globals/globals';
import { anyFav } from '../utilities/storage';



function PageFavs() {
    useEffect(() => {
        document.title = `${appTitle} - Home`;
    }, []);
    const [moviesData, setMoviesData] = useState(null);

    useEffect(() => {
        let favsStorage = localStorage.getItem(appStorageName);

        if(favsStorage !==null){
            favsStorage = JSON.parse(favsStorage);
            setMoviesData(favsStorage);
            return;
        }
        

    }, []);

    const anyFavourite = () => {
        if(anyFav){
            return <div>{moviesData !== null && <Movies movies={moviesData} />}</div>;
        }else{
            return <div><NoFavMovie /></div>
        }
    }

    return (
        <main>
            <section className="fave-page">
                <h2>My Favourite</h2>
                {moviesData !== null && moviesData.length > 0 ? 
                    <Movies movies={moviesData} /> : <NoFavMovie />}
            </section>
        </main>

    )
}

export default PageFavs
