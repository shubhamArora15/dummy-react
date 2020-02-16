import React, { Component } from 'react';
// import logo from './logo.svg';
// separete logo based component

import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
// seprate css file

class App extends Component {
  constructor() {
    super(); // to call the constructor everytime class load
    this.state = {
      string: '',
      users: []
    } // manage the data on every event triggered or not

    // this.handleChange = this.handleChange.bind(this);
    // to tel the scope of window or class component need to bind with custom "handle change method"
    // or we can use arrow function representation for our custom method to tell window bind this scope to this funciton ass well
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response =>
        response.json()
      ).then(users => this.setState({ users: users })).catch(err => {

      })
  }

  // arrow functions helps to trigger this for custom method when ever call
  handleChange = (e) => {
    this.setState({ string: e.target.value });
  }

  // Main function triggere  to update virtual DOM
  render() {
    const { string, users } = this.state;
    const filteredUsers = users.filter(user => {
      return user.name.toLowerCase().includes(string.toLowerCase());
    })
    return (
      <div className="App">
        <h1 className = "main">Agenda Users!</h1>
        <SearchBox placeholder="SearchBox Users"
          handleChange={this.handleChange}>
        </SearchBox>
        <CardList users={filteredUsers}>
        </CardList>
      </div>
      //  JSX syntax!
    );
  }
}

export default App;
