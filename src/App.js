import React, { useState, useEffect } from 'react';
import Title from './components/title';
import List from './components/list';
import AddItem from './components/addItem';
import FilterItem from './components/filterItem';
import styles from './App.module.css'

import Firebase from './components/service/firebase';

const App = () => {

    const firebase = new Firebase();

    const [data, setData] = useState([
        //{ id: 1, name: "Купить хлеб", done: true },
        //{ id: 2, name: "Сходить в кино", done: false },
        //{ id: 3, name: "Поиграть на гитаре", done: false },
    ]);

    useEffect(() => {
        getData();
        return () => firebase.offTodoSocket();
    }, []);
    useEffect(() => {
        console.log("todos", data);
    }, [data]);

    const [visItem, setVisItem] = useState([data]);

    const onClickDone = (index) => {

        /*let arr =
            data.map((todo) => {
                if (todo.id === index) {
                    todo.done = !todo.done;
                }

                return todo;
            })

        setData(arr);
        setVisItem(arr);*/
        const positiveArr = Object.fromEntries(Object.entries(data).map(([key, { name, done }]) => {
            if (key === index) {
                done = !done;
                firebase.postTodo(key, { name: name, done: done });
            }
            return [key, { name, done }]}))

    }

    const onClickDel = (id) => {

        /*let arr = data.filter((todo) =>
            todo.id !== id)

        setData(arr);

        setVisItem(arr);
        setText('');*/
        firebase.deleteTodo(id);
        //getData();
    }

const getData=()=>{
    firebase.getTodoSocket((todo) => {
        setData(todo);
        setVisItem(todo);
    });
}

    const onClickAdd = (item) => {
        /*const arr = [...data];

        let max = 0;
        arr.forEach(element => {
            if (element.id > max)
                max = element.id;
        });

        arr.push({ id: ++max, name: item, done: false });

        setData(arr);

        setVisItem(arr);
        */
        firebase.addTodo({ name:item, done: false  });
        //getData();
    }

    const onClickSeacrh = (text) => {
        if (text.length === 0)
            return setVisItem(data);

        /*var positiveArr = data.filter((temp) => {
            return temp.name.toLowerCase().indexOf(text.toLowerCase()) > -1 && !temp.done
        })*/
        var positiveArr = Object.fromEntries(Object.entries(data).filter(([key, { name, done }]) => {
            return name.toLowerCase().indexOf(text.toLowerCase()) > -1
        }))

        setVisItem(positiveArr);
    }

    const [text, setText] = useState('');

    return (
        <div className={styles.div}>
            <Title />
            <FilterItem onClickSeacrh={onClickSeacrh} text={text} setText={setText} />
            <List data={visItem} onClickDone={onClickDone} onClickDel={onClickDel} />
            <AddItem onClickAdd={onClickAdd} />
        </div>
    )
}

export default App;
