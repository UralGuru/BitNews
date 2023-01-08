import React from "react";
// import {URLManager} from "@shared/url-manager";
import styles from "./navbar.module.css";

export const Navbar = () => {
    // const router = useRouter();
    // const LinkHomePage = () => router.push(URLManager.getHomeURL());
    // const activeHomePage = router.pathname === URLManager.getHomeURL() ? styles.navbarItemActive : '';


    return (
        <div className={styles.navbar}>
            {/*<div className={cn(styles.navbarItem, activeHomePage)} onClick={LinkHomePage}>Home</div>*/}
            {/*<div className={cn(styles.navbarItem, activeBasketPage)} onClick={LinkBasketPage}>Basket</div>*/}
            {/*<div className={cn(styles.navbarItem, activeSettingsPage)} onClick={LinkSettingsPage}>Settings</div>*/}
            {/*<div className={cn(styles.navbarItem, activeHistoryPage)} onClick={LinkHistoryPage}>History</div>*/}

            <div className={styles.navbarItem}>Home</div>
            <div className={styles.navbarItem}>Theme</div>
        </div>
    )
}

