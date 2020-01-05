import React, { Component } from 'react';

import { CardList } from './component/card-list/card-list.component'; 
import { SearchBox } from './component/search-box/search-box.component'; 

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      grp: [],
      searchField: '' 
    };
  }

  componentDidMount() {
    fetch('https://choisirmongroupement.com/json_groupements.php')
    .then(response => response.json())
    .then(users => this.setState({grp : users}))
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  }

  render () {
    const { grp, searchField } = this.state;
    const filtered = grp.filter(grp => grp.name.toLowerCase().includes(searchField.toLowerCase()))

    return (
      <div className="App">
      <h1>Liste des groupements</h1>
      <SearchBox placeholder="Rechercher un groupement" handleChange={this.handleChange}/>
      <CardList grp={filtered} />
      </div>
    );
  }
}

export default App;
