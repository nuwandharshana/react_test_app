import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props)=>{
    let buttonClass = ''
    const assignedClasses = []
    
    if(props.persons.length<=2){
      assignedClasses.push(classes.red)
    }
    
    if(props.persons.length<=1){
      assignedClasses.push(classes.bold)
    }
    if(props.showpersons){
        buttonClass = classes.Red
    }

    return (
        <div className={classes.Cockpit}>
            <h1>I am a react app</h1>
            <p className={assignedClasses.join(' ')}>this is really working</p>
            {/* <button style={style} onClick={ () => this.switchNameHandler('maximilian')}>Switch Users</button> */}
            <button className={buttonClass} onClick={props.click}>Toggle Users</button>
        </div>
    );
}

export default cockpit;