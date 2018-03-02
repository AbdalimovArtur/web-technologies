import React, { Component } from 'react';
import './App.css';
import NavItem from "./NavItem";
import Product from "./Product";

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            items: [
                { id: 1, title: "Home", isSelected: false },
                { id: 2, title: "About", isSelected: false },
                { id: 3, title: "Content", isSelected: false }
            ],
            products: [
                { id: 1, name: "Ice-cream", price: 150, isSelected: false },
                { id: 2, name: "Milk", price: 300, isSelected: false },
                { id: 3, name: "Bread", price: 100, isSelected: false },
                { id: 4, name: "Candy", price: 200, isSelected: false },
            ]
        }
    }

    onItemClicked = (id) => {
        let items = this.state.items.slice();
        items.forEach(x => x.isSelected = false);
        let item = items.find(x => x.id === id);
        item.isSelected = true;
        this.setState({
            items: items
        });
    };

    onProductClicked = (id) => {
        console.log(id);
        let products = this.state.products.slice();
        let product = products.find(x => x.id === id);
        product.isSelected = !product.isSelected;
        this.setState({
            products: products
        });
    };

    render() {
        const items = this.state.items.map((item) => (
            <NavItem id={item.id} bgColor={item.isSelected ? 'red' : 'blue' } title={item.title} isSelected={item.isSelected} handleClick={this.onItemClicked}/>
        ));

        const products = this.state.products.map((product) => (
           <Product id={product.id}
                    name={product.name}
                    isSelected={product.isSelected}
                    bgColor={product.isSelected ? 'red' : 'blue' }
                    price={product.price}
                    handleProductClicked={this.onProductClicked}
                    color={product.isSelected ? 'white' : 'black' }/>
        ));

        let sum = 0;
        for (let i = 0; i < this.state.products.length; i++) {
            if (this.state.products[i].isSelected) {
                sum += this.state.products[i].price;
            }
        }

        return (
            <div>
                <div className="nav-task">
                    <h1>My navigation</h1>
                    <div className="nav-container">
                        {items}
                    </div>
                </div>
                <div className="products-task">
                    <div className="products-container">
                        <h1>Products</h1>
                        {products}
                        {"Total:" + sum}
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
