import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classes from './Person.css'
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import {AuthContext} from '../../../containers/App';

class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElement = React.createRef();//define input element reference using react built in components
        console.log('[Person.js] inside constructor', props);
    }

    componentWillMount() {
        console.log('[Person.js] inside componentWillMount()');
    }

    componentDidMount() {
        console.log('[Person.js] inside componentDidMount()');
        if(this.props.position===0){
            this.inputElement.current.focus();// this is prefered on focus, media playback kind of stuff, dont use this as a work around (eg. element styling)
        }
    }

    focus(){
        this.inputElement.current.focus();
    }

    render() {
        console.log('[Person.js] inside render()');
        return (
            <Aux>
                {/* wrap the content with context element, auth is the value of the context */}
                <AuthContext.Consumer>
                    {auth=>auth?<p>I'm authenticated</p>:null}
                </AuthContext.Consumer>
                <p onClick={this.props.click}>I am {this.props.name}. I am {this.props.age} years old.</p>
                <p>{this.props.children}</p>
                <input
                    ref={this.inputElement}//make a reference on this element
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name}
                />
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

Person.propTypes = {//implement prop validations
    click:PropTypes.func,
    name:PropTypes.string,
    age:PropTypes.number,
    changed:PropTypes.func
}

export default withClass(Person,classes.Person);//implement reference while having hoc