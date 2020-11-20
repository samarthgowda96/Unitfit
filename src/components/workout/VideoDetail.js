import React from 'react';
import './VideoDetails.css'

const VideoDetail =({video})=>{

    if(!video){
        return<h2></h2>
    }

    const videoSrc= `https://www.youtube.com/embed/${video.id.videoId}`
    return (
    <div>
        <div className='ui embed'> 
        <iframe title='video player' src={videoSrc }/>
        </div>
        <div className="VideoDetails ui segment inverted secondary">
        <h1>{video.snippet.title}</h1>
        <p>{video.snippet.description}</p>
        </div>
    </div>
    )

    

};

export default VideoDetail;