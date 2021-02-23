import React from 'react';
import VideoItem from './VideoItem';
import { Container } from 'semantic-ui-react';

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map((video) => {
    return <VideoItem onVideoSelect={onVideoSelect} key={video.id.videoId}video={video} />;
  });
 

  return(
    
  <div className="ui relaxed divided list inverted secondary" >{renderedList}
  </div>

  )
};

export default VideoList;
