import React, {Component} from 'react'
import GeneratorInput from './GeneratorInput';

// A select and a cult
export default class GeneratorInputForm extends Component {

    constructor(props) { 
        super(props);
        this.state = {
            cultureWeights: [],
            keyCount: 0
        }
    }

    onRemoveOption = idx => {
        const { cultureWeights } = this.state;
        cultureWeights.splice(idx, 1);
        this.setState({cultureWeights});
    }

    onSelectChange = (idx, selectedOption) => {
        const { cultureWeights } = this.state;
        const cultureWeight = cultureWeights[idx];
        cultureWeight.culture = selectedOption;
        this.setState({cultureWeights});
    }

    onWeightChange = (idx, selectedWeight) => {
        console.log({selectedWeight});
        const { cultureWeights } = this.state;
        const cultureWeight = cultureWeights[idx];
        cultureWeight.weight = selectedWeight;
        this.setState({cultureWeights});
    }

    onAddOption = () => {
        const { cultures } = this.props;
        const { cultureWeights, keyCount } = this.state;
        console.log("onAddOption", {cultures}); 
        cultureWeights.push({
            culture: cultures[0],
            weight: 1,
            key: keyCount 
        })
        this.setState({cultureWeights, keyCount: keyCount + 1});
    }

    onGenerate = () => {
        const { cultureWeights } = this.state;
        const { generateCities } = this.props;
        generateCities(cultureWeights);
    }

    renderWeightOptions() {
        const { cultures } = this.props;
        const { cultureWeights } = this.state;
        console.log({cultureWeights});
        return (cultureWeights.map((weight, idx) => (
            <GeneratorInput 
                idx={idx} 
                options={cultures} 
                weight={weight.weight} 
                selected={weight.culture} 
                key={weight.key}
                onSelectChange={this.onSelectChange}
                onWeightChange={this.onWeightChange}
                onRemoveOption={this.onRemoveOption}
            />
        )));
    }

    render() {
        const { cultureWeights } = this.state; 
        return (
            <div className='generator-input-form'>
                {this.renderWeightOptions()}
                <button onClick={this.onAddOption}>Add Culture</button>
                <button disabled={cultureWeights.length === 0} onClick={this.onGenerate}>Generate!</button>
            </div>
        );
    }
}