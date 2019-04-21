import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons:[
      {name:"Dhanushka", age:38},
      {name:"Hasantha", age:26},
      {name:"Pramith", age:29},
    ],
    otherState:'another state value'
  }

  switchNameHandler = (newName) => {
    // this.state.persons[0].name = // dont use , react wont identify state changes to rerender dom
    this.setState({
      persons:[
        {name:"Dhanushka Rumesh", age:40},
        {name:newName, age:27},
        {name:"Pramith Chathuranga", age:30},
      ]
    })
  }

  render() {
    return (
      //use one root element
      //bind method is more efficient than () => this.switchNameHandler('maximilian')
      <div className="App">
        <h1>I am a react app</h1>
        <button onClick={ () => this.switchNameHandler('maximilian')}>Switch Users</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this,'max')}>My Hobbies: Racing
        </Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>
      </div>
    );
    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'I am a react app')); // actual react code example
  }
}

export default App;
