import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TaskDetail = ({ taskId }) => {
    const [task, setTask] = useState(null);

    useEffect(() => {
        axios
            .get(`http://localhost:5000/api/tasks/${taskId}`)
            .then((res) => {
                setTask(res.data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, [taskId]);

    if (!task) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
        </div>
    );
};

export default TaskDetail;