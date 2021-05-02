import React from 'react';
import styles from './title.module.css'


const Title = () => {
    const title = "To do";

    return(
        <h1 className={styles.h1}>{title}</h1>
    )
}

export default Title;