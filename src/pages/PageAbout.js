import { useEffect } from 'react';
import { appTitle } from '../globals/globals';
import Logo from '../components/Logo'

const PageAbout = () => {

    useEffect(() => {
        document.title = `${appTitle} - About`;
    }, []);

    return (
        <main className="main">
            <section>
                <h2>About</h2>
                <div>
                    <p>Lodge Movie is a creative platform providing unique movie surfuring experience. We offer free viewing mode that lets you jump in righ away with limited ad. interrupton. There is also a credit collection mode to remove ad., so you can enjoy whithout interruption.  There are over 2,000 movies in our database including the most latest in the market. Follow us and get latest update.</p>
                    <p>This product uses the TMDB API but is not endorsed or certified by TMDB.</p>
                </div>
                <div className='Logo'>
                <Logo width="300" height="39"/>
                </div>
            </section>
        </main>
    );

};

export default PageAbout;