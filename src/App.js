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
      isDirection: true,
      isAlphabet: true,
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
  sortUsers = () => {
    const { users, isDirection, isAlphabet } = this.state;
    const sortUsers = JSON.parse(JSON.stringify(users));
    // const sortUsers = [...users];
    sortUsers.sort((prev, next) =>
      isDirection ? next.id - prev.id : prev.id - next.id
    );
    sortUsers.sort((a, b) =>
      isAlphabet ? a.fname > b.fname : b.fname < a.fname
    );
    this.setState({
      isAlphabet: !isAlphabet,
      isDirection: !isDirection,
      users: sortUsers,
    });
  };
  render() {
    const { users, isDirection, isAlphabet } = this.state;
    return (
      <>
        <p>
          {isDirection ? "straight" : "reverse"}
          <button onClick={this.sortUsers}>SORT by id</button>
        </p>
        <p>
          {isAlphabet ? "straight" : "reverse"}
          <button onClick={this.sortUsers}>SORT by Name</button>
        </p>
        {users.map(({ id, fname }) => (
          <Aloha name={fname} key={id} id={id} />
        ))}
      </>
    );
  }
}

export default App;
