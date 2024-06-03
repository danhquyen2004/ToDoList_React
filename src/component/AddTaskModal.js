import React, { useState } from 'react';
import './AddTaskModal.css';

const AddTaskModal = ({ addTask, closeModal }) => {
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
      closeModal();
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <h2>Add Task</h2>
        <div className="modal-body">
          <label>Task</label>
          <input 
            type="text" 
            value={taskName} 
            onChange={(e) => setTaskName(e.target.value)} 
            placeholder="Type your task here..."
          />
          <label>Priority</label>
          <div className="priority-options">
            <button className={priority === 'High' ? 'active' : ''} onClick={() => setPriority('High')}>High</button>
            <button className={priority === 'Medium' ? 'active' : ''} onClick={() => setPriority('Medium')}>Medium</button>
            <button className={priority === 'Low' ? 'active' : ''} onClick={() => setPriority('Low')}>Low</button>
          </div>
          <button className="add-btn" onClick={handleSubmit}>Add</button>
        </div>
      </div>
    </div>
  );
};

export default AddTaskModal;
