import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
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