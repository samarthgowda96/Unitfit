import React from 'react';
import classes from './Dashboard.module.css';

const input = (props) => {
    let inputElement = null;
    const inputClasses = [classes.InputElement];

    let validationError = null;
    if (props.invalid && props.shouldValidate && props.touch){
        inputClasses.push(classes.Invalid);
        validationError = <p className={classes.ErrorMessage}>Enter a valid value!</p>; 
    }

    switch(props.elementType){
        case('input'):
            inputElement = <input 
                className={inputClasses.join(' ')}  
                value={props.value} 
                {...props.elementConfig}  
                onChange={props.changed}/>;
            break;
        case('textarea'):
            inputElement = <textarea 
                style={{width: '55%'}}
                className={inputClasses.join(' ')}  
                value={props.value}  
                {...props.elementConfig} 
                onChange={props.changed}/>;
            break;
        case('select'):
            inputElement = <select 
                className={inputClasses.join(' ')}  
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
            inputElement = 
                 <input className={classes.InputElement} 
                {...props.elementConfig}
                value={props.value}/>;
    }
    return(
        
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label} {validationError}</label>
            
            {inputElement}
            
        </div>
        
    );
};

export default input;