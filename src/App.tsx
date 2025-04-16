import './App.css';
import { useState } from 'react';

interface Todo{
  id:number,
  content:string
}

function App() {

  const [text, setText]=useState<string>('')
  const [todos, setTodos]=useState<Todo[]>([])

  const onChangeInput =(e:React.ChangeEvent<HTMLInputElement>)=>{
    setText(e.target.value)

  }
  return (
    <div className="App">
      <h1>Todo</h1>

      <input type="text" onChange={onChangeInput} value={text}/>
    </div>
  );
}

export default App;
