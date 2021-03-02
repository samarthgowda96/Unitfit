import React from 'react';
import Basic from './Basic';
import Advanced from './Advanced';

const intensity=()=>{


    return(

        <>
        <div class="ui grid">
        <div class="two column row">
        <div class="ui vertical divider">Select your Intensity level :)</div>
        <div class="left floated column"><Basic /></div>
        
        
        <div class="right floated column"><Advanced /></div>
       
        </div>
 
        
        </div>
    </>
    )
}

export default intensity;
