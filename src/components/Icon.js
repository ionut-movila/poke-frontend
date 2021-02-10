import React from 'react';

const imgStyles={
    width: 200,
    height: 200,
}

const Icon = (props) => {
    return (
        <img src={props.image} alt={props.name} style={imgStyles}/>
    );
}
 
export default Icon;