import React from 'react';

const Task = (props) => {
    
    return (
        <div>
            <p>{props.title}</p>
            <p>Due: {props.deadline}</p>
        </div>
    )
}

export default Task;
