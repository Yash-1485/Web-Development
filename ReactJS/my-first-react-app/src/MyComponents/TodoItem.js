import React from 'react'

const TodoItem = ({todo, key, onDelete}) => {
  return (
    <div className='my-2 p-2'>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button type="button" className="btn btn-danger btn-sm" onClick={()=>{onDelete(todo)}}>Delete</button>
    </div>
  )
}

export default TodoItem
