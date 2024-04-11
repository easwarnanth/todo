import React, { useState } from 'react';
import '../App.css'
const AddTask = ({ onAddTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('pending');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleAddTask = () => {
    onAddTask({ title, description, status });
    setTitle('');
    setDescription('');
    setStatus('pending');
  };

  return (
    <div className="input-container">
      <form>
        <input type="text" 
                placeholder="Enter Title" 
                value={title} 
                onChange={handleTitleChange} />
        <input type="text" 
                placeholder="Enter Description" 
                value={description} 
                onChange={handleDescriptionChange} />
      <div className='submit'>
        <select value={status} 
                onChange={handleStatusChange}>
          <option value="all">
            All
            </option>
          <option value="completed">
            Completed
            </option>
          <option value="pending">
            Pending
            </option>
        </select>
        <button className="btn" type="button" onClick={handleAddTask}>
            Add Task
            </button>
            </div>
      </form>
    </div>
  );
};

export default AddTask;