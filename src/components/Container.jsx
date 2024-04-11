import React from 'react'
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import '../App.css'

const Container = ({ tasks, onDeleteTask, onEditTask, onChangeStatusTask }) => {
    return (
      <div className="task-banner">
        {tasks.map(task => (
          <div className='container-card' key={task.id}>
                <h5 className="card-title">Title : {task.title}</h5>
                <p className="card-text">Description : {task.description}</p>
                <div className="form-group">
                  <select 
                    value={task.status} 
                    onChange={(e) => onChangeStatusTask(task.id, e.target.value)} 
                    className="form-control">
                    <option value="pending">Pending</option>
                    <option value="completed">Completed</option>
                  </select>
                </div>
                <button 
                  onClick={() => onEditTask(task.id, prompt('Enter new title:', task.title), prompt('Enter new description:', task.description))} 
                  className="edit-btn">
                  <FaEdit/>  Edit
                </button>
                <button 
                  onClick={() => onDeleteTask(task.id)} 
                  className='delete-btn'>
                  <FaRegTrashAlt />  Delete
                </button>
              </div>
        ))}
      </div>
    );
  };

export default Container