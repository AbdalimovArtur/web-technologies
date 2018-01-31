import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'

class InputHandler extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    inputValueChanged = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });

        console.log(this.state.firstName + " " + this.state.lastName)
    };

    submitContact = (event) => {
        event.preventDefault();
        this.props.onAddClick(
            {
                'firstName' : this.state.firstName,
                'lastName': this.state.lastName,
                'contactNumber': this.state.contactNumber
            });

        this.setState({
            firstName: '',
            lastName: '',
            contactNumber: ''
        })
    };

    render() {
        return (
            <div className="row contact-form justify-content-center">
                <form>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" name="firstName" className="form-control" onChange={this.inputValueChanged} value={this.state.firstName}/>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="lastName">Email</label>
                            <input type="text" name="lastName" className="form-control" onChange={this.inputValueChanged} value={this.state.lastName}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 mb-6">
                            <label htmlFor="contactNumber">Contact Number</label>
                            <input type="text" name="contactNumber" className="form-control contact" onChange={this.inputValueChanged} value={this.state.contactNumber}/>
                        </div>
                    </div>
                    <button className="btn btn-primary btn-lg btn-block" onClick={this.submitContact}>Add contact</button>
                </form>
            </div>
        )
    }
}

export default InputHandler