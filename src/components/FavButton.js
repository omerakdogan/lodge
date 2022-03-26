
import NoFav from "../images/heart.png";
import Fav from "../images/addfav.png";

function FavButton({ movie, remove, handleFavClick }) {

    function handleAddFav(){
        handleFavClick(true, movie);
    }

    function handleRemoveFav(){
        handleFavClick(false, movie);
    }

    return (
        <>
            {remove === false ? 
            <img onClick={handleAddFav} src={ NoFav } alt="Not favourite heart icon"/> : 
            <img onClick={handleRemoveFav}src={ Fav } alt="Favourite heart icon"/>}
        </>
    );
    
}

FavButton.defaultProps = {
    remove: false
}

export default FavButton;
