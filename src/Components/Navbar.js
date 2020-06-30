import React from 'react'
import logo from '../logo.png'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import Home from '../Pages/Home'
import Products from '../Pages/Products'
import Product from '../Pages/Product'
import Cart from '../Pages/Cart'
import NotFounded from '../Pages/NotFounded'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'

function Navbar(props) {

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
                            <li className='nav-item shopingIcon position-relative d-flex align-items-center'>
                                <Link to='/Cart'>
                                    <span className='position-absolute'>{props.totalQuantity}</span>
                                    <FontAwesomeIcon icon={faShoppingCart} className='text-white' />
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>

            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/Products' component={Products} exact />
                <Route path='/Products/:id' component={Product} />
                <Route path='/Cart' component={Cart} />
                <Route path='/:NotFound' component={NotFounded} />
            </Switch>
        </BrowserRouter>
    )
}


const mapStateToProps = state => {
    return {
        totalQuantity: state.cart.reduce((acc, item) => acc += +item.quantity, 0)
    }
}
export default connect(mapStateToProps)(Navbar)
