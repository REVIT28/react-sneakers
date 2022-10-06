import { AppContext } from "../../App";
import { useContext } from "react";
import { useState } from "react"
import ContentLoader from "react-content-loader"

import './CardItem.scss';

const Cards = ({id, name, imagUrl, price, onFavorite, onPlus, favorited = false, loading = false, }) => {

    const {isItemAdded } = useContext(AppContext) 
    const [isFavorite, setIsFavorite] = useState(favorited)

      

    const onClickPlus = () => {
    onPlus({ id, name, imagUrl, price})
     

    // isAdded && console.log({name, price, imagUrl})
 }

 const onClickFavorite = () => {
    onFavorite({ id, name, imagUrl, price });
    setIsFavorite(!isFavorite);
  };

    return (

        <div className="cardItem m-10 " >
          {loading ? (
            <ContentLoader 
                speed={2}
                width={210}
                height={210}
                viewBox="0 0 210 210"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb">
                  <rect x="10" y="0" rx="10" ry="10" width="150" height="120" /> 
                  <rect x="10" y="132" rx="3" ry="3" width="150" height="15" /> 
                  <rect x="10" y="157" rx="3" ry="3" width="93" height="15" /> 
                  <rect x="10" y="185" rx="3" ry="3" width="80" height="24" /> 
                  <rect x="116" y="181" rx="4" ry="4" width="32" height="32" />
            </ContentLoader>
          )
          
          
          : (
            
              <>
                  <div onClick={onClickFavorite} className="favorite">
                    <img src={isFavorite ?  "/img/heart-on.png"  : "/img/heart-off.svg"}   alt="heart" />  
                  </div>
                  <img  className="a" width={133} height={112} src={imagUrl} alt="" />
                  <h2 >{name}</h2>
                  <div className="card-botton  d-flex justify-between align-center mt-15">
                    <ul >
                      <li className="text-uppercase "  style={{
                    color: "#BDBDBD"}}>Цена</li>
                      <li className="fw-bold">{price} руб.</li>
                    </ul>
                    <img className="card-button"  onClick={onClickPlus}  src={isItemAdded(id) ?  "/img/done.svg" : "/img/plus..svg"} alt="plus" />
                    
                  </div>
              </>
          
          )}
              
            </div>
       
        
          
      )
      

}

export default Cards