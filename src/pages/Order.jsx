
import Cards from "../components/Cards/Cards"
import axios from "axios"
import { useState, useEffect } from "react"
import React from "react"
import { AppContext } from "../App"
import { useContext } from "react"

function Order () {

const [isLoading, setIsLoading] = useState(true)
const [order, setOrder] = useState([])
const { onAddToFavorite} =useContext(AppContext)

useEffect(() => {
  const onOrder = async () => {
  const {data} = await axios.get("https://632f7e63b56bd6ac45b0b8d3.mockapi.io/order")
  setOrder(data.map(obj => obj.items).flat()); 
  setIsLoading(false)
  }
  


  onOrder()
}, [])
  
    return (
        <div className="content">
        <div className="d-flex align-center justify-between">
          <h1 className="">Мои заказы</h1>
        </div>
        <div className="cards d-flex  flex-wrap p-20">
          {(isLoading ? [...Array(8)] : order).map((item, index) => (
            <Cards key={index}  onFavorite={onAddToFavorite} loading ={isLoading}  {...item}  />
          ))}
        </div>
      </div>
    )
}

export default Order