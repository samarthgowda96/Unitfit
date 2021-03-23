import React, { useState } from 'react';
import data from './data';
import List from './List';  
import {Button} from 'semantic-ui-react'
function App() {
  const [ads, setAds]=useState(data)
  return (
    <>
    <main>
      <section className='container'>
        <h3 style={{color:'white'}}>{ads.length} Ads</h3>
        <List ads={ads}/>
        <Button onClick={()=>setAds([])}>Stop showing Ads</Button>

      </section>
    </main>
    </>
  )
}

export default App;
 