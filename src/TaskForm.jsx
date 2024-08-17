import React, { useState } from 'react';
import useTaskStore from './store';

const TaskForm = () => {
  const addTask = useTaskStore((state) => state.addTask);
  const [taskName, setTaskName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskName) return;

    addTask({
      id: Date.now(),
      name: taskName,
      status: 'pending',
    });
    setTaskName('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex">
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Add a new task"
        className="flex-1 p-2 border border-dark-border rounded-l-md bg-black text-white placeholder-gray-400"
      />
      <button
        type="submit"
        className="p-2 bg-blue-500 text-white rounded-r-md"
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
