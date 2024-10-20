
import Button from "./Button"
import styles from "./App.module.css"
import { useState, useEffect } from "react";
let times = 0;

function App() {

  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => {    
    setValue((prev) => prev + 1);
  }
  const onChange = (event) => setKeyword(event.target.value);

  console.log("I run all the time!!!");
  const iRunOnlyOnce = () => console.log("I run only once!!!");


  useEffect(iRunOnlyOnce, []);
  useEffect(() => {
    if(keyword !== "" && keyword.length > 5)
      console.log("I search for", keyword);
  },[keyword])
  
  useEffect(() => {
      console.log("keyword & counter");
  },[keyword, counter])

  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search here..."/>
      <h3>{counter}</h3>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
}

export default App;
