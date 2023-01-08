import React from "react";
import styles from './pressButton.module.css';
import {PropsThemeButton} from "../../constants/types";
import {useAppDispatch, useAppSelector} from "../../shared/hooks";
import {getThemeThunk} from "../../store/slices/themeSlices";
import CSS from 'csstype';

function PressButton(props: PropsThemeButton) {
    const dispatch = useAppDispatch();
    const themeState = useAppSelector((state) => state.theme)

    const handleTheme = () => {
        dispatch(getThemeThunk(props.title))
    }

    const colorTheme: CSS.Properties = {
        backgroundColor: `${themeState.mainColor}`,
        color: `${themeState.textColor}`
    }

    return <React.Fragment>
        <div className={styles.button} style={colorTheme} onClick={handleTheme}>
            {props.title}
        </div>
    </React.Fragment>
}

export default PressButton;
