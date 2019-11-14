import React, { Component } from 'react'
import classes from './Person.css'
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';

class Person extends Component {
    constructor(props) {
        super(props);
        console.log('[Person.js] inside constructor', props);
    }

    componentWillMount() {
        console.log('[Person.js] inside componentWillMount()');
    }

    componentDidMount() {
        console.log('[Person.js] inside componentDidMount()');
    }
    render() {
        console.log('[Person.js] inside render()');
        return (
            <Aux>
                <p onClick={this.props.click}>I am {this.props.name}. I am {this.props.age} years old.</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </Aux>
        )
        //return array of component without using root element
        // return [
        //     <p key="1" onClick={this.props.click}>I am {this.props.name}. I am {this.props.age} years old.</p>,
        //     <p key="2">{this.props.children}</p>,
        //     <input key="3" type="text" onChange={this.props.changed} value={this.props.name} />
        // ]
    }
}

export default withClass(Person,classes.Person);