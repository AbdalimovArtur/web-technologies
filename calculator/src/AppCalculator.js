import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';

class App extends Component {
    constructor(){
        super();
        this.state  = {
            left: 0,
            right: 0,
            operation:[
                {name:'+', i:1},
                {name:'-', i:2},
                {name:'/', i:3},
                {name:'*', i:4},
            ],
            res:0,
        };
    }
    handleClick = (t) =>{
        if(t === 1) {
            this.setState({
                res: parseInt(this.state.left)+parseInt(this.state.right)
            });
        }
        if(t === 2) {
            this.setState({
                res:this.state.left-this.state.right
            });
        }
        if(t === 3) {
            this.setState({
                res:this.state.left/this.state.right
            });
        }
        if(t === 4) {
            this.setState({
                res:this.state.left*this.state.right
            });
        }
    };

    handleNumbers = (e) =>{
        let num = e.target.id;
        this.setState({
            [num] :e.target.value
        });
    };

    renderItem = (item) =>{
        return <div className="button" onClick={this.handleClick.bind(null,item.i)}>{item.name}</div>
    };

    render() {
        const operations = this.state.operation.map((item) => this.renderItem(item));
        return (
            <div className="App">
                <div>
                    <div className="form-group">
                        <input className="inputFields form-control" type="text" id="left" onChange = {this.handleNumbers}/>
                        <input className="inputFields form-control" type="text" id="right" onChange = {this.handleNumbers}/>
                    </div>
                </div>
                <div className="buttonContainer">{operations}</div>
                <div>
                    <p>Result</p>
                    <p>{this.state.res}</p>
                </div>
            </div>
        );
    }
}

export default App;