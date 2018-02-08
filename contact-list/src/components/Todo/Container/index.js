import React from 'react'
import './styles.css'
import PropTypes from 'prop-types'
import TodoItem from "../Item";

class TodoContainer extends React.Component {

    render() {
        return (
            <div className="card-flex">
                {this.props.cards.map((value, index) =>
                    <TodoItem idNum={index} card={value} headerText={value.headerText} />)}
            </div>
        );
    }
}

TodoContainer.PropTypes = {
    cards: PropTypes.array.isRequired
};

export default TodoContainer