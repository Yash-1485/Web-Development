import './App.css';
import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';
import Footer from './MyComponents/Footer';
import React, { useState } from 'react';

function App() {
  const onDelete = (todo) => {
    // console.log('Todo',todo)
    setTodos(todos.filter((t)=>{
      return t!=todo;
    }));
  }

  const [todos, setTodos] = useState(
    [
      {
        srn: 1,
        title: 'TodoItem1',
        desc: 'Description 1'
      },
      {
        srn: 2,
        title: 'TodoItem2',
        desc: 'Description 2'
      },
      {
        srn: 3,
        title: 'TodoItem3',
        desc: 'Description 3'
      },
  ]);
  return (
    <>
      <Header title="My Todos List" searchBar={true}/>
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer/>
    </>
  );
}

export default App;
