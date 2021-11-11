import {Component} from "react";

class Greeting extends Component {
  render(){
    const {name, hello} = this.props;
    return <h2>{hello},{name}!</h2>
  }
}

export default Greeting;
