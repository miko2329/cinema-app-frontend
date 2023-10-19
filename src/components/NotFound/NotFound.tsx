import React from 'react';
import styles from "./NotFound.module.css"
import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <div className={styles.wrapper}>
            <div>
                <h1 className={styles.errorCode}>404</h1>
                <h2 className={styles.errorMessage}>Not Found</h2>
                <Link to={"/"}>Back to main page</Link>
            </div>
        </div>
    );
};

export default NotFound;