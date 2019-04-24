import React, { Component } from 'react';
import './App.css';
import Radium from 'radium';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons:[
      {id: 'asd',name:"Dhanushka", age:38},
      {id: 'amn',name:"Hasantha", age:26},
      {id: 'iuerw',name:"Pramith", age:29},
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

    person.name = event.target.value

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
    const style = {
      backgroundColor:'green',
      color:'white',
      font:'inherit',
      border:'1px solid blue',
      padding: '2px',
      cursor: 'pointer',
      ':hover':{
        backgroundColor:'lightgreen',
        color:'black'
      }
    }

    let persons = null

    const classes = []
    if(this.state.persons.length<=2){
      classes.push('red')
    }
    if(this.state.persons.length<=1){
      classes.push('bold')
    }

    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((elem,index) => {
            return <Person 
            click={() => {
              this.deletePersonHandler(index)
            }}
            name={elem.name} 
            age={elem.age}
            key={elem.id}
            changed={(event) => this.changeNameHandler(event,elem.id)}/>
          })}
        </div>
      );

      style.backgroundColor = 'red'
      style[':hover']={
        backgroundColor:'salmon',
        color:'black'
      }
    }

    return (
      //use one root element
      //bind method is more efficient than () => this.switchNameHandler('maximilian')
      <div className="App">
        <h1>I am a react app</h1>
        <p className={classes.join(' ')}>this is really working</p>
        {/* <button style={style} onClick={ () => this.switchNameHandler('maximilian')}>Switch Users</button> */}
        <button style={style} onClick={this.togglePersonsHandler}>Toggle Users</button>
        { persons }
      </div>
    );
    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'I am a react app')); // actual react code example
  }
}

export default Radium(App);
