import React from 'react';

const cockpit = (props)=>{
    return (
        <div>
            <h1>I am a react app</h1>
            <p className={props.clsnames.join(' ')}>this is really working</p>
            {/* <button style={style} onClick={ () => this.switchNameHandler('maximilian')}>Switch Users</button> */}
            <button className={props.btncls} onClick={props.click}>Toggle Users</button>
        </div>
    );
}

export default cockpit;