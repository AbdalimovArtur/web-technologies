import React from 'react'
import Gravatar from 'react-gravatar'

class Contact extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="row justify-content-center">
                <div className="col-4 contact-element">{this.props.contact.firstName}</div>
                <div className="col-4 contact-element">{this.props.contact.lastName}</div>
                <div className="col-2 contact-element">{this.props.contact.contactNumber}</div>
                <div className="col-2 contact-element"><Gravatar email={this.props.contact.lastName} style={{"borderRadius": "50%"}} size="20"/></div>

            </div>
        )
    }
}

export default Contact