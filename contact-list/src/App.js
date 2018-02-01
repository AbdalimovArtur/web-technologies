import React, {Component} from 'react';
import Header from "./components/Header";
import TodoContainer from "./components/Todo/Container";

class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header />
                <TodoContainer />
            </div>
    )
    }
}

export default App;
