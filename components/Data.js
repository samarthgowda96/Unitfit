import React, { Component } from 'react'

export default class Data extends Component {

    constructor(props){
        super(props);

        this.state = {
            data :[]
        }
    }

    getData = async () => {
        await fetch("http://localhost:3006/data")
            .then(res => {
                return res.json();
            })
            .then(data => {
                this.setState({
                    data: data
                });
            })
            .catch(err => err);
    };

    componentDidMount() {
        this.getData();
      
    }
    render() {

       {console.log(this.state.data)}
        const datas = this.state.data;
        
        const datasList = datas.length ? (
            <div>
                <h1>{this.state.data[0]}</h1>
            </div>
        ) : (
                <h1>Loading</h1>
            );

        return (
            <div>
                
            </div>
        )
    }
}