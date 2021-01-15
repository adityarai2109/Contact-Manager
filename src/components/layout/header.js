import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
    
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-3 py-3">
                <div className="container">
                    <a href="/" className="navbar-brand">Contact Manager</a>
                    <ul className="navbar-nav">
                        <li className="nav-item nav-options">
                            <Link to="/" className="nav-link"><i className="fas fa-home">Home</i></Link>
                            <Link to="/contact/add" className="nav-link"><i className="fas fa-plus">Add contact</i></Link>
                            <Link to="/about" className="nav-link"><i className="fas fa-question">About</i></Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

