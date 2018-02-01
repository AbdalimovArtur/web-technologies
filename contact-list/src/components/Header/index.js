import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'

class Header extends React.Component {

    constructor(props) {
        super(props)
    }

    render () {
         return (
             <div className="navigation-container">
                 <nav className="navbar navbar-expand-lg navigation-container">
                     <div className="collapse navbar-collapse justify-content-end navigation-container" id="navbarNav">
                         <ul className="navbar-nav">
                             <li className="nav-item active">
                                 <a className="nav-link navigation-link navigation-link-active" href="#">Home <span className="sr-only">(current)</span></a>
                             </li>
                             <li className="nav-item">

                                 <a className="nav-link navigation-link" href="#">Todo</a>
                             </li>
                             <li className="nav-item">
                                 <a className="nav-link navigation-link" href="#">Contacts</a>
                             </li>
                             <li className="nav-item">
                                 <a className="nav-link btn-like" href="#">Log In</a>
                             </li>
                             <li className="nav-item">
                                 <a className="nav-link btn-like" href="#">Register</a>
                             </li>
                         </ul>
                     </div>
                 </nav>
             </div>
        )
    }
}

export default Header