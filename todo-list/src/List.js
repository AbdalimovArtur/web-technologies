import React from 'react'

class List extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul>
                {
                    this.props.todoList().map((todo, index) =>
                        <li key={index}>
                            {todo.todo}
                            {todo.disabled ? " -> Disabled" : "-> !Disabled"}
                            {todo.timestamp}
                            <button onClick={() => this.props.deleteTodo(index)}>Delete</button>
                            <button onClick={() => this.props.disableTodo(index)}>Disable</button>
                        </li>
                    )
                }
            </ul>
        );
    };
}

export default List;
