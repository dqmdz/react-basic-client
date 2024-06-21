import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import BACKEND from './config';

const App = () => {

    const [task, setTask] = useState({
        title: '',
        description: ''
    });

    const [tasks, setTasks] = useState([]);

    const [listUpdated, setListUpdated] = useState(false);

    useEffect(() => {
        const fetchTasks = () => {
            const url = `${BACKEND}/tasks`;
            console.log(url);
            axios.get(url)
                .then((response) => {
                    setTasks(response.data);
                })
        };
        fetchTasks();
        setListUpdated(false)
    }, [listUpdated]);

    const addTask = (newTask) => {
        setTasks([...tasks, newTask]);
    };

    return (
        <Fragment>
            <Navbar brand="Task app" />
            <div className="container">
                <div className='row'>
                    <div className='col-7'>
                        <h2 style={{ textAlign: 'center' }}>Task List</h2>
                        <TaskList task={task} setTask={setTask} tasks={tasks} setListUpdated={setListUpdated} />
                    </div>
                    <div className='col-5'>
                        <h2 style={{ textAlign: 'center' }}>Task Form</h2>
                        <TaskForm task={task} setTask={setTask} addTask={addTask} />
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default App;
