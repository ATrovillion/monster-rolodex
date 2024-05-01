import {Component} from 'react';
import './App.css';
// import { toHaveDisplayValue } from '@testing-library/jest-dom/matchers';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
    };
  };

  componentDidMount() {
    // runs the first time the component gets mounted onto the DOM
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((users) => 
        this.setState(
          () => {
            return { monsters: users }
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => {
          return <h1 key={monster.id}>{monster.name}</h1>
        })}
      </div>
    );
  }
};

export default App;
