import logo from "./logo.svg";
import "./App.css";
import React from "react";
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
  
  class App extends Component(){
    constructor(props){
      super(props);
      this.state = {
        fname:'Elon',
        sname:'Musk'
      }
    }
    render(){
      const {fname} = this.state;
      return <>
      <Aloha name={fname}
      </>
    }
  }

export default App;
