
import './App.css';
import {useState} from "react";



function App() {

  const [newTask, setTask] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleChange = (event) => {
    setTask(event.target.value);
  }

  const addTodoList = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      complete: false,
    }
    setTodoList([...todoList,task]);
  }

  const handleDelete = (id) => {

     setTodoList(todoList.filter((task) => task.id !== id) );
  }

  const completeFunction = (id) => {
    setTodoList(todoList.map((task) => {
      if(task.id === id){
        return {...task, complete: true}
      }else{
        return task;
      }
    }))
  }
  return (

    <div className="App">
     
    <div className='addTask'>
      <input onChange={handleChange}/>
      <button onClick={addTodoList}>Add Task</button>
    </div>

    <div className='listTask'>{todoList.map((task)=>{ return <div><h1>{task.taskName}</h1><button onClick={() => handleDelete(task.id)}>X</button><button onClick={() => completeFunction(task.id)} style={{color: task.complete ? "green" : "red"}}>Completed</button></div>;})}</div>
    
     
    </div>
  );
}





export default App;



