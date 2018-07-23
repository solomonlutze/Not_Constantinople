// inside src/index.js
import React, {Component} from 'react'
import {render} from 'react-dom'
import GeneratorWrapper from './components/GeneratorWrapper';

const App = () => {
    return (
        <div>
            <h1>not_constantinople</h1>
            <GeneratorWrapper/>
        </div>
    );
}

render(
 <App/>,
 document.getElementById('root')
)