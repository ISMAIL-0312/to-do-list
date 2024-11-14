import React, { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
      setTask('');
    }
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className='container bg-danger'>
      <div className='container d-flex justify-content-center'>
        <h1 className=''>To-Do List</h1>
      </div>

      <div className='container d-flex justify-content-center p-3'>
        <input className='form-control'
        type="text"
        placeholder="Enter a new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
        <button className='btn btn-primary' onClick={addTask}>Add Task</button>
      </div>

      <div className='container'>
      <ul className='text-white m-5 '>
          {tasks.map((task) => (
            <li className=' ml-5 ' key={task.id} style={{ textDecoration: task.completed ? 'line-through' : 'none'}}>
              {task.text}

                <button className='btn btn-info p-2 m-1' onClick={() => toggleComplete(task.id)}>
                  {task.completed ? 'Undo' : 'Complete'}
                </button>
                <button className='btn btn-success p-2 m-1' onClick={() => deleteTask(task.id)}>Delete</button>

            </li>
          ))}
      </ul>
      </div>
      
      
    </div>
  );
}

export default App;
