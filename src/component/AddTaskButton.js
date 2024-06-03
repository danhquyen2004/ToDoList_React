import React, { useState } from 'react';
import './AddTaskButton.css';

const AddTaskButton = ({ addTask }) => {
  const [taskName, setTaskName] = useState('');
  const [priority, setPriority] = useState('Medium');

  const handleSubmit = () => {
    if (taskName) {
      const newTask = {
        id: Date.now(),
        name: taskName,
        priority: priority,
        status: 'To Do',
      };
      addTask(newTask);
      setTaskName('');
    }
  };

  return (
    <div className="add-task-button">
      <input 
        type="text" 
        value={taskName} 
        onChange={(e) => setTaskName(e.target.value)} 
        placeholder="Task name"
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <button onClick={handleSubmit}>Add Task</button>
    </div>
  );
};

export default AddTaskButton;
