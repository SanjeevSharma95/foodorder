import React from 'react'
import classes from "./MealItem.module.css";
import MealItemForm from './MealItemForm';

const MealItem = (props) => {
    // console.log(props.id);
    return (
        <li className={classes.meal} key={props.id}>

            <div>
                <h3 className={classes.name}>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>${props.price}</div>
            </div>
            <div>
                <MealItemForm id={props.id} />
            </div>
        </li>
    )

}

export default MealItem