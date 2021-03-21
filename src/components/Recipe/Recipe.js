import React, { Component } from 'react';
import axios from 'axios';
import RecipeCard from './RecipeCard';
import classes from './RecipeCard.module.css';

class Recipe extends Component {
    state = {
        recipe: [],
        error: false
    }

    componentDidMount() {

        axios.get('https://unit-fit-default-rtdb.firebaseio.com/recipe.json')
            .then(response => {
                const fetchData = []

                for (let key in response.data) {
                    fetchData.push({
                        name: response.data[key],
                        value: key,
                        key: key
                    });
                }
                this.setState({ recipe: fetchData })
                console.log('kq', fetchData)
                console.log('kq3', this.state.recipe)
            }).catch(error => {
                this.setState({ error: true })
            });

    }
    render() {


        return (
            <div>
                
                    <h2 className={classes.Subject}>Calories Contents of Daily Food</h2>
                    <p className={classes.Intro}>Research have shown that people must be absorbed an adequate amount of Calories
                        on a daily basis, especially after exercise, work or study to restore levels of 
                        glycogen accumulated in body's muscle, liver which as the preferred energy for most 
                        types of exercise. In addition, the fatigue and poor performance related to calories 
                        depletion can be limited by a carbohydrate-rich diet and with periodic rest days to 
                        give the muscles time to replenish the glycogen. Understand the importance of diet plan
                        and the extensive exercises you have been practicing everyday with us. We researched and 
                        put forward some kind of food that good for you during exercise period. Check out our list: 
                    </p>
                
                {this.state.recipe.map(recipe => (
                    <RecipeCard
                        key={recipe.key}
                        name={recipe.value}
                        img={recipe.name}
                    />
                ))}
            </div>


        )
    }
}
export default Recipe;