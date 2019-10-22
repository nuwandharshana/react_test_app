import React,{Component} from 'react';
import Person from './Person/Person';

class Persons extends Component{
    render(){
        return this.props.persons.map((elem,index) => {
            return <Person 
            click={()=> this.props.delete(index)}
            name={elem.name} 
            age={elem.age}
            key={elem.id}
            changed={(event)=>this.props.changed(event,elem.id)}/>
        })
    }
}        

export default Persons;