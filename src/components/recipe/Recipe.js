import React, { Component } from 'react';
import axios from 'axios';
import RecipeCard from './RecipeCard';
import classes from './RecipeCard.module.css';
import Calculate from '../Caloriecounter/App';
import Ads from '../Advertise/App';
import Spinner from '../Spinner/Spinner';
import {Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

class Recipe extends Component {
    state = {
        recipe: [],
        error: false,
        spin: false,
        loading: false
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
                this.setState({ recipe: fetchData, loading: true })
                console.log('kq', fetchData)
                console.log('kq3', this.state.recipe)
            }).catch(error => {
                this.setState({ setState: true, spin: true})   
            });

    }
    render() {
        let fetchedData = (
            this.state.recipe.map(recipe => (
                <RecipeCard
                    key={recipe.key}
                    name={recipe.value}
                    img={recipe.name}
                />
            ))
        )
        
        if(this.state.spin){
            fetchedData = <p><p style={{color:'red'}}>Error... The requested resource was not found.</p> <Spinner/></p> 
        }
        if(this.state.recipe === []){
            fetchedData = <Spinner/>
        }

        return (
            <div>
                <Link to="/recipe/ourmenu">
                <Button style={{ marginLeft: "5px",border: '1px solid red'}} className="left floated column" >Our Menu</Button></Link>
                <Calculate />
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
                <div class="ui grid">
                    <div class="four column row">
                        {/* <div class="ui vertical divider">Select your Intensity level :)</div> */}
                        <div class="left col-1 floated column "></div>
                        <div class="left col-7 floated column ">
                            {fetchedData}
                        </div>
                        <div class="right col-4 floated column"><Ads/></div>

                    </div>


                </div>

            </div>


        )
    }
}
export default Recipe;