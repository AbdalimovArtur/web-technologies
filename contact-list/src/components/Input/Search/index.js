import React from 'react'
import './styles.css'

class SearchHandler extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: ''
        }
    }

    searchValueChanged = (event) => {
        this.setState({
            searchValue: event.target.value
        });
        this.props.searchValueChanged(event.target.value)
    };

    render() {
        return (
            <div className="row justify-content-center search">
                <div className="col-md-10 mb-6">
                    <input type="text"
                           name="firstName"
                           placeholder="Search..."
                           className="form-control"
                           value={this.state.searchValue}
                           onChange={this.searchValueChanged}/>
                </div>
            </div>
        )
    }
}

export default SearchHandler