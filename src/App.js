import React, { useState } from 'react';
import Title from './components/title';
import List from './components/list';
import AddItem from './components/addItem';
import FilterItem from './components/filterItem';
import styles from './App.module.css'

const App = () => {

    const [data, setData] = useState([
        { id: 1, name: "Купить хлеб", done: true },
        { id: 2, name: "Сходить в кино", done: false },
        { id: 3, name: "Поиграть на гитаре", done: false },
    ]);

    const [visItem, setVisItem] = useState([...data]);

    const onClickDone = (index) => {

        let arr =
            data.map((todo) => {
                if (todo.id === index) {
                    todo.done = !todo.done;
                }

                return todo;
            })

        setData(arr);
        setVisItem(arr);
    }

    const onClickDel = (id) => {

        console.log(id);

        let arr = data.filter((todo) =>
            todo.id !== id)

        setData(arr);

        setVisItem(arr);
        setText('');
    }

    const onClickAdd = (item) => {
        const arr = [...data];

        let max = 0;
        arr.forEach(element => {
            if (element.id > max)
                max = element.id;
        });

        arr.push({ id: ++max, name: item, done: false });

        setData(arr);

        setVisItem(arr);
    }

    const onClickSeacrh = (text) => {
        console.log(text);

        if (text.length === 0)
            return setVisItem(data);

        var positiveArr = data.filter((temp) => {
            return temp.name.toLowerCase().indexOf(text.toLowerCase()) > -1 && !temp.done
        })

        setVisItem(positiveArr);
    }

    const [text, setText] = useState('');

    return (
        <div className={styles.div}>
            <Title />
            <FilterItem onClickSeacrh={onClickSeacrh} text={text} setText={setText}/>
            <List data={visItem} onClickDone={onClickDone} onClickDel={onClickDel} />
            <AddItem onClickAdd={onClickAdd} />
        </div>
    )
}

export default App;
