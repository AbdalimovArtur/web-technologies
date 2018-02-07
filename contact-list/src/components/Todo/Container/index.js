import React from 'react'
import './styles.css'
import TodoItem from "../Item";

class TodoContainer extends React.Component {

    render() {
        var cards = [];
        for(let i = 0; i < this.props.cards.length; i++) {
                cards.push(<TodoItem idNum={i} card={this.props.cards[i]}/>);
        }
        return (
                <div className="card-flex">{cards}</div>
        );
    }
}

export default TodoContainer