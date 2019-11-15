import React, {Component} from 'react'

// const withClass = (WrappedComponent,ClassName)=>{
//     return (props)=>(
//         <div className={ClassName}>
//             <WrappedComponent {...props}/>
//         </div>
//     )
// }

const withClass = (WrappedComponent,ClassName)=>{
    const WithClass = class extends Component{
        render(){
            return (
                <div className={ClassName}>
                    <WrappedComponent ref={this.props.forwardedRef} {...this.props} />
                </div>
            )
        }
    }

    return React.forwardRef((props,ref)=>{
        return <WithClass {...props} forwardedRef={ref} />//pass the reference to forwardedRef
    })
}

export default withClass