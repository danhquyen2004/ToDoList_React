import React, { useState } from 'react';
import Task from './Task';
import AddTaskModal from './AddTaskModal';
import './TaskList.css';

const initialTasks = [
  { id: 1, name: 'Go to gym', priority: 'High', status: 'To Do' },
  { id: 2, name: 'Read a book', priority: 'Low', status: 'Done' },
  { id: 3, name: 'Go to market', priority: 'Medium', status: 'In Progress' },
];

const TaskList = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const updateTaskStatus = (taskId, status) => {
    setTasks(tasks.map(task => task.id === taskId ? { ...task, status } : task));
  };

  return (
    <div className="task-list-container">
      <h1>Task List</h1>
      <button className="add-task-btn" onClick={() => setIsModalOpen(true)}>+ Add Task</button>
      {tasks.map(task => (
        <Task key={task.id} task={task} deleteTask={deleteTask} updateTaskStatus={updateTaskStatus} />
      ))}
      {isModalOpen && <AddTaskModal addTask={addTask} closeModal={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default TaskList;
