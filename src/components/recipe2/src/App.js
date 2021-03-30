import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//import {Button} from 'semantic-ui-react'

const allcategories= ['all',...new Set(items.map((item)=>item.category))];

function App() {
  const [menuItems,setMenuItems]=useState(items)
  const [categories,setCategories]=useState(allcategories)

  const filterItems=(category)=>{
    if(category==="all"){
      setMenuItems(items)
      return;
    }
    const newItems= items.filter((item)=> item.category
    === category)
    setMenuItems(newItems)
  }

  return(
    <>
{/* <Router>
    <Link to='/recipe'>
    <Button style={{ marginLeft: "5px",border: '1px solid red'}} className="left floated column" >Our Menu</Button></Link></Router> */}
    <main>
    
      <section className='menu section'>
        <div className='title'>
          <h2 style={{display: 'flex', justifyContent: 'flex-start'}}> Our Menu </h2>
          <div style={{display: 'flex', justifyContent: 'flex-start'}}className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems}/>
        <Menu menuItems={menuItems}/> 
      </section>

    </main>
    </>
  )

}

export default App;
