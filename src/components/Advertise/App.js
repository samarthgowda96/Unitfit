import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [ads, setAds]=useState(data)
  return (
    <>
    <main>
      <section className='container'>
        <h3 style={{color:'white'}}>{ads.length} Ads</h3>
        <List ads={ads}/>
        <button onClick={()=>setAds([])}>Stop showing Ads</button>

      </section>
    </main>
    </>
  )
}

export default App;
 