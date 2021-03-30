import React from 'react';
import classes from './Dashboard.module.css';

const input = (props) => {
    let inputElement = null;
    switch(props.elementType){
        case('input'):
            inputElement = <input 
                className={classes.InputElement}  
                value={props.value} 
                {...props.elementConfig}  
                onChange={props.changed}/>;
            break;
        case('textarea'):
            inputElement = <textarea 
                style={{width: '55%'}}
                className={classes.InputElement}  
                value={props.value}  
                {...props.elementConfig} 
                onChange={props.changed}/>;
            break;
        case('select'):
            inputElement = <select 
                className={classes.InputElement}  
                value={props.value} 
                onChange={props.changed}> 
                {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option> 
                        //console.log('dt',option.displayValue)
                    ))}
            </select>;
            break;
        default:
            inputElement = <input 
                className={classes.InputElement} 
                {...props.elementConfig}
                value={props.value}/>;
    }
    return(
        
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label} </label>
            {inputElement}
        </div>
        
    );
};

export default input;