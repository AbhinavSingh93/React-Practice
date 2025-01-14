import { useState } from "react";

import Todo from './Todo.jsx';

export const DUMMY_TODOS=[
  'Learn React',
  'Practice React',
  'Profit!'
];

export default function App(){
  return (
    <ul>
      {DUMMY_TODOS.map((todo,index)=>(
        <Todo key={index} text={todo} />
      ))}
    </ul>
  );
}
