import React, {Component} from 'react';
import classes from './AdvancedLevel.module.css';

const API = 'AIzaSyDgGCJ0-eCzj6u-p5wmK_q4oa6zuNeLoXA';
const playlistID = 'PL5qo1Sl2GW3fdk6DMuLMc5UlTPwDXFCKn';
const result = 10;
const finalURL = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=${result}&playlistId=${playlistID}&key=${API}`;
class Advanced extends Component{
    constructor(props){
        super(props);
        this.state = {
            resultYT: [],
            toggle: false
        }
    }
    basicClickHandler=(e)=>{
        
        fetch(finalURL)
            .then((response)=>response.json())
            .then((responseJson)=>{
                //console.log(responseJson)
                
                const resultYT = responseJson.items.map(obj => {
                    return {
                        url: "https://www.youtube.com/embed/" + obj.snippet.resourceId.videoId,
                        title: obj.snippet.title,
                        id: obj.id
                    };
                })
               
                this.setState({resultYT:resultYT});
            });
            this.setState((prevState) => {

                return  {toggle: !prevState.toggle};
          
          })
    }
    render() {
        // console.log(finalURL)
        // console.log(this.state.resultYT)
        let advancedLevel = <p></p>
        if(this.state.toggle){
            advancedLevel =  <div>
            
            {
                this.state.resultYT.map((data)=>{
                    var frame = <div  key={data.id}>
                        <p className={classes.text}>{data.title}</p>
                        <iframe className={classes.list} key={data.id} width="560" height="315" src={data.url} allowFullScreen></iframe> 
                    </div>
                    return frame;
                })
            }
            {this.frame}
        </div>
        }
        return (
            <div>
                 <button className={classes.Button} onClick={this.basicClickHandler}>Advanced Level</button>
                 {advancedLevel}
            </div>
           
        )
    } 
}

export default Advanced;