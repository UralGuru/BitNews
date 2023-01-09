import React, {useEffect} from 'react';
import styles from './theme.module.css'
import PressButton from "../../components/button/pressButton";
import {THEMES} from "../../constants/types";
import CSS from "csstype";
import {useAppSelector} from "../../shared/hooks";

const Theme = () => {
    const theme = useAppSelector((state)=> state.theme)

    useEffect(()=>{
        document.body.style.backgroundColor = theme.mainColor
    },[theme.id])

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
