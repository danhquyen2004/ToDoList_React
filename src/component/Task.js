import React from 'react';
import './Task.css';

const Task = ({ task, deleteTask, updateTaskStatus }) => {
  const handleChange = (e) => {
    updateTaskStatus(task.id, e.target.value);
  };

  return (
    <div className="task">
      <span className="task-name">{task.name}</span>
      <span className={`task-priority ${task.priority.toLowerCase()}`}>{task.priority}</span>
      <span className={`task-status ${task.status.toLowerCase().replace(" ", "-")}`}>{task.status}</span>
      <select value={task.status} onChange={handleChange}>
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>
      <button className="delete-btn" onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
};

export default Task;
