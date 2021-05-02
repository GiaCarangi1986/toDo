import React from 'react';
import styles from './listItem.module.css'

const ListItem = ({ id, name, done, onClickDone, onClickDel }) => {

    let opacity;
    if (done) {
        opacity = '.3';
    }

    return (
        <div>
            <span
                style={{ opacity: opacity, margin: '8px' }}
                onClick={() => onClickDone(id)}>
                {name}
            </span>
            <button
                type="button"
                className="btn btn-danger"
                style={{ float: 'right', padding: '5px', margin: '0px 3px 3px' }}
                onClick={() => onClickDel(id)}>
                Удалить
                </button>
        </div>
    );
}

export default ListItem;