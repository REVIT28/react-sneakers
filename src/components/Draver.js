const Draver = ({onDrawer}) => {

  

    return (
      <div   className="overlay " onClick={onDrawer}>
        
        <div className="drawer " onClick={e => e.stopPropagation()}>
        <div className='modal-backdrop' ></div>  
            <div className="itemHead d-flex justify-between  mb-40">
                <h2>Корзина</h2>
                <img className="removeBtn cu-p" onClick ={onDrawer}  width={32} height={32} src="/img/ESC.svg" alt="" />
              </div>

            <div className="itemsCart">
              
              <div className="cartItem d-flex align-center">
                <img className="mr-15 " width={70} height={70}src="/img/image 4.jpg" alt="" />
                <div className="mr-20">
                  <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                  <b >12 999 руб.</b>
                </div>
                <img className="removeBtn " width={32} height={32} src="/img/ESC.svg" alt="" />
              </div>
              <div className="cartItem d-flex align-center">
                <img className="mr-15 " width={70} height={70}src="/img/image 4.jpg" alt="" />
                <div className="mr-20">
                  <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                  <b >12 999 руб.</b>
                </div>
                <img className="removeBtn " width={32} height={32} src="/img/ESC.svg" alt="" />
              </div>
              <div className="cartItem d-flex align-center">
                <img className="mr-15 " width={70} height={70}src="/img/image 4.jpg" alt="" />
                <div className="mr-20">
                  <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                  <b >12 999 руб.</b>
                </div>
                <img className="removeBtn " width={32} height={32} src="/img/ESC.svg" alt="" />
              </div>
              <div className="cartItem d-flex align-center">
                <img className="mr-15 " width={70} height={70}src="/img/image 4.jpg" alt="" />
                <div className="mr-20">
                  <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                  <b >12 999 руб.</b>
                </div>
                <img className="removeBtn " width={32} height={32} src="/img/ESC.svg" alt="" />
              </div>

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
      </div>
    )
}
export default Draver