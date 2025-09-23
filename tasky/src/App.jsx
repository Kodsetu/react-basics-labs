import './App.css';
import Task from './components/Task';
import React, {useState} from 'react';

function App() {

  const[taskState, setTaskState] = useState({
    tasks:[
      {id: 1, title:"Dishes", description: "Empty dishwasher", deasdline: "Today", priority: "Low"},
      {id: 2, title: "Laundry", descripion: "Fold clothes and put away", deadline: "Tomorrow", priority: "Medium"},
      {id: 3, title: "tidy up", deadline: "Today", priority: "High"}
    ]
  });

  return(
    <div className="container">
      <h1>Tasky</h1>
      {taskState.tasks.map((task) => (
        <Task title={task.title} 
          description={task.description} 
          deadline={task.deadline}
          key={task.id}
          priority={task.priority}
        />
      ))}
      </div>
  )
}

export default App;
