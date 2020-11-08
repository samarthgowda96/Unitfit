import React from 'react';
import axios from 'axios';
import Recipes from './Recipes';
import RecipesCard from './RecipeCard';

var apiKey = '1097908dac7248d794df137543d583b9';

class RecipeList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchWord:'',
      recipe: [] 
    }
  }
  
  handleChange = e =>{
    this.setState({
    searchWord : e.target.value
  })
  }

  handleEnter = e =>{
    if(e.keyCode === 13) this.handleSearch(this.state.searchWord)
  }

  handleSearch = (searchWord) => {
    if(searchWord){
    axios.get('https://api.spoonacular.com/recipes/search?query='+searchWord+'&apiKey='+apiKey)
      .then(res => {
        this.setState({
          recipe: res.data.results
        });
      })
      .catch( err => console.log(err))
    }
    else this.setState({ recipe:[]})
  }

  render() {

    return (
      <div>

        <header>
          <a href="https://spoonacular.com/food-api">spoonacular recipe and food API</a> <br/>
          Try search for recipes (e.g chicken,noodle etc.)
        </header>

        <div className="search">
           <input type='text' className="searchTerm" placeholder="Search a recipe" 
           onChange={this.handleChange} onKeyUp={this.handleEnter} autoFocus/>
           <button className="searchButton" onClick={()=>this.handleSearch(this.state.searchWord)}><i className="fa fa-search"></i></button>
        </div>

        {
          this.state.recipe ?
          this.state.recipe.map(
            (recipe)=>
              <div className="card" key={recipe.id}>
                 <img src={' https://spoonacular.com/recipeImages/'+recipe.id+'-480x360'} />
                   <div className="container">
                      <h4>{recipe.title}</h4>
                      <Recipes recipeId={recipe.id}/>
                      <RecipesCard recipeId={recipe.id}/>
                 </div>
              </div>  
          ) : ''
        }

      </div>
    );
  }

}

export default RecipeList;
