import React from 'react';
import './VideoItem.css'
import { Container } from 'semantic-ui-react';

const VideoItem = ({ video,onVideoSelect }) => {
  return (
    <div onClick={()=>onVideoSelect(video)} className='video-item item'>
      <img alt={video.snippet.title} className='ui image' src={video.snippet.thumbnails.medium.url} />
      <Container textAlign='justified'>
      <div className='content'>
      <div className='header'>{video.snippet.title}</div>
      </div></Container>
      
    </div>
  );
};

export default VideoItem;
