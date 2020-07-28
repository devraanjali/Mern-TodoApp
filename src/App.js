import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css" ;
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import CreateTodo from "./components/create-todoComponent";
import EditTodo from "./components/edit-todoComponent";
import TodosList from "./components/todos-listComponent";
import logo from "./logo.svg";
import Main from './components/MainComponent';
class App extends Component {
  // render() {
  //   return (
  //     <div className="App">
  //         <Main />
  //     </div>
      

  //   );
  // }

  render() {
    return (
        <Router>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="https://codingthesmartway.com" target="_blank">
                        <img src={logo} width="30" height="30" alt="CodingTheSmartWay.com" />
                    </a>
                    <Link to="/" className="navbar-brand">MERN-Stack Todo App</Link>
                    <div className="collpase navbar-collapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="navbar-item">
                                <Link to="/" className="nav-link">Todos</Link>
                            </li>
                            <li className="navbar-item">
                                <Link to="/create" className="nav-link">Create Todo</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <br/>
                <Route path="/" exact component={TodosList} />
                <Route path="/edit/:id" component={EditTodo} />
                <Route path="/create" component={CreateTodo} />
            </div>
        </Router>

    );
}
}

export default App;
