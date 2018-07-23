import React, {Component} from 'react'
import GeneratorInputForm from './GeneratorInputForm';
import Constants from '../Constants';
import CityList from './CityList';

export default class GeneratorWrapper extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cultures: []
        }
    }

    componentDidMount() {
        console.log("env: "+process.env.NODE_ENV);
        console.log("fetch??");
        console.log({Constants: Constants});
        fetch(`${Constants.URL}/api/v1.0/allowed_cultures`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        }).then(res => res.json() )
        .then(result => {
            this.setState({cultures: result})
        });
    }

    generateCities = input => {
        console.log("env: "+process.env.NODE_ENV);
        console.log("fetch??");
        const cultures = {};
        input.forEach(weight => cultures[weight.culture] = weight.weight);
        console.log("generating cities", {cultures});
        fetch(`${Constants.URL}/api/v1.0/cities`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({cultures})
        }).then(res => res.json() )
        .then(result => {
            this.setState({cities: result.settlements})
        });
    }

    render() {
        const { cultures, cities } = this.state;
        console.log({cultures});
        return (
            <div className='generator-wrapper'>
                <GeneratorInputForm cultures={cultures} generateCities={this.generateCities}/>
                <CityList cities={cities}/>
            </div>
        );
    }
}