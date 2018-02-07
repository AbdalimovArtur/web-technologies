import React from 'react'
import DatePicker from 'material-ui/DatePicker'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'

class TodoCreator extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    inputValueChanged = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    };

    createTodo = (event) => {
        //
        // this.props.onAddClick(
        //     {
        //         'taskName' : this.state.taskName,
        //         'descriptionText': this.state.descriptionText,
        //         'dueDate': this.state.dueDate
        //     });

        this.setState({
            taskName: '',
            descriptionText: '',
            dueDate: ''
        })
    };

    datePickerChanged = (e, date) => {
        this.setState({
            dueDate: date
        });
        console.log(this.state.dueDate);
    };

    render() {
        return (
            <div>
                <div className="row justify-content-left">
                    <div className="col-md-8 mb-3">
                        <div className="mb-3">
                            <label htmlFor="taskName">Task Name</label>
                            <input type="text" name="taskName" className="form-control" onChange={this.inputValueChanged} value={this.state.taskName}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="descriptionName">Description</label>
                            <textarea type="text" name="descriptionText" className="form-control" style={{'height': 200 + 'px'}} onChange={this.inputValueChanged} value={this.state.descriptionText}/>
                        </div>
                        <div className="col-md-4 mb-3">
                            <label htmlFor="dueDate">Due Date</label>
                            <MuiThemeProvider>
                                <DatePicker hintText="Due Date" value={this.state.dueDate} onChange={this.datePickerChanged}/>
                            </MuiThemeProvider>
                        </div>
                    </div>
                </div>
                <button className="btn btn-primary btn-lg btn-block btn-submit" onClick={this.createTodo}>Add Task</button>
            </div>
                )
    }
}

export default TodoCreator