

import React from 'react';
import axios from 'axios';

var apiKey ='1097908dac7248d794df137543d583b9'

class RecipeCard extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            ingredients : []
        }
    }

    componentDidMount(){
        axios.get('https://api.spoonacular.com/recipes/'+this.props.recipeId+'/ingredientWidget.json?apiKey='+apiKey)
        .then(res=>{
          this.setState({
            ingredients: res.data.ingredients
          })
        })
        .catch( err => console.log(err))
      }

    render(){
        return(
          <details>
              <summary>Ingredients</summary>
              <ul>
              {
                  this.state.ingredients.map(
                      (ingredient) =>  
                      <li key={ingredient.name}>{ingredient.name} {ingredient.amount.metric.value} {ingredient.amount.metric.unit}</li>
                  )
              }
              </ul>
          </details>
        )
    }

}

export default RecipeCard;

