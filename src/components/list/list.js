import React from 'react';
import styles from './list.module.css'
import ListItem from '../listItem';

const List = ({ data, onClickDone, onClickDel }) => {

    return (
        <div className={styles.div}>
            {data ? (
                Object.entries(data).map(([key, { name, done }], index) => (
                    <li key={key} className="list-group-item">
                    <ListItem key={key} id={key} name={name} done={done} onClickDone={onClickDone} onClickDel={onClickDel}/>
                    </li>
                ))
                /*
                data.map((element) => (
                    <li key={element.id} 
                    className="list-group-item"
                    >
                        <ListItem {...element} onClickDone={onClickDone} onClickDel={onClickDel}/>
                    </li>
                ))
                */
            ): (<span>Пока у Вас нет дел</span>)
}
        </div >
    )
}

export default List;