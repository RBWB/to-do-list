import React, { useState } from 'react';
import useTaskStore from './store';

const TaskList = () => {
  const tasks = useTaskStore((state) => state.tasks);
  const updateTask = useTaskStore((state) => state.updateTask);
  const deleteTask = useTaskStore((state) => state.deleteTask);
  const [filter, setFilter] = useState('all');

  const handleStatusChange = (id, status) => {
    const task = tasks.find((task) => task.id === id);
    if (task) {
      updateTask(id, { ...task, status });
    }
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'all') return true;
    return task.status === filter;
  });

  return (
    <div>
      <div className="mb-4 flex justify-between">
        <button
          onClick={() => setFilter('all')}
          className={`p-2 ${filter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300'}`}
        >
          All
        </button>
        <button
          onClick={() => setFilter('pending')}
          className={`p-2 ${filter === 'pending' ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300'}`}
        >
          Pending
        </button>
        <button
          onClick={() => setFilter('completed')}
          className={`p-2 ${filter === 'completed' ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300'}`}
        >
          Completed
        </button>
      </div>
      <ul>
        {filteredTasks.map((task) => (
          <li key={task.id} className="flex justify-between items-center p-2 border-b border-dark-border">
            <span className={task.status === 'completed' ? 'line-through' : ''}>
              {task.name}
            </span>
            <div>
              {task.status === 'pending' && (
                <button
                  onClick={() => handleStatusChange(task.id, 'completed')}
                  className="p-2 bg-green-500 text-white rounded-md mr-2"
                >
                  Complete
                </button>
              )}
              <button
                onClick={() => deleteTask(task.id)}
                className="p-2 bg-red-500 text-white rounded-md"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
