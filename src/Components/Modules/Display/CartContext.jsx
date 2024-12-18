import React, { useState } from 'react'
import { createContext } from 'react'


    export const CartContext = createContext();

    export const CartProvider = ({ children }) => {
        const [cart, setCart] = useState([])

        const addToCart = (item) => {
            setCart((prevCart) => [...prevCart, item])
        }
    

  return (
    <CartContext.Provider value={{cart, addToCart, setCart}}>
        {children}
    </CartContext.Provider>
  )

}