import React from 'react'
import './styles.css'
import TodoContent from "../Content";

class TodoItem extends React.Component {

    render() {
        return(
            <div id={'card-' + this.props.idNum} className="card-flex-item">
                <TodoContent content={this.props.content} />
            </div>
        );
    }
}

export default TodoItem