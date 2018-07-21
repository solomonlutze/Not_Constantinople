// inside src/index.js
import React, {Component} from 'react'
import {render} from 'react-dom'

const url = (process.env.NODE_ENV === 'development') 
    ? 'http://127.0.0.1:5000/'
    : 'https://not-constantinople.herokuapp.com';

export default class CityList extends Component {

    constructor(props) {
        super(props);
        this.state = {cities: []};
    }

    componentDidMount() {
        console.log("env: "+process.env.NODE_ENV);
        console.log("fetch??");
        fetch(`${url}/api/v1.0/cities`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        }).then(res => res.json() )
        .then(result => {
            console.log({result});
            this.setState({cities: result.cities})
        });
    }

    getCities () {
        console.log({state: this.state.cities});
        return this.state.cities.map(val => {
            console.log({val});
            return <div>{val.name}</div>;
    });
    }

    render() {
        console.log("render?");
        const citiesDiv = this.getCities();
        console.log({citiesDiv})
        return <div>{citiesDiv}</div>
    }
}