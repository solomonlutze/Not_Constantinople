// inside src/index.js
import React, {Component} from 'react'
import {render} from 'react-dom'
import CityList from './components/CityList';

const App = () => {
    return (
        <div>
        <h1>Deploying from github!</h1>
        <CityList/>
        </div>
    );
}

render(
 <App/>,
 document.getElementById('root')
)