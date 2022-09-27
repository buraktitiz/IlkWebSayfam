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

const name="Burak"
const surname="TİTİZ"
const isLoggedIn = true;

function App() {
  return (
    <>
      {/* <h1>{name} {surname}</h1> */}
      <h1>{isLoggedIn ? `Benim adım ${name}, soyadım ${surname}`:"Giriş yapmadınız"}</h1>
      {/* isLoggedIn ? ifadesi true ise ilk belirtileni yap,
          : ifadesi false ise diğer belirtileni yap*/}
    </>
  )
}

export default App;