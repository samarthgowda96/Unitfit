import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import './App.css'

class App extends React.Component {
  state = { images: [], images1:[] };
  

  onSearchSubmit = async term => {
    const response = await unsplash.get('/ingredient', {
     
    });
    const response2 = await unsplash.get('/muscle',{
    });
 
   // this.setState({ images: response.data.results });
   this.setState({images:response.data.results[10]})
   this.setState({images1:response2.data.results})
   
    console.log(response.data.results)
    console.log(response2.data.results)
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images1}  />
      </div>
    );
  }
}

export default App;
