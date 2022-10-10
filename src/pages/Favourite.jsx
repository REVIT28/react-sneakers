import { useContext } from "react"
import Cards from "../components/Cards/Cards"
import {AppContext} from "../App"
import React from "react"
function Favorite (  ) {

const {favorites, onAddToFavorite } = useContext(AppContext)
  
    return (
        <div className="content">
        <div className="d-flex align-center justify-between">
          <h1 className="">Мои закладки</h1>
        </div>
        <div className="cards d-flex  flex-wrap p-20">
          {favorites.map((item, index) => (
            <Cards key={index} favorited={true} onFavorite={onAddToFavorite}  {...item}  />
          ))}
        </div>
      </div>
    )
}

export default Favorite