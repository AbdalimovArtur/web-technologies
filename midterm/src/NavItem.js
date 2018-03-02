import React from 'react'
import './App.css'

class NavItem extends React.Component {

    log = () => {
        this.props.handleClick(this.props.id)
    };

    render() {
        return (

            <div onClick={this.log} className="nav-item" style={{backgroundColor: this.props.bgColor}}>
                {this.props.title}
            </div>
        )
    }
}

export default NavItem;