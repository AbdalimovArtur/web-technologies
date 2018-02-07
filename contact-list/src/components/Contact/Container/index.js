import {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css'
import * as React from "react";
import ContactList from "../List/ContactList";
import InputHandler from "../../Input/Input/index";
import SearchHandler from "../../Input/Search/index";

class ContactContainer extends Component {

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
            <div className="container">
                <SearchHandler searchValueChanged={this.changeSearchValue}/>
                <ContactList contacts={this.getContacts()} />
                <InputHandler onAddClick={this.onAddClick}/>
            </div>
        )
    }
}

export default ContactContainer;
