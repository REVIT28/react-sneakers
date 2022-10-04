import { useState } from "react"


const Draver = ({onDrawer, items=[], onRemoveCart }) => {

  
  
  

    return (
      <div   className="overlay " onClick={onDrawer}>
        
        <div className="drawer " onClick={e => e.stopPropagation()}>

        

            <div className="itemHead d-flex justify-between  mb-40">
                <h2>Корзина</h2>
                <img className="removeBtn cu-p" onClick ={onDrawer}  width={32} height={32} src="/img/ESC.svg" alt="" />
            </div>

            {
              items.length > 0 ? (
                <div className="">
                  <div className="itemsCart">
              
              {items.map((obj) => (
                
                <div key={obj.id} className="cartItem d-flex align-center">
                  <img className="mr-15 " width={70} height={70}src={obj.imagUrl} alt="" />
                  <div className="mr-20">
                    <p className="mb-5">{obj.name}</p>
                    <b >{obj.price} руб.</b>
                  </div>
                  <img onClick = {() => onRemoveCart(obj.id)} className="removeBtn " width={32} height={32} src="/img/ESC.svg" alt="" />
                </div>
                
              ))}
              

            </div>

            <ul className="cartTotalBlock">
              <li className="d-flex align-end mt-20">
                <span>Итого:</span>
                <div></div>
                <b>21 498 руб. </b>
              </li>
              <li className=" d-flex align-end mt-20">
                <span>Налог 5%:</span>
                <div></div>
                <b>1074 руб. </b>
              </li>
              <img className=" order "src="/img/order.png" alt="" />
            </ul> 
                </div>
              ) : (
                <div className="basket ">
                <img width={120} height={120} src="/img/basket.jpg" alt="" />
                <div className="">
                  <b>Корзина пустая</b>
                  <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
                </div>
                <img  onClick ={onDrawer} className=" return mt-40 "src="/img/return.png" alt="" />
              </div>
              )
            }

            


            
        </div>
      </div>
    )
}
export default Draver