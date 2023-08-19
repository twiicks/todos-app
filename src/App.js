import {TodoCounter} from './TodoCounter';
import {TodoSearch} from './TodoSearch';
import {TodoList} from './TodoList';
import {TodoItem} from './TodoItem';
import {CreateTodoItem} from './CreateTodoItem';
import React from 'react';

const defaultTodos=[
  {text:'Have Lunch',completed:true},
  {text:'Learn React',completed:true},
  {text:'Play FIFA',completed:true},
  {text:'Watch Platzi',completed:true},
  {text:'Write something',completed:false},
  {text:'Buya a candy',completed:false},
  {text:'Sleep 12 hours',completed:false}
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter completed={4} total={7}/>
      <TodoSearch/>
      <TodoList>
        {defaultTodos.map(todo=>{
          return (
            <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
          )
        })}
      </TodoList>
      <CreateTodoItem/>
    </React.Fragment>
  );
}

export default App;
