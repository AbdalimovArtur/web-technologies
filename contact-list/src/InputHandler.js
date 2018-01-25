import React from 'react'

class InputHandler extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            searchInputValue: '',
            inputValue: ''
        }
    }
    
    render() {
        return (
            <input type="text"/>
        )
    }
}

export default InputHandler