// inside src/index.js
import React, {Component} from 'react'
import {render} from 'react-dom'
import CityList from './components/CityList';

const App = () => {
    return (
        <div>
        <h1>not_constantinople</h1>
        <h2>These cities are being generated from a static input file and served from a Flask backend.</h2>
        <CityList/>
        </div>
    );
}

render(
 <App/>,
 document.getElementById('root')
)