import React from 'react'

class Contact extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <h1>{this.props.contact}</h1>
        )
    }
}

export default Contact