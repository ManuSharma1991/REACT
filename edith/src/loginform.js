import React from 'react';

function Loginform(props) {
    return(
        <div>
           User Name : <input name= {props.name} value= {props.name}/>
        </div>
    );
}

export default Loginform;