import React from 'react';
import {Link} from 'react-router-dom'

class SearchBar extends React.Component {
  state = { term: '' };

  onInputChange = event => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment inverted secondary">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
          
            <label>UNITFIT SEARCH BAR <i class="beer icon"></i></label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
