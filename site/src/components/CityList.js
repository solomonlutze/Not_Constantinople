// inside src/index.js
import React, {Component} from 'react'
import {render} from 'react-dom'

const url = 'https://not-constantinople.herokuapp.com';

// const url = 'http://127.0.0.1:5000';

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
            this.setState({cities: result.settlements})
        });
    }

    getCities () {
        return this.state.cities.map(val => {
            return <div>{val}</div>;
    });
    }

    render() {
        const citiesDiv = this.getCities();
        return <div>{citiesDiv}</div>
    }
}