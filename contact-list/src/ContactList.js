import React from 'react'
import Contact from './Contact'

class ContactList extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                Hello Contacts {this.props.hello}
            </div>
        )
    }
}

export default ContactList