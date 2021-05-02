import React, {useState} from 'react';
import styles from './filterItem.module.css'

const AddItem = ({ onClickSeacrh, text,setText }) => {

    
    const handleInputChange=(e)=>{
        //console.log(e.target.value);
        onClickSeacrh(e.target.value);
        setText(e.target.value);
    }

    return (
            <input className={styles.input}
                onChange={handleInputChange}
                type='text'
                placeholder='Найти...'
                value={text}>
            </input>
    )
}

export default AddItem;