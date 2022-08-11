import React from "react";
import classes from "./MyButton.module.css";

const MyButton = ({children, ...prors}) => {

    return (
        <button { ...prors } className={classes.myBtn} >
            {children}
        </button>
    );
};

export default MyButton;
