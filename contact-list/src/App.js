import React, {Component} from 'react';
import ContactList from './components/Contact/List/ContactList'
import InputHandler from './components/Input/Input/index'
import SearchHandler from './components/Input/Search/index'
import 'bootstrap/dist/css/bootstrap.css'
import Header from "./components/Header";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            contacts: [],
            searchValue: ''
        }
    }

    onAddClick = (inputValue) => {
        this.setState({
            contacts: [...this.state.contacts,
                {
                    'firstName' : inputValue.firstName,
                    'lastName' : inputValue.lastName,
                    'contactNumber': inputValue.contactNumber
                }
            ]
        })
    };

    getContacts = () => {
        console.log(this.state.searchValue);
        let p = this.state.contacts.slice();
        p = p.filter(x => (this.state.searchValue === '' ? true : (x.firstName.startsWith(this.state.searchValue) ||
            x.lastName.startsWith(this.state.searchValue) ||
            x.contactNumber.startsWith(this.state.searchValue))));
        return p
    };

    changeSearchValue = (newSearchValue) => {
       this.setState({
           searchValue: newSearchValue
       })
    };

    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <SearchHandler searchValueChanged={this.changeSearchValue}/>
                    <ContactList contacts={this.getContacts()} />
                    <InputHandler onAddClick={this.onAddClick}/>
                </div>
            </div>
    )
    }
}

export default App;
