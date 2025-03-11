import React from 'react'
import TodoItem from './TodoItem'

export const Todos = ({todos, onDelete}) => {
  return (
    <div className="container">
      <h3 className='text-center'>Todos List</h3>
      {todos.length!==0?todos.map((todo)=>{
        return <TodoItem todo={todo} key={todo.srn} onDelete={onDelete}/>
      }):"No todos to display"}
    </div>
  )
}

export default Todos
