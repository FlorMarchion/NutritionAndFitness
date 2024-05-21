import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getGuidesFromCart } from "../redux/actions/guidesActions"
// import { GuideDetails } from "./guides/GuideDetails";

export const Cart = () => {

    const dispatch = useDispatch()
    const cart = useSelector((state) => state.guide.cart)
    console.log('Carrito', cart);

    useEffect(() => {
        dispatch(getGuidesFromCart())
    }, [])

    //Total price, es la suma de todas las guías agregadas al carrito

    return (
        <di>
            <div>Carrito de compras</div>
            {/* <GuideDetails/> */}

        </di>
    )
}