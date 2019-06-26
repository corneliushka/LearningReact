import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom'

const Navbar = (props) => {
/*     console.log(props)
    setTimeout(() => {
        props.history.push('/about')
    }, 2000)  */
    return (
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <a className="brand-logo">Time2Route</a>
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><NavLink to="/contact">Contact</NavLink></li> {/* NavLink permits to have a class active, it helps to stylizing when URL matches */}
                </ul>
            </div>
        </nav>
    )
}

export default withRouter(Navbar);