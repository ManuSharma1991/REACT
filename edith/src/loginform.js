import React from 'react';

function Loginform(props) {
    return(
        <div>
           {props.label} : <input name= {props.name} value= {props.name}/>
        </div>
    );
}

export default Loginform;