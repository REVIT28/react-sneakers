import { Link } from "react-router-dom"
import { AppContext } from "../App"
import { useContext } from "react"
import React from 'react'

const Header = ({onDrawer}) => {

    const { cartItems } = useContext(AppContext);
  const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0);
  


    return (
        <header className="d-flex justify-between align-center">
            <Link to = "/">
                <div className="d-flex align-center m-45 ">
                
                    <img className="mr-20" width={40} height={40} src="/img/header.png" alt="" />
                    
                    <div className="headerInfo">
                        <h3 className="m-5 text-uppercase ">React Sneakers</h3>
                        <p className="m-5">Магазин лучших кроссовок</p>
                    </div>
                </div>
            </Link>

            <ul className="headerRight d-flex  m-45 ">
            <li className="mr-30" >
                <img className="cu-p"width={18} height={18} onClick ={onDrawer}  src="/img/Group.svg" alt="" />
                <span className=" ml-10">{totalPrice} р.</span>
            </li>
            <li>
               <Link to = "/favorite">
                    <img width={18} height={18} className="mr-30" src="/img/zmdi_favorite-outline.svg" alt="" />
               </Link>
            </li>
            <li>
                <Link to = "/order">
                    <img width={18} height={18} src="/img/Union.svg" alt="" />
                </Link>    
            </li>
            </ul>
        </header>
    )
}
export default Header



