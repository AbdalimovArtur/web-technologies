import React from 'react'
import Contact from './Contact'
import './contact.css'

class ContactList extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div className="row justify-content-center">
                    <div className="col-4 contact-element"><b>Name</b></div>
                    <div className="col-4 contact-element"><b>Email</b></div>
                    <div className="col-2 contact-element"><b>Contact Number</b></div>
                    <div className="col-2 contact-element"><b>Gravatar</b></div>
                </div>
                {this.props.contacts.map((value, index) => <Contact contact={value}/>)}
            </div>
    )
    }
}

export default ContactList