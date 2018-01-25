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

    render() {
        return (
            <div>
                <ContactList hello={"Yeah"} />
                <InputHandler />
            </div>
    )
    }
}

export default App;
