import React from 'react';

import TodoListItem from './TodoListItem';

function TodoList({ todos }) {
  return (
    <ul className="bg-white h-72 mt-3 rounded-lg shadow-md overflow-y-scroll divide-y">
      {todos.map((todo) => (
        <TodoListItem key={todo.id}>{todo.title}</TodoListItem>
      ))}
    </ul>
  );
}

export default TodoList;
