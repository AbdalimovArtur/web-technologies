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

// ReactDOM.render(<TodoContent
//     imgSrc="https://placeimg.com/640/480/nature"
//     headerText="One"
//     description="I'm a card and I'm first"
//     url="https://chriswrightdesign.com/experiments/using-flexbox-today/#card-layout" />, document.getElementById('card-1'));
//
// ReactDOM.render(<TodoContent
//     imgSrc="https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/68dd54ca-60cf-4ef7-898b-26d7cbe48ec7/10-dithering-opt.jpg"
//     headerText="One"
//     description="I'm a card and I'm first"
//     url="https://chriswrightdesign.com/experiments/using-flexbox-today/#card-layout" />, document.getElementById('card-2'));
//
// ReactDOM.render(<TodoContent
//     imgSrc="https://www.w3schools.com/howto/img_fjords.jpg"
//     headerText="One"
//     description="I'm a card and I'm first"
//     url="https://chriswrightdesign.com/experiments/using-flexbox-today/#card-layout" />, document.getElementById('card-3'));
//
// ReactDOM.render(<TodoContent
//     imgSrc="https://placeimg.com/640/480/nature"
//     headerText="One"
//     description="I'm a card and I'm first"
//     url="https://chriswrightdesign.com/experiments/using-flexbox-today/#card-layout" />, document.getElementById('card-4'));
