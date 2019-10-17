import React,{ Component } from 'react';

class ErrorBoundary extends Component{
    state = {
        hasError:false,
        errorMessage:''
    }

    componentDidCatch = (error, info) =>{
        this.state.hasError = true;
        this.state.errorMessage = error;
    }

    render() {
        if(this.hasError){
            return <h1>{this.state.errorMessage}</h1>;
        }
        else{
            return this.props.children;
        }
    }
}

export default ErrorBoundary;