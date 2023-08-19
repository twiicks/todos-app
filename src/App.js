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
  {text:'Sleep 12 hours',completed:false},
  {text:'Use a derivated state',completed:true}
];

function App() {
  const [searchValue, setSearchValue]=React.useState('');

  const [todos, setTodos]=React.useState(defaultTodos);

  let completedTodos=todos.filter(todo=>todo.completed).length;

  let totalTodos=todos.length;

  const searchedTodos=todos.filter((todo)=>{
    return todo.text.includes(searchValue)
  })


  return (
    <React.Fragment>
      <TodoCounter completed={completedTodos} total={totalTodos}/>
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList>
        {searchedTodos.map(todo=>{
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
