import React from 'react';
import BasicLevel from './basiclevel/BasicLevel';
import AdvancedLevel from './advancedlevel/AdvancedLevel';

const intensity=()=>{


    return(

        <>
        <div class="ui grid">
        <div class="two column row">
        <div class="ui vertical divider">Select your Intensity level :)</div>
        <div class="left floated column"><BasicLevel  /></div>
        
        
        <div class="right floated column"><AdvancedLevel /></div>
       
        </div>
 
        
        </div>
    </>
    )
}

export default intensity;
