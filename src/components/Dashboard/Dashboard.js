import React from 'react';
import { Component } from 'react';
import Input from './Input';
import classes from './Dashboard.module.css';
import Spinner from '../Spinner/Spinner'
import Record from './FetchData';
import axios from 'axios';
import MyProfile from '../Freemium/MyProfile';
class Dashboard extends Component{
    state = {
        successMess: false,
        formIsValid: false,
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
                value: '',
                validation:{
                    required: true
                },
                valid: false,
                touch: false
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
                validation:{
                    required: true
                },
                value: 'Male',
                valid: true, //add valid = true for validating the whole form
            },
            caloricIntake:{
                label: '3. Caloric Intake (cal)',
                elementType: 'input',
                elementConfig: {
                    type: 'number',
                    placeholder: 'Cal Intake'
                },
                value: '',
                validation:{
                    required: true
                },
                valid: false,
                touch: false
            },
            weight:{
                label: '4. Weight (lb)',
                elementType: 'input',
                elementConfig: {
                    type: 'number',
                    placeholder: 'Your weight'
                },
                value: '',
                validation:{
                    required: true
                },
                valid: false,
                touch: false
            },
            height:{
                label: '5. Height (cm)',
                elementType: 'input',
                elementConfig: {
                    type: 'number',
                    placeholder: 'Your height'
                },
                value: '',
                validation:{
                    required: true
                },
                valid: false,
                touch: false
            },
            waist:{
                label: '6. Waist (cm)',
                elementType: 'input',
                elementConfig: {
                    type: 'number',
                    placeholder: 'Your waist'
                },
                value: '',
                validation:{
                    required: true
                },
                valid: false,
                touch: false
            },
            neck:{
                label: '7. Neck (cm)',
                elementType: 'input',
                elementConfig: {
                    type: 'number',
                    placeholder: 'Your neck'
                },
                value: '',
                validation:{
                    required: true
                },
                valid: false,
                touch: false
            },
            hip:{
                label: '8. Hip (cm)',
                elementType: 'input',
                elementConfig: {
                    type: 'number',
                    placeholder: 'Your hip'
                },
                value: '',
                validation:{
                    required: true
                },
                valid: false,
                touch: false
            },
            chest:{
                label: '9. Chest (cm)',
                elementType: 'input',
                elementConfig: {
                    type: 'number',
                    placeholder: 'Your chest'
                },
                value: '',
                validation:{
                    required: true
                },
                valid: false,
                touch: false
            },
            leftUpperArm:{
                label: '10. Left Upper Arm (cm)',
                elementType: 'input',
                elementConfig: {
                    type: 'number',
                    placeholder: 'Your left upper arm'
                },
                value: '',
                validation:{
                    required: true
                },
                valid: false,
                touch: false
            },
            rightUpperArm:{
                label: '11. Right Upper Arm (cm)',
                elementType: 'input',
                elementConfig: {
                    type: 'number',
                    placeholder: 'Your right upper arm'
                },
                value: '',
                validation:{
                    required: true
                },
                valid: false,
                touch: false
            },
            leftThigh:{
                label: '12. Left Thigh (cm)',
                elementType: 'input',
                elementConfig: {
                    type: 'number',
                    placeholder: 'Your left thigh'
                },
                value: '',
                validation:{
                    required: true
                },
                valid: false,
                touch: false
            },
            rightThigh:{
                label: '13. Right Thigh (cm)',
                elementType: 'input',
                elementConfig: {
                    type: 'number',
                    placeholder: 'Your right thigh'
                },
                value: '',
                validation:{
                    required: true
                },
                valid: false,
                touch: false
            },
            note:{
                label: '13. Note (5-100 words)',
                elementType: 'textarea',
                elementConfig: {
                    placeholder: 'Write here...',
                    rows: '3',
                    cols: '50'
                },
                value: '',
                validation:{
                    required: true,
                    minLength: 5,
                    maxLength: 100
                },
                valid: false,
                touch: false

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
        updatedDataElement.valid = this.checkValidity(updatedDataElement.value, updatedDataElement.validation);
        updatedDataElement.touch = true;
        updatedDataForm[inputIdentifier] = updatedDataElement;
        
        let formIsValid = true;
        for(let InputIdentifier in updatedDataForm){
            formIsValid = updatedDataForm[InputIdentifier].valid && formIsValid;
        }

        this.setState({dataForm : updatedDataForm, formIsValid: formIsValid});
    }
    submitHandler = (event) =>{
        event.preventDefault();
        this.setState({ loading: true, successMess: true });
        const dataFromDashBoard = {};
        for(let FormElementIdentifier in this.state.dataForm){
            dataFromDashBoard[FormElementIdentifier] = this.state.dataForm[FormElementIdentifier].value
        }
        const data = {
            Data: dataFromDashBoard
        }
        axios.post('https://unifit-e2c05-default-rtdb.firebaseio.com/myDashboard.json', data)
            .then(response => {
                this.setState({ loading: false });
            })
            .catch(error => this.setState({ loading: true }));
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
    checkValidity(value, rules){
        let isValid = true;

        if(rules.required){
            isValid = value.trim(' ') != '' && isValid ;
        }
        if(rules.minLength){
            isValid = value.length >=rules.minLength && isValid; 
        }
        if(rules.maxLength){
            isValid = value.length <= rules.maxLength && isValid; 
        }
        return isValid
    }
   
    render(){
        let successMess = null;
        if(this.state.successMess){
            successMess = <p className={classes.SuccessMess}>Saved Successfully!</p>
        }
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
                        changed = {(event)=>this.inputChangeHandler(event,formElement.id)}
                        invalid = {!formElement.config.valid}
                        touch = {formElement.config.touch}
                        shouldValidate = {formElement.config.validation}/>
                ))}
                </div>
                
                <button className={classes.Button} disabled={!this.state.formIsValid}>SAVE</button>
                {successMess}
            </form>
        )
        if (this.state.loading) {
            form =<p> <Spinner /> 
            <h4 className={classes.SuccessMess}>Loading...</h4></p> 
        }
        
        return(
            <div>
                <MyProfile/>
                <h2 style={{color:'white', margin: '20px 30px'}}>Enter your Body Index to the Dashboard:</h2>
                {form}
                <Record BMI = {this.state.BMI}/>
            </div>
        )
    }
}

export default Dashboard;