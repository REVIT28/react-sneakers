import Home from "./pages/Home";
import Favorite from "./pages/Favourite";
import Header from "./components/Header";
import Draver from "./components/Draver";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import React from 'react'
import { useState, useEffect, } from 'react'
import { createContext } from "react";



export const AppContext = createContext({})


function App() {

  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [cartOpened, setCartOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(true);



    useEffect(() => {
      
  async function getResourse ()  {
    
    const cartResponse = await axios.get("https://632f7e63b56bd6ac45b0b8d3.mockapi.io/cart")   
    const favoriteResponse = await axios.get("https://632f7e63b56bd6ac45b0b8d3.mockapi.io/favorite")   
    const itemsResponse = await axios.get("https://632f7e63b56bd6ac45b0b8d3.mockapi.io/Items")

    setIsLoading(false)
    setCartItems(cartResponse.data)
    setFavorites(favoriteResponse.data)
    setItems(itemsResponse.data)
  
 }
      getResourse()
    }, [])

    const onRemoveCart =  (id) => {
      axios.delete(`https://632f7e63b56bd6ac45b0b8d3.mockapi.io/cart/${id}`)
     setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(id)))  
   }

    const onChangeSearchInput = (e) => {
      setSearchValue(e.target.value)  
    }

    const onAddToCart = (obj) => {
      
  
      if (cartItems.find((item) => item.id === obj.id)) {
        axios.delete(`https://632f7e63b56bd6ac45b0b8d3.mockapi.io/cart/${obj.id}`)
        setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
      } else {
        axios.post("https://632f7e63b56bd6ac45b0b8d3.mockapi.io/cart", obj)
        setCartItems((prev) => [...prev, obj]);    
      }
  }

 

  const onAddToFavorite =  async (obj) => {
    try {
      if (favorites.find((favObj) => favObj.id === obj.id)) {
         axios.delete(`https://632f7e63b56bd6ac45b0b8d3.mockapi.io/favorite/${obj.id}`)
        setFavorites((prev) => prev.filter(item => Number(item.id) !== Number(obj.id)))
      } else {
        const { data } = await axios.post("https://632f7e63b56bd6ac45b0b8d3.mockapi.io/favorite", obj)
        setFavorites((prev) => [...prev, data] )
      }
    } catch (error) {
      alert('Не удалось добавить в фавориты');
    }
    
  }

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.id) === Number(id));
  };

  
  
  
    const onDrawer = () => {
      setCartOpened(basket => !basket ) 
        document.body.style.overflow = "hidden"     
    }


  return (
    <AppContext.Provider value = {{items,
      cartItems,
      favorites,
      isItemAdded,
      onAddToFavorite,
      setCartOpened,
      setCartItems,}}>
      <Router>
        <div className="wrapper clear">
      {cartOpened ? <Draver onRemoveCart = {(id) =>onRemoveCart(id)} items = {cartItems} onDrawer = {() => onDrawer()} /> : document.body.style.overflow = "" }
      
      <Header
      onDrawer={() => onDrawer()}
      />    
      
     <Routes>
        <Route path = "/" element={ <Home
               items={items}
               cartItems = {cartItems}
               searchValue={searchValue}
               setSearchValue={setSearchValue}
               onChangeSearchInput={onChangeSearchInput}
               onAddToFavorite={onAddToFavorite}
               onAddToCart={onAddToCart}
               isLoading = {isLoading}
              />}/>
         <Route path = "/favorite" element={ <Favorite
             
              onAddToFavorite = {onAddToFavorite}
              
              />}/>
        
     </Routes>

      
    </div>
    </Router>
    </AppContext.Provider>
  );

  
}

export default App;
