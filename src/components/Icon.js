import React from 'react';

const imgStyles={
    width: 50,
    height: 50,
}

const Icon = (props) => {
    return (
        <img src={props.image} alt={props.name} style={imgStyles}/>
    );
}
 
export default Icon;