import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'
import { remove_from_cart } from '../Store/actions'

function ProductItem(props) {
    const { id, img, name, price, quantity, total } = props

    return (
        <div className="card my-3">
            <div className='img-container position-relative'>
                <img className="card-img-top" src={img} alt="Card image cap" />
            </div>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <div className='card-product-desc'>
                    <p className="card-text my-1">Price: {price}$</p>
                    <p className="card-text my-1">Quantity: {quantity}</p>
                    <p className="card-text my-1 badge badge-info p-2 rounded-pill">Total: {total}$</p>
                </div>
                <button className="btn text-white mt-2 rounded-pill px-3" onClick={() => props.remove_from_cart(id)}>
                    Delete
                    <FontAwesomeIcon icon={faTrash} className='ml-2' />
                </button>
            </div>

        </div>
    )
}


export default connect(null, { remove_from_cart })(ProductItem)
