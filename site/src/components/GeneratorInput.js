import React, {Component} from 'react'

// A select and a cult
export default class GeneratorInput extends Component {
    
    getDropdownOptions() {
        const { options } = this.props;
        return options.map(option => (
            <option value={option}>{option}</option>
        ));
    }

    handleSelect = e => {
        const { idx, onSelectChange } = this.props;
        console.log("handleSelect", {val: e.target.value});
        onSelectChange(idx, e.target.value);
    }

    handleRemoveClicked = () => {
        const { idx, onRemoveOption } = this.props;
        onRemoveOption(idx);
    }

    handleChange = e => {
        const { idx, onWeightChange } = this.props;
        console.log("handle weight change", {e, target: e.target, value: e.target.value});
        onWeightChange(idx, parseInt(e.target.value));
    }

    render() {
        const { selected, weight } = this.props;
        return (
            <div className='generator-input'>
                <button className='generator-input-remove-button' onClick={this.handleRemoveClicked}>x</button>
                <select className='generator-input-select' onChange={this.handleSelect} value={selected} onSelect={this.handleSelect2}>
                    {this.getDropdownOptions()}
                </select>
                <input type='number' className='generator-input-weight' value={weight} onChange={this.handleChange}/>
            </div>
        );
    }
}