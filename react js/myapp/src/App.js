import React, { useState } from "react";
import Todos from "./components/Todos";

function App() {
  const[todos,setTodos] = useState([
  {id:1,text:"Buy Apples",status:true},
  {id:2,text:"Buy Pineapple",status:false},
  {id:3,text:"Buy Kiwi",status:true},
  {id:4,text:"Buy Orange",status:false},
  {id:5,text:"Buy Watermelon",status:false},
]);
   const toggleTodo =(e) =>{
    console.log (e)
    setTodos(
    todos.map((todo)=> todo.id==e.id ? {...todo,status:!e.status} : todo
    )
    )
   };
  return ( 
    <div>
    <h1>Todos</h1>
    
    
    <Todos list={todos} onToggle={toggleTodo}/>
    </div>  
     
  );
  }

export default App;