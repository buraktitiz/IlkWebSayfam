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


import "./App.js";

import Header from "./components/Header"

function App() {
  return (
    <>
      <h1>Hello React!</h1>
      <Header />
      <p className="xyz">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, cum delectus quaerat fugit iusto hic libero veniam excepturi laboriosam mollitia amet impedit obcaecati necessitatibus ab. Mollitia velit cum minima? Fuga?</p>

      <label htmlFor="myinput">
        Name:
        <input id="myinput" />
      </label>
    
    

    </>
  )
}

export default App;