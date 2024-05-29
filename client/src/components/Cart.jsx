import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getGuidesFromCart } from "../redux/actions/guidesActions"

export const Cart = () => {

    const dispatch = useDispatch()
    const cart = useSelector((state) => state.guide.cart)
    console.log('cart', cart);
    const userId = 7
    

    useEffect(() => {
        dispatch(getGuidesFromCart(userId))
    }, [])



    //Total price, es la suma de todas las guías agregadas al carrito

    return (
        <div>
            <h1>Carrito de compras</h1>
       
        </div>
    )
}