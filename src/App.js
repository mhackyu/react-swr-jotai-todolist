import useTodo from './hooks/useTodo';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {
  const { data, isLoading, isError, isSubmitError } = useTodo();

  if (isError) return <p>Something went wrong...</p>;

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500">
      <main className="container min-h-screen max-w-4xl mx-auto py-4">
        <h1 className="text-white text-4xl font-bold">Todo App</h1>
        <TodoForm />
        {isSubmitError && (
          <p className="mt-1 text-yellow-400 text-sm">Failed to add todo</p>
        )}
        <TodoList todos={data?.todos || []} />
      </main>
    </div>
  );
}

export default App;
