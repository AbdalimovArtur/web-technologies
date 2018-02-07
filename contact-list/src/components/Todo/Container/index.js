import React from 'react'
import './styles.css'
import TodoItem from "../Item";

class TodoContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            cards: []
        }
    }

    render() {
        var cards = [];
        for(var i = 1; i <= 4; i += 1) {
            cards.push(
                <TodoItem idNum={i}  />);
        }
        return (
                <div className="card-flex">{cards}</div>
        );
    }
}

export default TodoContainer