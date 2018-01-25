import React from 'react'
import Contact from './Contact'

class ContactList extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                {this.props.contacts.map((value, index) => <Contact contact={value}/>)}
            </div>
        )
    }
}

export default ContactList