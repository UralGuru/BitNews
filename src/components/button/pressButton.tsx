import React from "react";
import styles from './pressButton.module.css';
import {PropsThemeButton} from "../../constants/types";

function PressButton(props: PropsThemeButton) {
    return <React.Fragment>
        <div className={styles.button}>
            {props.title}
        </div>
    </React.Fragment>
}

export default PressButton;
