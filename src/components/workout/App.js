import React from 'react';
import SearchBar from './SearchBar';
import Youtube from './YoutubeApi';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail'


const KEY = 'AIzaSyDgGCJ0-eCzj6u-p5wmK_q4oa6zuNeLoXA';

class App extends React.Component { 
  state = { videos: [], selectedVideo: ''};

  onTermSubmit = async (term) => {
    const response = await Youtube.get('/search', {
      params: {
        q: term,
        part: 'snippet',
        maxResults: 10,
        type: 'video',
        key: KEY,
      }
    });
    //console.log(response.data.items)
    
  
  
    this.setState({ 
      videos: response.data.items,
      selectedVideo: response.data.items[0]
     });
  };
onVideoSelect=(video)=>{
  this.setState({selectedVideo:video})


};
  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className='ui grid'>
          <div className='ui row'>
            <div className='ten wide column'>
        <VideoDetail video={this.state.selectedVideo}/>
        
        </div>
      {/*<div><Divider vertical></Divider></div> */}
        <div className='six wide column'>
       
        <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} /></div>
        
        </div>
        </div>
      </div>
    );
  } 
}

export default App;
