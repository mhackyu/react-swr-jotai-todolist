import React, { useState } from 'react';

import useTodo from '../hooks/useTodo';

function TodoForm() {
  const { addTodo, isSubmitting, isSubmitError } = useTodo();
  const [title, setTitle] = useState('');

  const onChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addTodo(title);
    if (!isSubmitError) setTitle('');
  };

  return (
    <form className="mt-6 flex justify-between" onSubmit={handleSubmit}>
      <input
        className="flex-1 px-4 py-3 outline-none rounded-l-lg shadow-md"
        value={title}
        onChange={onChange}
        placeholder="Add your todo here"
        disabled={isSubmitting}
      />
      <button
        className="px-8 py-3 bg-cyan-500 rounded-r-lg shadow-md text-white"
        type="submit"
        disabled={isSubmitting}
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
