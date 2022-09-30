import {useState} from 'react';

function App() {
  const [name, setName]=useState("Burak");
  const [age, setAge]=useState(32);
  return (
    <div className="App">
      <h1>Merhaba {name}</h1>
      <h2>{age}</h2>
      <button onClick={() =>setName("Deagle")}>Click</button>
      <button onClick={() =>setAge("16")}>Click</button>
    </div>
  );
}

export default App;
