import React, { useState } from 'react';
import { NavLink} from 'react-router-dom';
import styles from './Navbar.module.css';
import stylesMobile from "./NavbarMobile.module.css"
// import AuthContext from '../../auth/AuthContext';
// import { types } from '../../types/types';
import cart from "./cart-icon.svg"
import search from "./search.svg"
import logo from "./logo.png"
import favorite from "./favorite-icon.svg"
import bars from "./bars.svg"




const Navbar = () => {

    // const { user: { name }, dispatch } = useContext(AuthContext);
    // const history = useHistory();



    // const handleLogout = () => {
    //     history.replace('/login/24');
    //     dispatch({type: types.logout});
    // }
   
    const [screenSize, setScreenSize] = useState(window.innerWidth)
    const [barsStatus, setBarsStatus] = useState("off")
    
    window.addEventListener('resize', changeScreen);

function changeScreen(e){
    setScreenSize(e.target.innerWidth)
}

function changeBarsStatus () {
    if(barsStatus === "off"){
        setBarsStatus("on")
    }
    else {
        setBarsStatus("off")
    }
}
    
    return (

        screenSize > 1030 ?
        // NAVBAR CON WIDTH MAYOR A 1000
        <nav className={styles.container}>
            <div className={styles.logo_searchbar_login}>
                <div className={styles.logo_container}>
                     <NavLink className={styles.logo} to="/"><img src={logo} alt="" /></NavLink> 
                    
                </div>

                <NavLink to="/about" className={styles.about_container}>
                
                    <span>Sobre Nosotros</span>
                
                </NavLink>

                <div className={styles.searchbar_container}>
                    
                    <input className={styles.searchBar} placeholder="Buscar Bebidas..." type="search"/>
                    <img src={search} alt="" />
                    
                    
                </div>

                <div className={styles.cart_login}>
                    <span>Iniciar Sesión</span>
                    <div className={styles.cart_favorite}>
                    <img src={cart} alt="" />
                    <img src={favorite} alt="" />
                    </div>
                    
                </div>
                
            </div>
            
        </nav>
        : 
        // NAVBAR CON WIDTH MENOR A 1000
        <nav className={stylesMobile.container}>
            <div className={stylesMobile.logo_container}>
                     <NavLink className={stylesMobile.logo} to="/"><img className={stylesMobile.logo_img} src={logo} alt="" /></NavLink> 
                    
            </div>

            <div className={stylesMobile.searchbar_container}>
                <input className={styles.searchBar} placeholder="Buscar Bebidas..." type="search"/>
                <img src={search} alt="" />
            </div>

            <div className={stylesMobile.bars_cart_container}>
                <img onClick={changeBarsStatus} src={bars} alt="" />
                <img src={cart} alt="" />
            </div>
            <ul className={barsStatus === "on" ? stylesMobile.nav_menu_active : stylesMobile.nav_menu_disabled}>
                    <li>INICIAR SESIÓN</li>
                    <li>SOBRE NOSOTROS</li>
                    <li>FAVORITOS</li>
                </ul>
        </nav>
    );

   
}

export default Navbar;
