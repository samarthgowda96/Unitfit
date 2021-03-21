import React from 'react';
import './VideoDetails.css'

const VideoDetail =({video})=>{

    const styles={
        border: '20px thick rgb(199, 23, 23)'

    }

    if(!video){
        return<h2></h2>
    }

    const videoSrc= `https://www.youtube.com/embed/${video.id.videoId}`
    return (
    <div>
        <div className="VideoDetails border red ui 3:3 embed" style={styles}> 
        <iframe title='video player' src={videoSrc}/>
        </div>
        <div className="VideoDetails ui segment inverted secondary">
        <h1>{video.snippet.title}</h1>
        <p>{video.snippet.description}</p>
        </div>
    </div>
    )

    

};

export default VideoDetail;