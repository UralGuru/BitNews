import React from 'react';
import styles from './theme.module.css'
import PressButton from "../../components/button/pressButton";
import {THEMES} from "../../constants/types";

const Theme = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.themeButtons}>
                <PressButton title={THEMES.DARK}/>
                <PressButton title={THEMES.LIGHT}/>
                <PressButton title={THEMES.BLUE}/>
            </div>

        </div>
    );
};

export default Theme;
