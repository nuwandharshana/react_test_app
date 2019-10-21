import React, { Component } from 'react';//React is the default import, component is the named import
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons:[
      {id: 'asd',name:"Dhanushka", age:38},
      {id: 'amn',name:"Hasantha", age:26},
      {id: 'iuerw',name:"Aruna", age:29},
    ],
    otherState:'another state value',
    showPersons:false
  }

  // switchNameHandler = (newName) => {
  //   // this.state.persons[0].name = // dont use , react wont identify state changes to rerender dom
  //   this.setState({
  //     persons:[
  //       {name:newName, age:40},
  //       {name:"Hasantha Prabath", age:27},
  //       {name:"Pramith Chathuranga", age:30},
  //     ]
  //   })
  // }

  changeNameHandler = (event,id) =>{
    const personIndex = this.state.persons.findIndex(elem =>{
      return elem.id === id
    })

    const person = { ...this.state.persons[personIndex] }

    person.name = event.target.value//get input value

    const persons  = [...this.state.persons]

    persons[personIndex] = person

    this.setState({
      persons:persons
    })
  }

  deletePersonHandler = (index) => {
    // const persons = this.state.persons // const can be used because person just hold a reference but its a bad practice(mutating original array)
    // const persons = this.state.persons.slice() // slice without parameters will give new array
    const persons = [...this.state.persons] // using spread operator
    persons.splice(index,1)
    this.setState({persons:persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({
      showPersons:!doesShow
    })
  }

  render() {

    let persons = null


    if(this.state.showPersons){
      persons = (
        <div>
          <Persons persons={this.state.persons} changed={this.changeNameHandler} delete={this.deletePersonHandler}/>
        </div>
      );
    }

    return (
      //use one root element
      //bind method is more efficient than () => this.switchNameHandler('maximilian')
        <div className={classes.App}>
          <Cockpit persons={this.state.persons} showpersons={this.state.showPersons} click={this.togglePersonsHandler}/>
          { this.state.showPersons? <div><Persons persons={this.state.persons} changed={this.changeNameHandler} delete={this.deletePersonHandler}/>
        </div>: null }
        {/* {persons} */}
        </div>
    );
    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'I am a react app')); // actual react code example
  }
}

export default App;
