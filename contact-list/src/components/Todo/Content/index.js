import React from 'react'
import './styles.css'

class TodoContent extends React.Component {
    render() {
        return(
            <div className="card-flex-wrapper">
                <div className="card-flex-image">
                    <img src={this.props.imgSrc} alt="img placeholder" />
                </div>
                <div className="card-flex-content">
                    <h3>{this.props.headerText}</h3>
                    <p>{this.props.description}</p>
                </div>
            </div>
        );
    }
}

export default TodoContent