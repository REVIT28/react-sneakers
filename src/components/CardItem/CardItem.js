import './CardItem.scss'
import React from 'react'
import { useState , useEffect} from 'react'

const CardItem = ({name, price, imagUrl, onHeart} ) => {

   const [isAdded, setIsAdded] = useState(true)
   const [isFavorite, setFavorite] = useState(true)

   const onAdd = () => {
    // if(isAdded === "/img/plus..svg"){
    //   setIsAdded ("/img/done.svg")
    // } 
    // if(isAdded === "/img/done.svg") {
    //   setIsAdded ("/img/plus..svg")
    // }
    setIsAdded(isAdded => !isAdded)
    
   }

   const onFavorite = () => {
    setFavorite(isFavorite => !isFavorite)
   }

    return (
        <div className="cardItem " >
            <div className="favorite">
              <img src={isFavorite ? "/img/heart-off.svg" : "/img/heart-on.png"}  onClick={onFavorite} alt="heart" />  
            </div>
            <img  className="a" width={133} height={112} src={imagUrl} alt="" />
            <h2 >{name}</h2>
            <div className="card-botton  d-flex justify-between align-center mt-15">
              <ul >
                <li className="text-uppercase "  style={{
              color: "#BDBDBD"}}>Цена</li>
                <li className="fw-bold">{price} руб.</li>
              </ul>
              <img className="card-button" onClick={onAdd} src={isAdded ? "/img/plus..svg" : "/img/done.svg"} alt="" />
              
            </div>
          </div>
    )
    

}

export default CardItem