import './App.css';
import Task from './components/Task';
import React, {useState} from 'react';

function App() {

  const[taskState, setTaskState] = useState({
    tasks:[
      {title:"Dishes", description: "Empty dishwasher", deasdline: "Today"},
      {title: "Laundry", descripion: "Fold clothes and put away", deadline: "Tomorrow"},
      {title: "tidy up", deadline: "Today"}
    ]
  });

  return(
    <div className="container">
      <h1>Tasky</h1>
      {taskState.tasks.map((task) => (
        <Task title={task.title} description={task.description} deadline={task.deadline}/>
      ))}
      </div>
  )
}

export default App;
