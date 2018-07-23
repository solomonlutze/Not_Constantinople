import React, {Component} from 'react'
import Constants from '../Constants';
// const url = 'https://not-constantinople.herokuapp.com';


export default class CityList extends Component {

    constructor(props) {
        super(props);
    }

    getCities () {
        const {cities} = this.props;
        if (!!cities) {
            return this.props.cities.map(val => {
                return <div>{val}</div>;
            });
        }
    }

    render() {
        const citiesDiv = this.getCities();
        return <div>{citiesDiv}</div>
    }
}