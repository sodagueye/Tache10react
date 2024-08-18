import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import './App.css';
import { useState } from 'react';

function App() {
  const [todo , setTodo]= useState("")
  const [todolist ,setTodoList]=useState([])
  const addTodo=(e)=>{
    e.preventDefault()
   const newTodo={id:Math.floor(Math.random() *1000),
    value:todo
    }
    setTodoList(prev => [...prev,newTodo])
    console.log(todo)
    // setTodoList(todo)
    setTodo('')

   }
  // functon supprimer
  const deleteTodo = (todoId)  => {
    const newTodos= todolist.filter(todo =>todo.id !== todoId)
    setTodoList(newTodos)
  }
  return (
    <div className='w-50 mx-auto py-5'>
      <h1>Todo list</h1>
      <form onSubmit={addTodo}>
  <div className="mb-3">
    <label  className="form-label">Todo</label>
    <input type="text" className="form-control"  aria-describedby="emailHelp" value={todo} onChange={(e)=> {
      // console.log(e.target.value)
      setTodo(e.target.value)}}/>
    
  </div>
  
 <button type="submit" className="btn btn-primary w-100">Submit</button>
</form>
<h1 className='mt-5'>Listes des taches à faire</h1>
<ul className='p-0 list-group'>
  {
     todolist.length ?
    todolist.map( todo =>{
      return <div className='d-flex gap-2 mt-3 justify-content-between list-group-item ' key={todo.id}>
      <li  className=''>{todo.value}</li>
      <button onClick={() => deleteTodo(todo.id)}>x</button></div>
    }) :<span className='text-danger'>Pas encore de todo</span>
  }
</ul>
    </div>
   
  );
}

export default App;
