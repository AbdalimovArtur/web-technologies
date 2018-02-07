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
                                 <Link to='/' className="nav-link navigation-link navigation-link-active">Home</Link>
                             </li>
                             <li className="nav-item">
                                 <Link to='/contact' className="nav-link navigation-link">Contacts</Link>
                             </li>
                             <li className="nav-item">
                                 <Link to='/todo' className="nav-link navigation-link">Todo</Link>
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