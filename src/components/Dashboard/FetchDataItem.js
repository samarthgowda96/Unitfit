import React from 'react';
import classes from './Dashboard.module.css';

const fetchItem = (props) => {
    
    const index = [];
    //let bmi = 0;
    for (let i in props.bodyIndex) {
       // bmi = index.weight / (index.height*index.height);
        index.push({ 
            key: i,    
            type: i,
            amount: props.bodyIndex[i]
        })
    }

    return (
        <div>     
            <table className={classes.Table}>
                <tbody>
                <tr className={classes.Col}>
                    <th className={classes.Row}>Type</th>
                    <th className={classes.Row}>Value</th>
                </tr>
                {index.map(index => (
                    <tr className={classes.Col} key={index.type}>
                        <td className={classes.Row}>{index.type}</td>
                        <td className={classes.Row}>{index.amount}</td>
                    </tr>
                ))}
                {/* <tr className={classes.Col}>
                    <th className={classes.Row}>Calculate BIM</th>
                    <th className={classes.Row}></th>
                </tr> */}
                </tbody>
               
            </table>   
        </div>
    );
};

export default fetchItem;