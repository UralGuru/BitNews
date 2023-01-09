import React from 'react';
import cn from 'classnames';
import { useLocation, useNavigate } from 'react-router-dom';
import { URLManager } from '../../shared/url-manager';
import styles from './navbar.module.css';


export const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const activeHomePage = location.pathname === URLManager.getHomeURL() ? styles.navbarItemActive : '';
    const activeThemePage = location.pathname === URLManager.getThemeURL() ? styles.navbarItemActive : '';

    const LinkHomePage = () => navigate(URLManager.getHomeURL());
    const LinkThemePage = () => navigate(URLManager.getThemeURL());

    return (
        <div className={styles.navbar}>
            <div className={cn(styles.navbarItem, activeHomePage)} onClick={LinkHomePage}>Home</div>
            <div className={cn(styles.navbarItem, activeThemePage)} onClick={LinkThemePage}>Theme</div>
        </div>
    )
}