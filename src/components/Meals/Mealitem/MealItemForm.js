import React from 'react'
import classes from "./MealItemForm.module.css";
import Input from '../../UI/Input';

const MealItemForm = (props) => {
  // console.log(props);
  return (
    <form className={classes.form}>
      {/* <Input type={'number'} defaltvalue={1} label={'Price'} name={'quantity'}  id={props.id} min={1} max={5} step={1} /> */}
      <Input
        label={"Quantity"}
        requirement={
          {
            id: props.id,
            type: "number",
            name: "quantity",
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "0"
          }
        }

      />
{/* 
      <Input 
      label='Email'
      requirement={{id:'email',type:"email",name:'email'}}
      /> */}

      <button>+ Add</button>
    </form>
  )
}

export default MealItemForm