import React from 'react'
import TodoContainer from "../Container";
import TodoCreator from "../Creator";
import 'bootstrap/dist/css/bootstrap.css'

class Todo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            cards: []
        }
    }

    todoItemAdded = (item) => {
        let tempCards = this.state.cards.slice();
        tempCards.push(item);
        this.setState({
            cards: tempCards
        });
    };

    render() {
        return (
            <div className="container">
                <TodoContainer cards={this.state.cards} />
                <TodoCreator createTodo={this.todoItemAdded}/>
            </div>
        )
    }
}

export default Todo