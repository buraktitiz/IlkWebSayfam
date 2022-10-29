import './App.css';

import {useState,useMemo, useCallback} from "react"
import Header from './components/Header'

function App() {

  const [number,setNumber]= useState(0);
  const [text,setText]= useState("");

  const increment= useCallback(() => {
    setNumber((prevState)=>prevState+1) // Bir önceki state'i al. Ve üzerine +1 ekle. 
    // Bu sayede her butona tıklandığında tekrardan render edilmesinden kurtuluyoruz.
    // Eğer prevState kullanmayı number+1 olarak yapsaydık aşağıdaki array'e de number eklemeliydik.
    // Ve yine de header ile render edilmeye devam edecekti. Biz prevState ile bundan kurtulmuş olduk.
  },[])

  return (
    <div className="App">
      <Header increment={increment} />

      <hr />

      <h1>{number}</h1>
      
      <br /><br />
      <input calue={text} onChange={({target}) => setText(target.value)} />
    </div>
  );
}


export default App;
