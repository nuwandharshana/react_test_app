import React from 'react';
import Person from './Person/Person';

const Persons = (props) =>
        props.persons.map((elem,index) => {
            return <Person 
            click={()=> props.delete(index)}
            name={elem.name} 
            age={elem.age}
            key={elem.id}
            changed={(event)=>props.changed(event,elem.id)}/>
        })

export default Persons;