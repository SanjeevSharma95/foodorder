import React from 'react'
import classes from './Input.module.css';

const Input = (props) => {
    // console.log(props.requirement);

    return (
        <div className={classes.input}>
            <label>{props.label}</label>
            {/* <input id={props.id} type={props.type} name={props.name} min={props.min} max={props.max} step={props.step} defaultValue={props.defaltvalue} /> */}
            <input {...props.requirement}  />
        </div>
    )
};

export default Input;