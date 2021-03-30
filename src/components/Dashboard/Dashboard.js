import React from 'react';
import { Component } from 'react';
import Input from './Input';
import classes from './Dashboard.module.css';
import Spinner from '../Spinner/Spinner'
import Record from './FetchData';
import axios from 'axios';

class Dashboard extends Component{
    state = {
        BMI : 0,
        loading:false,
        dataForm:{
            date:{
                label: '1. Date (mm/dd/yy)',
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Date'
                },
                value: ''
            },
            gender:{
                label: '2. Gender',
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'male', displayValue: 'Male'},
                        {value: 'female', displayValue: 'Female'},
                        {value: 'other', displayValue: 'Other'},
                    ]
                },
                value: 'Male'
            },
            caloricIntake:{
                label: '3. Caloric Intake (cal)',
                elementType: 'input',
                elementConfig: {
                    type: 'number',
                    placeholder: 'Cal Intake'
                },
                value: ''
            },
            weight:{
                label: '4. Weight (lb)',
                elementType: 'input',
                elementConfig: {
                    type: 'number',
                    placeholder: 'Your weight'
                },
                value: ''
            },
            height:{
                label: '5. Height (cm)',
                elementType: 'input',
                elementConfig: {
                    type: 'number',
                    placeholder: 'Your height'
                },
                value: ''
            },
            waist:{
                label: '6. Waist (cm)',
                elementType: 'input',
                elementConfig: {
                    type: 'number',
                    placeholder: 'Your waist'
                },
                value: ''
            },
            neck:{
                label: '7. Neck (cm)',
                elementType: 'input',
                elementConfig: {
                    type: 'number',
                    placeholder: 'Your neck'
                },
                value: ''
            },
            hip:{
                label: '8. Hip (cm)',
                elementType: 'input',
                elementConfig: {
                    type: 'number',
                    placeholder: 'Your hip'
                },
                value: ''
            },
            chest:{
                label: '9. Chest (cm)',
                elementType: 'input',
                elementConfig: {
                    type: 'number',
                    placeholder: 'Your chest'
                },
                value: ''
            },
            leftUpperArm:{
                label: '10. Left Upper Arm (cm)',
                elementType: 'input',
                elementConfig: {
                    type: 'number',
                    placeholder: 'Your left upper arm'
                },
                value: ''
            },
            rightUpperArm:{
                label: '11. Right Upper Arm (cm)',
                elementType: 'input',
                elementConfig: {
                    type: 'number',
                    placeholder: 'Your right upper arm'
                },
                value: ''
            },
            leftThigh:{
                label: '12. Left Thigh (cm)',
                elementType: 'input',
                elementConfig: {
                    type: 'number',
                    placeholder: 'Your left thigh'
                },
                value: ''
            },
            rightThigh:{
                label: '13. Right Thigh (cm)',
                elementType: 'input',
                elementConfig: {
                    type: 'number',
                    placeholder: 'Your right thigh'
                },
                value: ''
            },
            note:{
                label: '13. Note',
                elementType: 'textarea',
                elementConfig: {
                    placeholder: 'Write here...',
                    rows: '3',
                    cols: '50'
                },
                value: '',
            },
        }
    }
    inputChangeHandler = (event, inputIdentifier) =>{
        const updatedDataForm = {
            ...this.state.dataForm
        }
        const updatedDataElement = {
            ...updatedDataForm[inputIdentifier]
        }
        updatedDataElement.value = event.target.value;
        updatedDataForm[inputIdentifier] = updatedDataElement;
        this.setState({dataForm : updatedDataForm});
    }
    submitHandler = (event) =>{
        event.preventDefault();
        this.setState({ loading: true });
        const dataFromDashBoard = {};
        for(let FormElementIdentifier in this.state.dataForm){
            dataFromDashBoard[FormElementIdentifier] = this.state.dataForm[FormElementIdentifier].value
        }
        const data = {
            Data: dataFromDashBoard
        }
        axios.post('https://unit-fit-default-rtdb.firebaseio.com/myDashboard.json', data)
            .then(response => {
                this.setState({ loading: false });
            })
            .catch(error => this.setState({ loading: false }));
        this.calculateBMI();
    }
    calculateBMI(){
        //calculate BMI
        let heightBMI = this.state.dataForm.height.value;
        let weightBMI = this.state.dataForm.weight.value;
        let calBMI = 0;
        calBMI = Math.floor(703*weightBMI/((heightBMI/2.54)*(heightBMI/2.54))); 
        this.setState({BMI: calBMI});
    }
   
    render(){
        const formElementArray=[];
        for(let key in this.state.dataForm){
            formElementArray.push({
                id: key,
                config: this.state.dataForm[key]
            })
        }
        let form = (
            <form className={classes.Form} onSubmit={this.submitHandler} >
                <div className={classes.Grid}>
                {formElementArray.map(formElement => (
                    <Input 
                        key = {formElement.id} 
                        label = {formElement.config.label}
                        elementType = {formElement.config.elementType} 
                        elementConfig = {formElement.config.elementConfig}
                        value = {formElement.config.value}
                        changed = {(event)=>this.inputChangeHandler(event,formElement.id)}/>
                ))}
                </div>
                
                <button className={classes.Button}>SAVE</button>
            </form>
        )
        if (this.state.loading) {
            form = <Spinner />
        }
        
        return(
            <div>
                <h2 style={{color:'white', margin: '20px 30px'}}>Enter your Body Index to the Dashboard:</h2>
                {form}
                <Record BMI = {this.state.BMI}/>
            </div>
        )
    }
}

export default Dashboard;