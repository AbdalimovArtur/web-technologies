import React, {Component} from 'react';
import List from './List'


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todoList: [],
            inputValue: '',
        }
    }

    onChange = (event) => {
        this.setState({inputValue: event.target.value})
    };

    onSubmit = (event) => {
        event.preventDefault();
        this.setState({
            todoList: [...this.state.todoList, {
                'todo': this.state.inputValue,
                'disabled': false,
                'timestamp' : (new Date()).toString()
            }],
            inputValue: '',
        });
    };

    deleteTodo = (index) => {
        let s = this.getTodoList();
        s.splice(index, 1);
        this.setState({
            todoList: s,
        });
    };

    disableTodo = (index) => {
        let s = this.getTodoList();
        s[index].disabled = !s[index].disabled;
        this.setState({
            todoList: s,
        });
    };

    getTodoList = () => {
        let active = this.state.todoList.slice()
            .filter(x => !x.disabled)
            .sort((x, y) => new Date(x.timestamp) > new Date(y.timestamp));
        let deactive = this.state.todoList.slice()
            .filter(x => x.disabled)
            .sort((x, y) => new Date(x.timestamp) > new Date(y.timestamp));
        return [...active, ...deactive];
    };

    render() {
        return (
            <div>
                <form className="App" onSubmit={this.onSubmit}>
                    <input value={this.state.inputValue} onChange={this.onChange}/>
                    <button>Submit</button>
                </form>
                <List todoList={this.getTodoList} deleteTodo={this.deleteTodo} disableTodo={this.disableTodo}/>
            </div>
        );
    }
}

export default App;
