import React from 'react';
import classes from './Header.module.css'
import MainLogo from '../../assets/logos/main-logo.png';

const Header = props => {
    return (
        <header className={classes['main-header']}>
            <div className={classes['logo-header']}>
                <img className={classes['main-logo']} src={MainLogo} alt="main logo" /> 
            </div>
            <nav className={`${classes.nav} ${classes['main-nav']}`}>
                <ul>
                    <li><a>home</a></li>
                    <li><a>about</a></li>
                    <li><a>shoppe</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;