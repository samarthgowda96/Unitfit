import React from 'react';
import classes from './ad.module.css';
import Spinner from '../Spinner/Spinner';
const List = ({ads}) => {
  
  return (
        <>
          
            {ads.map((ad)=>{
            const {id,name,place,image,href}=ad  
            return <article className={classes.Frame} key={id} >
                    <img className={classes.Img}  src={image} alt={name}/>
                    <div>
                        <h4 className={classes.Name} href={href}>{name}</h4>
                        <p className={classes.Name} >{place}</p>
                        <a href={href}>Visit Me</a>
                    </div>
                 </article>
        

        })}
       
    </>
  );
};

export default List;
