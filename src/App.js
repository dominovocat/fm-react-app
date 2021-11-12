import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import Aloha from "./components/Aloha";

// function App() {
// return (
//   <div className="App">
//     <header className="App-header">
//       <img src={logo} className="App-logo" alt="logo" />
//       <p>
//         Edit <code>src/App.js</code> and save to reload.
//       </p>
//       <a
//         className="App-link"
//         href="https://reactjs.org"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         Learn React
//       </a>
//     </header>
//   </div>
// );

// return <h1>Hi! JSX</h1>;
// return React.createElement('h1',null,'Hi! JSX');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          id: 1,
          fname: "Elon",
        },
        {
          id: 2,
          fname: "Rob",
        },
        {
          id: 3,
          fname: "Elly",
        },
        {
          id: 4,
          fname: "Muck",
        },
        {
          id: 5,
          fname: "Tim",
        },
        {
          id: 6,
          fname: "Le",
        },
      ],
    };
  }
  render() {
    const { users } = this.state;
    return (
      <>
        {users.map(({ fname }) => (
          <Aloha name={fname} />
        ))}
      </>
    );
  }
}

export default App;
