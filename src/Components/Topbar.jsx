import React, { useContext } from 'react'

import { Link } from 'react-router-dom'
import { CartContext } from './Modules/Display/CartContext'

function Topbar() {
   
    const { cart } = useContext(CartContext)

  
    return (
        <div className="topbar">
            <div className="cart-info">
                {/* Display the cart count */}
                <Link to={'/cartpage'} className="link"><h5>Cart ({cart.length})</h5></Link>
            </div>
        </div>
    )
}

export default Topbar
