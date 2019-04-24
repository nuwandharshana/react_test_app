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
    otherState:'another state value',
    showPersons:true
  }

  switchNameHandler = (newName) => {
    // this.state.persons[0].name = // dont use , react wont identify state changes to rerender dom
    this.setState({
      persons:[
        {name:newName, age:40},
        {name:"Hasantha Prabath", age:27},
        {name:"Pramith Chathuranga", age:30},
      ]
    })
  }

  changeNameHandler = (event) =>{
    this.setState({
      persons:[
        {name:"Dhanushka Rumesh", age:40},
        {name:event.target.value, age:27},
        {name:"Pramith Chathuranga", age:30},
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({
      showPersons:!doesShow
    })
  }

  render() {
    const style = {
      backgroundColor:'white',
      font:'inherit',
      border:'1px solid blue',
      padding: '2px',
      cursor: 'pointer'
    }
    return (
      //use one root element
      //bind method is more efficient than () => this.switchNameHandler('maximilian')
      <div className="App">
        <h1>I am a react app</h1>
        <button style={style} onClick={ () => this.switchNameHandler('maximilian')}>Switch Users</button>
        <button style={style} onClick={this.togglePersonsHandler}>Toggle Users</button>
        { this.state.showPersons? <div>
          <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age}/>
          <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this,'max')}
            changed={this.changeNameHandler}>My Hobbies: Racing
          </Person>
          <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age}/>
          </div> : null }
      </div>
    );
    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'I am a react app')); // actual react code example
  }
}

export default App;
