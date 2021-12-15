import { Button } from "@material-ui/core";
import { projectFirestore } from "../firebase/config"
import firebase from "firebase";
import TodoListItem from "../components/Todo";
import { TextField } from '@material-ui/core';
import React, {useState, useEffect} from 'react';


function App() {
    const [todos, setTodos] = useState([]);
    const [todoInput, setTodoInput] = useState("");
  
    useEffect(() => {
      getTodos();
    }, []); 
  
    function getTodos() {
      projectFirestore.collection("todos").onSnapshot(function (querySnapshot) {
        setTodos(
          querySnapshot.docs.map((doc) => ({
            id: doc.id,
            todo: doc.data().todo,
            inprogress: doc.data().inprogress,
          }))
        );
      });
    }
  
    function addTodo(e) {
      e.preventDefault();
  
      projectFirestore.collection("todos").add({
        inprogress: true,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        todo: todoInput,
      });
  
      setTodoInput("");
    }
  
    return (
      <div className="App">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <h1> List Board </h1>
          <form>
            <TextField
              id="standard-basic"
              label="list Board"
              value={todoInput}
              style={{ width: "40vw", height: "40vh", maxWidth: "500px", fontSize: "10px", position: "relative" }}
              onChange={(e) => setTodoInput(e.target.value)}
            />
            <Button
              type="submit"
              variant="contained"
              onClick={addTodo}
              style={{ display: "none" }}
            >
              기본값
            </Button>
          </form>
  
          <div style={{ width: "90vw", maxWidth: "500px", marginTop: "-240px" }}>
            {todos.map((todo) => (
              <TodoListItem
                todo={todo.todo}
                inprogress={todo.inprogress}
                id={todo.id}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  export default App;