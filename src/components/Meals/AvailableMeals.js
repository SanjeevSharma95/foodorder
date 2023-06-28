import React, { Fragment } from 'react'
import classes from "../Meals/AvailableMeals.module.css"
import MealItem from './Mealitem/MealItem';
import Card from '../UI/Card';

const DUMMY_MEALS = [
    {
        id: "m1",
        name: "Burger",
        description: "Finest fish and veggies",
        price: 29

    },
    {
        id: "m2",
        name: "Pizza",
        description: "Veggies",
        price: 45

    },
    {
        id: "m3",
        name: "Rice",
        description: "Veggies and Healthy",
        price: 50

    },
    {
        id: "m4",
        name: "RiceBarbecue Burger",
        description: "Veggies and Healthy",
        price: 30

    }

];

const AvailableMeals = () => {

    const mealList = DUMMY_MEALS.map(
        (mealData) => (
            <MealItem
                key={mealData.id}
                id={mealData.id}
                name={mealData.name}
                description={mealData.description}
                price={mealData.price} />
        )
    )

    return (
        <section className={classes.meals}>
            <Card>
                <ul>
                    {mealList}
                </ul>
            </Card>
        </section>
    )


}

export default AvailableMeals;