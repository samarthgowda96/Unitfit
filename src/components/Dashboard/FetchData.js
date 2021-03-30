import React, { Component } from 'react';
import axios from 'axios';
import Spinner from '../Spinner/Spinner';
import FetchedItem from './FetchDataItem';
import classes from './Dashboard.module.css';
class FetchData extends Component {
    state = {
        data: [],

        error: false,
        spin: false,
        loading: false
    }
    componentDidMount(){
        this.fetchData();
    }
    componentDidUpdate(){
        this.fetchData();
    }

    fetchData() {
        axios.get('https://unit-fit-default-rtdb.firebaseio.com/myDashboard.json')
            .then(response => {
                const fetchData = [];
                let count = 0
                for (let key in response.data) {
                    count = count + 1;
                    fetchData.push({
                        count: count,
                        key: key,
                        ...response.data[key],
                    });
                }
                this.setState({ data: fetchData, loading: true })
                //console.log('kq', fetchData)
                // console.log('kq3', this.state.recipe)
            }).catch(error => {
                this.setState({ setState: true, spin: true })
            });
    }
    render() {
        let result = <h3></h3>
        if(this.props.BMI == 0){
            result = <h4 style={{color: 'red'}}>Enter your data, then we will diagnose your body!</h4>
        }
        else if(this.props.BMI < 18.5){
            result = <h3 style={{color: 'white'}}>You are underweight!</h3>
        }
        else if(this.props.BMI >= 18.5 && this.props.BMI<24.9){
            result = <h3 style={{color: 'white'}}>You are healthy! Keep doing exercise</h3>
        }
        else if(this.props.BMI >= 24.9 && this.props.BMI<30){
            result = <h3 style={{color: 'white'}}>You are overweight and at higher risk of cardiovascular diseases</h3>
        }
        else if(this.props.BMI >= 30){
            result = <h3 style={{color: 'white'}}>You are obese and at higher risk of cardiovascular diseases</h3>
        }
        return (
            <div>
                <h2 style={{color: 'white'}}>Your Record</h2>
                <div className={classes.Form}>
                    <h3>Your current BMI we estimates: {this.props.BMI}</h3>
                    {result}
                </div>
               
                {
                    this.state.data.map(data => (
                        <div>
                            <h3 style={{margin: '20px 30px', color:'white'}}>- Day {data.count} -</h3>
                            <FetchedItem
                                key={data.key}
                                bodyIndex={data.Data}
                            />
                        </div>
                    ))}
            </div>
        )
    }
}
export default FetchData;