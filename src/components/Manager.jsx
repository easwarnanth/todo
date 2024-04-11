import React, {useState} from "react";
import AddTask from "./Addtask";
import Container from "./Container.jsx"
import '../App.css'

const Manager = () =>{

    const [tasks, setTasks] = useState([]);
    const [statusFilter, setStatusFilter] = useState('all');

    const handleAddTask = (newTask) => {
        const updatedTask = [...tasks, {...newTask, id: Date.now()}];
        setTasks(updatedTask)
    }


    const handleDeleteTask = (taskId) =>{
        setTasks(tasks.filter(task =>task.id !== taskId))
    }

    const handleEditTask =(taskId, newTitle, newDescription) =>{
        const updatedTask = tasks.map(tasks =>{
            if (task.id === taskId){
                return{
                    ...task,
                    title: newTitle,
                    description: newDescription
                };
            }
            return task;
        })
        setTasks(updatedTask)
    }

    const handleStatusChangeTask = (taskId, newStatus) =>{
        const updatedTasks = tasks.map(task => {
            if (task.id === taskId) {
              return {
                ...task,
                status: newStatus
              };
            }
            return task;
          });
          setTasks(updatedTasks);
    }

    const handleStatusChangeFilterTask = (e) =>{
        setStatusFilter(e.target.value)
    }

    const filteredTasks = statusFilter === 'all' ? tasks : tasks.filter(task => task.status === statusFilter);

    return(<>
    <div className="content-area">
        <h1 className="title">My Todo's</h1>
        <div>
            <AddTask onAddTask={handleAddTask}/>
        </div>
    </div>
    <select className="scroll-btn" value={statusFilter} onChange={handleStatusChangeFilterTask}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="Pending">Pending</option>
    </select>
    <div>
        <Container tasks={filteredTasks} 
        onDeleteTask={handleDeleteTask}
        onChangeStatusTask={handleStatusChangeTask}/>
    </div>
    
    </>)
}

export default Manager