import React from "react";
import styles from './pressButton.module.css';
import {PropsThemeButton} from "../../constants/types";
import {useAppDispatch, useAppSelector} from "../../shared/hooks";
// import {getColorsThunk} from "../../store/slices/themeSlices";

function PressButton(props: PropsThemeButton) {
    const dispatch = useAppDispatch();
    // const newsState = useAppSelector((state) => state.theme)

    const handleTheme = () => {
        // dispatch(getColorsThunk(props.title))
    }
    return <React.Fragment>
        <div className={styles.button} onClick={handleTheme}>
            {props.title}
        </div>
    </React.Fragment>
}

export default PressButton;
