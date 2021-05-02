import React from 'react';
import styles from './list.module.css'
import ListItem from '../listItem';

const List = ({ data,onClickDone,onClickDel }) => {

    return (
        <div className={styles.div}>
            {data.length>0 ? (
                data.map((element) => (
                    <li key={element.id} 
                    className="list-group-item"
                    >
                        <ListItem {...element} onClickDone={onClickDone} onClickDel={onClickDel}/>
                    </li>
                ))
            ) : (<span>Пока у Вас нет дел</span>)}
        </div>
    )
}

export default List;