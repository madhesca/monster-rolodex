import React from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";

class App extends React.Component {
  state = {
    monsters: [],
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }
  render() {
    return (
      <div className="App">
        <CardList>
          {this.state.monsters.map((monster, index) => {
            return <h2 key={index}>{monster.name}</h2>;
          })}
        </CardList>
      </div>
    );
  }
}

export default App;
