import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
    constructor(props) {
        super(props);
        console.log('[Persons.js] inside constructor', props);
    }

    componentWillMount() {
        console.log('[Persons.js] inside componentWillMount()');
    }

    componentDidMount() {
        console.log('[Persons.js] inside componentDidMount()');
    }

    //update triggers
    componentWillReceiveProps(nextProps) {
        console.log('[UPDATE Persons.js] inside componentWillRecieveProps()', nextProps);
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[UPDATE Persons.js] inside shouldComponentUpdate()', nextProps, nextState);
    //     return nextProps.persons !== this.props.persons || nextProps.delete !== this.props.delete || nextProps.changed !== this.props.changed;
    // }

    componentWillUpdate(nextProps, nextState){
        console.log('[UPDATE Persons.js] inside componentWillUpdate()', nextProps, nextState);
    }

    componentDidUpdate(){
        console.log('[UPDATE Persons.js] inside componentDidUpdate()');
    }


    render() {
        console.log('[Persons.js] inside render()');
        return this.props.persons.map((elem, index) => {
            return <Person
                click={() => this.props.delete(index)}
                name={elem.name}
                age={elem.age}
                key={elem.id}
                changed={(event) => this.props.changed(event, elem.id)} />
        })
    }
}

export default Persons;