import './App.css';
import Task from './components/Task';
import React, {useState} from 'react';
import AddTaskForm from './components/Form';
import {v4 as uuid4} from 'uuid';

function App() {

  const[taskState, setTaskState] = useState({
    tasks:[
      {id: 1, title:"Dishes", description: "Empty dishwasher", deasdline: "Today", priority: "Low", done: false},
      {id: 2, title: "Laundry", descripion: "Fold clothes and put away", deadline: "Tomorrow", priority: "Medium", done: false},
      {id: 3, title: "tidy up", deadline: "Today", priority: "High", done: false}
    ]
  });

  const doneHandler = (taskIndex) => {
    const tasks = [...taskState.tasks];
    tasks[taskIndex].done = !tasks[taskIndex].done;
    setTaskState({tasks});
  }

  const deleteHandler = (taskIndex) => {
    const tasks= [...taskState.tasks];
    tasks.splice(taskIndex, 1);
    setTaskState({tasks});
  }

  const[formState,setFormState] = useState({
    title: "",
    descripion: "",
    deadline: ""
  });

  const formChangeHandler = (event) =>{
    let form = {...formState};
    switch(event.target.name){
      case "title":
        form.title = event.target.value;
        break;
      case "description":
        form.description = event.target.value;
        break;
      case "deadline":
        form.deadline = event.target.value;
        break;
      default:
        form = faormState;
    }
    setFormState(form);
  }
  console.log(formState);
  
  const formSubmitHandler = (event) => {
    event.preventDefault();

    const tasks = [...taskState.tasks];
    const form = {...formState};

    form.id = uuid4();

    tasks.push(form);
    setTaskState({tasks});
  } 

  return(
    <div className="container">
      <h1>Tasky</h1>
      {taskState.tasks.map((task, index) => (
        <Task 
          title={task.title} 
          description={task.description} 
          deadline={task.deadline}
          key={task.id}
          priority={task.priority}
          done={task.done}
          markDone={() => doneHandler(index)}
          deleteTask = {() => deleteHandler(index)}
        />
      ))}
      <AddTaskForm submit={formSubmitHandler} change={formChangeHandler}/>
    </div>
  )
}

export default App;
