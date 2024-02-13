import React, { useState } from 'react';

const TodoList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Learn React', completed: false },
    { id: 2, title: 'Build a Todo App', completed: true },
    { id: 3, title: 'Practice Coding', completed: false },
  ]);
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([
        ...tasks,
        { id: Date.now(), title: newTask, completed: false },
      ]);
      setNewTask('');
    }
  };

  const toggleTask = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const todoListStyle = {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '400px',
    margin: 'auto',
    padding: '20px',
    background: 'linear-gradient(45deg, #f3e7e9, #c7d3e3)',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };

  const listItemStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  };

  const checkboxStyle = {
    marginRight: '10px',
  };

  const deleteButtonStyle = {
    marginLeft: '10px',
    padding: '5px',
    cursor: 'pointer',
    backgroundColor: '#ff6347',
    color: 'white',
    border: 'none',
    borderRadius: '3px',
  };

  return (
    <div style={todoListStyle}>
      <h2 style={{ textAlign: 'center' }}>Todo List</h2>
      <div style={{ marginBottom: '10px', textAlign: 'center' }}>
        <input
          type="text"
          value={newTask}
          onChange={handleInputChange}
          placeholder="Add a new task"
          style={{ marginRight: '10px', padding: '5px' }}
        />
        <button onClick={addTask} style={deleteButtonStyle}>
          Add
        </button>
      </div>
      {tasks.length === 0 ? (
        <p>No tasks yet. Add a task above.</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id} style={listItemStyle}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
                style={checkboxStyle}
              />
              <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                {task.title}
              </span>
              <button onClick={() => deleteTask(task.id)} style={deleteButtonStyle}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
