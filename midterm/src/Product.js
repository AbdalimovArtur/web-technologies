import React from 'react'
import './App.css'

class Product extends React.Component {

    constructor(props) {
        super(props)
    }

    handleClick = () => {
        this.props.handleProductClicked(this.props.id)
    };

    render() {
        return (
            <div onClick={this.handleClick} className="product" style={{backgroundColor: this.props.bgColor, color: this.props.color}}>
                {this.props.name} {this.props.price} тг
            </div>
        )
    }
}

export default Product