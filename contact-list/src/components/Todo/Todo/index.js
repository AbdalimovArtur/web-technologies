import React from 'react'
import TodoContainer from "../Container";
import TodoCreator from "../Creator";
import 'bootstrap/dist/css/bootstrap.css'

class Todo extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="container">
                <TodoContainer />
                <TodoCreator />
            </div>
        )
    }
}

export default Todo