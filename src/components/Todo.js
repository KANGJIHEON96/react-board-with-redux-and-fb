import { ListItem, ListItemText, Button } from "@material-ui/core";
import { projectFirestore } from "../firebase/config"
import React from 'react';





export default function TodoListItem({ todo, id }) {
    function deleteTodo() {
        projectFirestore.collection("todos").doc(id).delete();
    }

    
            

    return (  <>
      
      <div style={{ display: "flex" }}>
        <ListItem>
          <ListItemText
            primary={todo}
            />
        </ListItem>
  
        <Button onClick={deleteTodo}>X</Button>
      </div>
      </>
    );
  }
