import React, {useState} from 'react';
import styles from './addItem.module.css'

const AddItem = ({ onClickAdd }) => {

    const [text, setText] = useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        onClickAdd(text);
        setText('');
    }

    const handleInputChange=(e)=>{
        setText(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit} className={styles.div}>
            <input className={styles.input}
                onChange={handleInputChange}
                type='text'
                placeholder='Мне нужно...'
                value={text}>

            </input>

            <button type="button" className="btn btn-success" type="submit">Добавить</button>
        </form>
    )
}

export default AddItem;