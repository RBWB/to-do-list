import React from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

const App = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-dark-background">
      <div className="max-w-md w-full p-4 border border-dark-border rounded-md shadow-lg bg-black text-white">
        <h1 className="text-2xl font-bold mb-4 text-center">Task Manager</h1>
        <TaskForm />
        <TaskList />
      </div>
    </div>
  );
};

export default App;
