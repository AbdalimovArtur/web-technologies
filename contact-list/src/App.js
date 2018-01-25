import React, {Component} from 'react';
import ContactList from './ContactList'
import InputHandler from './InputHandler'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            contacts: []
        }
    }

    onAddClick = (inputValue) => {
        this.setState({
            contacts: [...this.state.contacts, inputValue]
        })
    };

    render() {
        return (
            <div>
                <ContactList contacts={this.state.contacts} />
                <InputHandler onAddClick={this.onAddClick}/>
            </div>
    )
    }
}

export default App;
