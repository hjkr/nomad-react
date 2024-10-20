
import { useState, useEffect } from "react";



function App() {
  const [toDo, setToDo] = useState('');
  const [toDos, setToDos] = useState([])
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") return;

    setToDos((currentToDos) => [toDo, ...currentToDos])
    setToDo("")
  };

  return (
    <div>
      <h1>My Todos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input 
          onChange={onChange} 
          value={toDo} 
          type="text" 
          placeholder="Write your todos ..." 
        />
        <button>
          Add Todos
        </button>
      </form>
      <hr />
      {toDos.map((todo, index)=><li key={index}>{todo}</li> )}
    </div>
  );
}

export default App;
