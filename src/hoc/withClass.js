import React, {Component} from 'react'

// const withClass = (WrappedComponent,ClassName)=>{
//     return (props)=>(
//         <div className={ClassName}>
//             <WrappedComponent {...props}/>
//         </div>
//     )
// }

const withClass = (WrappedComponent,ClassName)=>{
    return class extends Component{
        render(){
            return (
                <div className={ClassName}>
                    <WrappedComponent {...this.props} />
                </div>
            )
        }
    }
}

export default withClass