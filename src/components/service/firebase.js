import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAymyP-nAxIScE0uhmGXJa1An9n1I3HAoY",
    authDomain: "todo-6aa4c.firebaseapp.com",
    databaseURL: "https://todo-6aa4c-default-rtdb.firebaseio.com",
    projectId: "todo-6aa4c",
    storageBucket: "todo-6aa4c.appspot.com",
    messagingSenderId: "699757841393",
    appId: "1:699757841393:web:17cfac3dbd726c695c9250",
    measurementId: "G-KG6WJNDHQ5"
};

firebase.initializeApp(firebaseConfig);

class Firebase {
  constructor() {
    this.fire = firebase;
    this.database = this.fire.database();
  }

  getTodoSocket = (cb) => {
    this.database.ref("data").on("value", (snap) => {
      cb && cb(snap.val());
    });
  };

  offTodoSocket = () => {
    this.database.ref("data").off();
  };

  postTodo = (key, todo) => {
    this.database.ref("data/" + key).set(todo);
  };

  addTodo = (data) => {
    const newKey = this.database.ref().child("data").push().key;
    this.database.ref("data/" + newKey).set(data);
  };

  deleteTodo = (key) => {
    this.database.ref("data/" + key).remove();
  };
}

export default Firebase;