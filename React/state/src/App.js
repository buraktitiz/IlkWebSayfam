import {useState} from 'react';

function App() {
  const [name, setName]=useState("Burak");
  const [age, setAge]=useState(32);
  const [friends, setFriends]=useState(["Ahmet","Mehmet"]);

  return (
    <div className="App">
      <h1>Merhaba {name}</h1>
      <h2>{age}</h2>

      <button onClick={() =>setName("Deagle")}>Click</button>
      <button onClick={() =>setAge("16")}>Click</button>

      <hr /><br />

      <h2>Friends</h2>
      {friends.map((friend,index) =>(
      <div key={index}>{friend}</div>
      ))}

        <br />

        <button onClick={() =>setFriends([...friends,"Ayşe"])}>add new friend</button>

    </div>
  );
}

export default App;
