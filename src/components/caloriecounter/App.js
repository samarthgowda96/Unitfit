import React, { Component } from "react";
import "./App.css";
import Form from "./Form";
import Meal from "./Meal";

class App extends Component {
  state = {
    meals: []
  };

  addMeal = meal => {
    this.setState({
      meals: [meal, ...this.state.meals]
    });
  };

  onDelete = id => {
    this.setState({
      meals: this.state.meals.filter(meal => meal.id !== id)
    });
  };

  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h2>Calorie Counter</h2>
          <hr />
          <Form onsubmit={this.addMeal} />
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Meal</th>
                <th>Calories</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {this.state.meals.map(meal => (
                <Meal
                  key={meal.id}
                  meal={meal}
                  onDelete={() => this.onDelete(meal.id)}
                />
              ))}
              <tr>
                <td>Total:</td>
                <td>
                  <span role="img">🍎</span>
                  {this.state.meals.reduce(
                    (totalCalories, meal) => totalCalories + meal.calorie,
                    0
                  )}
                </td>
                <td />
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
