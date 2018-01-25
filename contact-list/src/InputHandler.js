import React from 'react'

class InputHandler extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            searchInputValue: '',
            inputValue: ''
        }
    }

    inputValueChanged = (event) => {
        this.setState({
            inputValue: event.target.value
        })
    };

    submitContact = (event) => {
        event.preventDefault();
        this.props.onAddClick(this.state.inputValue);
        this.setState({
            inputValue: ''
        })
    };

    render() {
        return (
            <form>
                <input id="firstname" name="firstname" type="text" placeholder="Search..." />
                <br/>
                <label>Add</label>
                <input type="text" onChange={this.inputValueChanged} value={this.state.inputValue} />
                <button onClick={this.submitContact}>add</button>
            </form>
        )
    }
}

export default InputHandler