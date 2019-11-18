import React, { PureComponent } from 'react';//React is the default import, component is the named import
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Aux';
import withClass from '../hoc/withClass';

export const AuthContext = React.createContext(false);{/*make available outside of the class*/}

class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log('[App.js] inside constructor', props);
    this.state = {
      persons: [
        { id: 'asd', name: "Dhanushka", age: 38 },
        { id: 'amn', name: "Hasantha", age: 26 },
        { id: 'iuerw', name: "Aruna", age: 29 },
      ],
      otherState: 'another state value',
      showPersons: false,
      toggleClicked:0,
      authenticated:false
    }
  }
  // modern versions will work this way but older react versions use constructor define state
  // state = {
  //   persons:[
  //     {id: 'asd',name:"Dhanushka", age:38},
  //     {id: 'amn',name:"Hasantha", age:26},
  //     {id: 'iuerw',name:"Aruna", age:29},
  //   ],
  //   otherState:'another state value',
  //   showPersons:false
  // }

  componentWillMount() {
    console.log('[App.js] inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[App.js] inside componentDidMount()');
  }

  //purecomponent will handle shouldComponentUpdate by checkin values, when it used cannot implement shouldComponentUpdate manually
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[UPDATE App.js] inside shouldComponentUpdate()', nextProps, nextState);
  //   return nextState.persons !== this.state.persons || nextState.showPersons !== this.state.showPersons;// will trigger render function only there is ana change, this condition works because change values in immutable way
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] inside componentWillUpdate()', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('[UPDATE App.js] inside componentDidUpdate()');
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

  changeNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(elem => {
      return elem.id === id
    })

    const person = { ...this.state.persons[personIndex] }

    person.name = event.target.value//get input value

    const persons = [...this.state.persons]

    persons[personIndex] = person

    this.setState({
      persons: persons
    })
  }

  deletePersonHandler = (index) => {
    // const persons = this.state.persons // const can be used because person just hold a reference but its a bad practice(mutating original array)
    // const persons = this.state.persons.slice() // slice without parameters will give new array
    const persons = [...this.state.persons] // using spread operator
    persons.splice(index, 1)
    this.setState({ persons: persons })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState((prevState, props) => {
      return {
        showPersons: !doesShow,
        toggleClicked:prevState.toggleClicked+1 //since setState fn call is an async fn, we need to use prevState
      }
    })
  }

  loginHandler = () => {
    this.setState({authenticated:true});
  }

  render() {
    console.log('[App.js] inside render()');
    let persons = null


    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons persons={this.state.persons} changed={this.changeNameHandler} delete={this.deletePersonHandler} />
        </div>
      );
    }

    return (
      //use one root element
      //bind method is more efficient than () => this.switchNameHandler('maximilian')
      <Aux>
        <button onClick={()=>this.setState({showPersons:true})}>show persons</button>
        <Cockpit appTitle={this.props.appTitle} persons={this.state.persons} showpersons={this.state.showPersons} click={this.togglePersonsHandler} login={this.loginHandler} />
        {this.state.showPersons ? <div><AuthContext.Provider value={this.state.authenticated}><Persons persons={this.state.persons} changed={this.changeNameHandler} delete={this.deletePersonHandler} /></AuthContext.Provider>{/*provide auth context*/}
        </div> : null}
        {/* {persons} */}
      </Aux>
    );
    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'I am a react app')); // actual react code example
  }
}

export default withClass(App,classes.App);
