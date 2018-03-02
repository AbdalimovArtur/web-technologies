import React from 'react'
import './styles.css'

class TodoItem extends React.Component {



    constructor(props) {
        super(props);
        let s = props.card;

        this.state = {
            headerText: s.headerText,
            editing: false
        }
    }

    validateKey = (event) => {
        if (event.key === 'Enter' || event.key === 'Esc') {
            this.setState({
                editing: false
            })
        }
    };

    onHeaderChange = (event) => {
        let changedHeader = event.target.value;
        this.setState({
            headerText: changedHeader
        })
    };

    onHeaderClicked = () => {
        let editToggle = !this.state.editing;
        this.setState({
            editing: editToggle
        })
    };

    getHeaderText = () => {
        return <h3 onClick={this.onHeaderClicked}>{this.state.headerText}</h3>
    };

    getHeaderEditField = () => {
        return <input onMouseOut={() => console.log("moouse out ")} style={{backgroundColor: "none"}} value={this.state.headerText} onChange={(event) => this.onHeaderChange(event)}
                                                    onKeyPress={(event) => this.validateKey(event)}/>
    };

    render() {
        const colors = ['#d50000', '#ffea00', '#18ffff'];
        return (
            <div className="card-flex-item">
                <div className="card-flex-wrapper" style={{borderColor: colors[this.props.card.priority - 1]}}>
                    <div className="card-flex-image">
                        <img src="https://www.w3schools.com/howto/img_fjords.jpg" alt="img placeholder"/>
                    </div>
                    <div className="card-flex-content">
                        {this.state.editing ? this.getHeaderEditField() : this.getHeaderText()}
                        <p>{this.props.card.description.substring(0, 37)} {this.props.card.description.length >= 37 ? '...' : ''}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default TodoItem