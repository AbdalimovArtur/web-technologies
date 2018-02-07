import React, {Component} from 'react';
import Header from "./components/Header";
import ContactContainer from "./components/Contact/Container";
import MainPage from "./components/Home/Main";
import Route from "react-router-dom/es/Route";
import Switch from "react-router-dom/es/Switch";
import Todo from "./components/Todo/Todo";

class App extends Component {

    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path='/' component={MainPage} />
                    <Route path='/contact' component={ContactContainer} />
                    <Route path='/todo' component={Todo} />
                </Switch>
            </div>
        )
    }
}

export default App;
