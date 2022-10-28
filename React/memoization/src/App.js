import './App.css';

import {useState,useMemo} from "react"
import Header from './components/Header'

function App() {

  const [number,setNumber]= useState(0);
  const [text,setText]= useState("");

  const data=useMemo(() =>{
    return calculateObject;
  },[]);

  /* const data = calculateObject(); */ // Her karakter girdiğinde çalışmaya başlıyor. 
  //Ve çok fazla değer olduğu zaman sayfanın çok yavaş hareket etmesine ve 
  //değerlerin çok yavaş girilmesine neden olur
  return (
    <div className="App">
      <Header number={number < 5 ? 0 : number} data={data} />
      <hr />
      <h1>{number}</h1>
      <button onClick={()=>setNumber(number+1)}>Click</button>
      <br /><br />
      <input calue={text} onChange={({target}) => setText(target.value)} />
    </div>
  );
}

function calculateObject(){
  console.log("Calculating...");
  for(let i=0;i<10;i++){}
  console.log("Calculating completed...");

  return { name: "Burak"};
}

export default App;
