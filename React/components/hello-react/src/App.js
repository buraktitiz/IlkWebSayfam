// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import "./App.css";

import User from "./components/User";

const friends = [
  {
    id:1,
    name:"Ahmet",
  },
  {
    id:2,
    name:"Mehmet",
  },
  {
    id:3,
    name:"Ayşe",
  },
];

function App() {
  return (
    <>
    <User name="Burak" surname="TİTİZ" isLoggedIn={true} age={32} friends={friends}/>
    </>
  );
}

export default App;