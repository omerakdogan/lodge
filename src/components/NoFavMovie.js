import { NavLink } from 'react-router-dom';
import addFav from '../images/addfav.png';

function NoFavMovie() {

    return (
        <div className="no-fav-movie">
            <NavLink to="/"><img src={addFav} alt="Website logo"></img></NavLink>
            <p>Unfortunately you have no favourite movies.</p>
            <p>Why not add one now!..</p>
        </div>
    )
}

export default NoFavMovie
