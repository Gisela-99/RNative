import {  createContext, useContext, useState } from "react";

const CartContext = createContext()

export const CartProvider = ({children}) =>{
  const [cart, setCart]=useState([])

  const addToCart = (producto) =>{
    setCart(prev => [...prev, producto])
  }
  return(
    <CartContext.Provider value={{cart,addToCart}}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = ()=> useContext (CartContext)