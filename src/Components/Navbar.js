import React from 'react'
import logo from '../logo.png'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Home from '../Pages/Home'
import Products from '../Pages/Products'
import Product from '../Pages/Product'
import Cart from '../Pages/Cart'

function Navbar() {
    return (
        <BrowserRouter>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className='container'>
                    <a className="navbar-brand">
                        <img src={logo} style={{ width: '40px', height: '40px' }} />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to='/'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/Products'>Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/Cart'>Cart</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>

            <Route path='/' exact component={Home} />
            <Route path='/Products' component={Products} exact />
            <Route path='/Products/:id' component={Product} />
            <Route path='/Cart' component={Cart} />
        </BrowserRouter>
    )
}

export default Navbar
