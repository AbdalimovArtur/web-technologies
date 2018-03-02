import React from 'react'
import DatePicker from 'material-ui/DatePicker'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'
import {MenuItem, SelectField} from "material-ui";

class TodoCreator extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            priority: 1
        }
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

        let item = {
            headerText: this.state.headerText,
            description: this.state.description,
            dueDate: this.state.dueDate,
            priority: this.state.priority
        };

        this.props.createTodo(item);

        this.setState({
            headerText: '',
            description: '',
            dueDate: null
        })
    };

    datePickerChanged = (e, date) => {
        this.setState({
            dueDate: date
        });
    };

    handlePriorityChange = (event, index, value) => {
        this.setState({
            priority: value
        })
    };

    render() {

        const styles = {
            customWidth: {
                width: 200,
            },
        };

        return (
            <div>
                <div className="row justify-content-left">
                    <div className="col-md-8 mb-3">
                        <div className="mb-3">
                            <label htmlFor="headerText">Task Name</label>
                            <input type="text" name="headerText" className="form-control"
                                   onChange={this.inputValueChanged} value={this.state.headerText}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="descriptionName">Description</label>
                            <textarea type="text" name="description" className="form-control"
                                      style={{'height': 200 + 'px'}} onChange={this.inputValueChanged}
                                      value={this.state.description}/>
                        </div>
                        <div className="col-md-4 mb-3">
                            <label htmlFor="dueDate">Due Date</label>
                            <MuiThemeProvider>
                                <DatePicker hintText="Due Date" value={this.state.dueDate}
                                            onChange={this.datePickerChanged}/>
                            </MuiThemeProvider>
                        </div>
                        <MuiThemeProvider>
                            <SelectField
                                floatingLabelText="Priority"
                                value={this.state.priority}
                                onChange={this.handlePriorityChange}
                                style={styles.customWidth}>
                                <MenuItem value={1} primaryText="Important"/>
                                <MenuItem value={2} primaryText="Medium"/>
                                <MenuItem value={3} primaryText="Not important"/>
                            </SelectField>
                        </MuiThemeProvider>

                    </div>
                </div>
                <button className="btn btn-primary btn-lg btn-block btn-submit" onClick={this.createTodo}>Add Task
                </button>
            </div>
        )
    }
}

export default TodoCreator