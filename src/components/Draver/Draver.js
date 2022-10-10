import Info from "../info"

import React from 'react'
import axios from "axios"

import { useState } from "react"
import { AppContext } from "../../App"
import { useContext } from "react"

import './Draver.scss';

const Draver = ({onDrawer, items=[], onRemoveCart }) => {

  const [isOrderComplete, setIsOrderCompleted] = useState(false)
  const {setCartItems, cartItems} = useContext(AppContext)
  const [orderId, swtOrderId] = useState(null)


  
  const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0);

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))


  const onClickOrder = async () => {
    const {data} = await axios.post("https://632f7e63b56bd6ac45b0b8d3.mockapi.io/order" , {items: cartItems})
    swtOrderId(data.id)
    
     
    setIsOrderCompleted(true)
    setCartItems([])

    for (let i = 0; i < cartItems.length; i++) {
      const element = cartItems[i];
      await axios.delete("https://632f7e63b56bd6ac45b0b8d3.mockapi.io/cart", + element.id) 
      await delay(1000)
    }
    
  }
  
  
  

    return (
      <div   className="overlay " onClick={onDrawer}>
        
        <div className="drawer " onClick={e => e.stopPropagation()}>

        

            <div className="itemHead d-flex justify-between  mb-40  " >
                <h2>Корзина</h2>
                <img className="removeBtn cu-p" onClick ={onDrawer}  width={32} height={32} src="img/ESC.svg" alt="" />
            </div>

            {
              items.length > 0 ? (
                <div className=" cartsOr d-flex flex-column flex">
                  <div className="cartsOrItem ">
                    {items.map((obj) => (
                      
                      <div key={obj.id} className="cartItem d-flex align-center ">
                        <img className="mr-15 " width={70} height={70}src={obj.imagUrl} alt="" />
                        <div className="mr-20">
                          <p className="mb-5">{obj.name}</p>
                          <b >{obj.price} руб.</b>
                        </div>
                        <img onClick = {() => onRemoveCart(obj.id)} className="removeBtn " width={32} height={32} src="img/ESC.svg" alt="" />
                      </div>
                      
                    ))}
                  </div>

                  <ul className="cartTotalBlock">
                    <li className="d-flex align-end mt-20">
                      <span>Итого:</span>
                      <div></div>
                      <b>{totalPrice} руб. </b>
                    </li>
                    <li className=" d-flex align-end mt-20">
                      <span>Налог 5%:</span>
                      <div></div>
                      <b> {Math.floor(totalPrice / 100 * 5)} руб. </b>
                    </li>
                    <img onClick = {onClickOrder} className=" order "src="img/order.png" alt="" />
                  </ul> 
                </div>
              ) : (

                <Info
                name = {isOrderComplete ? "Заказ оформлен!" : "Корзина пустая"}
                description= {isOrderComplete ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке` :"Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."}
                image =  {isOrderComplete ? "img/mpty.png" : "img/basket.jpg"}
                onClick = {onDrawer}
                
                />
               
              )
            }

            


            
        </div>
      </div>
    )
}
export default Draver