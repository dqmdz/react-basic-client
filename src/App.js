import React from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import TaskDetail from './TaskDetail';

const App = () => {
    return (
        <div>
            <TaskList />
            <TaskForm />
            <TaskDetail taskId={1} />
        </div>
    );
};

export default App;
