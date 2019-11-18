import React from 'react';
import classes from './Cockpit.css';
import Aux from '../../hoc/Aux'

const cockpit = (props) => {
  let buttonClass = classes.Button
  const assignedClasses = []

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red)
  }

  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold)
  }
  if (props.showpersons) {
    buttonClass = [classes.Button, classes.Red].join(' ');
  }

  return (
    <Aux>
      <h1>{props.appTitle}</h1>
      <p className={assignedClasses.join(' ')}>this is really working</p>
      {/* <button style={style} onClick={ () => this.switchNameHandler('maximilian')}>Switch Users</button> */}
      <button className={buttonClass} onClick={props.click}>Toggle Users</button>
      <button onClick={props.login} className='btn btn-success'>Login</button>
    </Aux>
  );
}

export default cockpit;