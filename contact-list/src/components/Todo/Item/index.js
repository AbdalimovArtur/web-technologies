import React from 'react'
import './styles.css'
import TodoContent from "../Content";

class TodoItem extends React.Component {

    render() {
        return(
            <div className="card-flex-item">
                <div className="card-flex-wrapper">
                    <div className="card-flex-image">
                        {/*<img src={this.props.imgSrc} alt="img placeholder" />*/}
                    </div>
                    <div className="card-flex-content">
                        <h3>{this.props.card.headerText}</h3>
                        <p>{this.props.card.description}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default TodoItem