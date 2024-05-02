import {Component} from 'react';
import './App.css';
import CardList from './components/card-list/CardList.component';
import SearchBox from './components/search-box/SearchBox.component';
// import { toHaveDisplayValue } from '@testing-library/jest-dom/matchers';


class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
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
          }
        )
      );
  }

  onSearchChange = (event) => {
    console.log(event.target.value)
    const searchField = event.target.value.toLowerCase();

    this.setState(() => {
      return { searchField };
    })
  }

  render() {

    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField)
    });

    return (
      <div className="App">
        <h1 className='app-title'>Monsters Rolodex</h1>
        <SearchBox
          className='search-box'
          placeholder='search monsters'
          onChangeHandler={onSearchChange}
        />
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
};

export default App;
