import { NavLink, useLocation } from 'react-router-dom';


const NavMain = ({ handleShowHideNav }) => {
    function closeNav(e){
        if(window.innerWidth < 600){
            handleShowHideNav();
        }else{
            e.target.blur();
        }
    }

    return (

        <nav className="main-nav" onClick={closeNav}>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/favs">Favs</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
            </ul>
        </nav>
    );
    
};

export default NavMain
