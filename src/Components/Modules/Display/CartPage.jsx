import React, { useContext } from 'react';
import { CartContext } from './CartContext';

function CartPage() {
    const {cart, setCart} = useContext(CartContext)

    const removeFromCart = (itemId) => {
        setCart(cart.filter(item => item.id !== itemId))
    }
  
   

    return (
        <div className="container p-5">
            <h2>Your Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    <ul>
                        {cart.map((item, index) => (
                            <li key={index} className="cart-item d-flex align-items-center">
                                <div>

                                <h5>{item.name}</h5>
                                <p>Price: ₹{item.price}</p>
                                <p>Brand: {item.brand}</p>
                                <button className="btn btn-danger" onClick={() => removeFromCart(item.id)}  style={{width:'50%'}}>
                                    Remove
                                </button>
                                
                                </div>

                                <div>
                                    <img src={item.image} alt={item.name} style={{width:'250px',height:'400px'}} />
                                </div>
                                
                                
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default CartPage;
