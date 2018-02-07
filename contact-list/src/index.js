import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import BrowserRouter from "react-router-dom/es/BrowserRouter";
import TodoContent from "./components/Todo/Content";
import './styles.css'

ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>), document.getElementById('root'));

ReactDOM.render(<TodoContent
    imgSrc="https://placeimg.com/640/480/nature"
    headerText="One"
    description="I'm a card and I'm first"
    url="https://chriswrightdesign.com/experiments/using-flexbox-today/#card-layout" />, document.getElementById('card-1'));

ReactDOM.render(<TodoContent
    imgSrc="https://placeimg.com/640/480/nature"
    headerText="One"
    description="I'm a card and I'm first"
    url="https://chriswrightdesign.com/experiments/using-flexbox-today/#card-layout" />, document.getElementById('card-2'));

ReactDOM.render(<TodoContent
    imgSrc="https://placeimg.com/640/480/nature"
    headerText="One"
    description="I'm a card and I'm first"
    url="https://chriswrightdesign.com/experiments/using-flexbox-today/#card-layout" />, document.getElementById('card-3'));

ReactDOM.render(<TodoContent
    imgSrc="https://placeimg.com/640/480/nature"
    headerText="One"
    description="I'm a card and I'm first"
    url="https://chriswrightdesign.com/experiments/using-flexbox-today/#card-layout" />, document.getElementById('card-4'));