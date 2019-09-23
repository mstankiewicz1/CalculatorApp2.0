import React from 'react';
import Button from './Button.jsx';
import Result from './Result.jsx';
import ClearButton from './ClearButton.jsx';
import * as math from 'mathjs';


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            result: ''
        };

    this.addToResult = this.addToResult.bind(this);
    }

    handleClear = () => {
      this.setState({
          result: ''
      })
    };

    addToResult = val => {
        this.setState({
            result: this.state.result + val,
        })
    };

    handleEqual = () => {
      this.setState({
            result: math.eval(this.state.result)
      })
    };


    render() {
        return (
            <div className="app">
                <div className="calc-wrapper">
                    <Result result={this.state.result}/>
                    <div className="row">
                        <Button handleClick={this.addToResult}>7</Button>
                        <Button handleClick={this.addToResult}>8</Button>
                        <Button handleClick={this.addToResult}>9</Button>
                        <Button handleClick={this.addToResult}>/</Button>
                    </div>
                    <div className="row">
                        <Button handleClick={this.addToResult}>4</Button>
                        <Button handleClick={this.addToResult}>5</Button>
                        <Button handleClick={this.addToResult}>6</Button>
                        <Button handleClick={this.addToResult}>x</Button>
                    </div>
                    <div className="row">
                        <Button handleClick={this.addToResult}>1</Button>
                        <Button handleClick={this.addToResult}>2</Button>
                        <Button handleClick={this.addToResult}>3</Button>
                        <Button handleClick={this.addToResult}>+</Button>
                    </div>
                    <div className="row">
                        <Button handleClick={this.addToResult}>.</Button>
                        <Button handleClick={this.addToResult}>0</Button>
                        <Button handleClick={() => this.handleEqual()}>=</Button>
                        <Button handleClick={this.addToResult}>-</Button>
                    </div>
                    <div className="row">
                        <ClearButton handleClear={() => this.setState({ result: ''})}>Clear</ClearButton>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;