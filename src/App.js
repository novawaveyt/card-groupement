import React, { Component } from 'react';

import { CardList } from './component/card-list/card-list.component'; 

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

  render () {
    const { grp, searchField } = this.state;
    

    return (
      <div className="App">
      <h1>Liste des groupements</h1>
      <CardList grp={this.state.grp} />
      </div>
    );
  }
}

export default App;
