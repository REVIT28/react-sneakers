import React from 'react'

import Home from "./pages/Home";
import Favorite from "./pages/Favourite";
import Order from "./pages/Order";
import Header from "./components/Header";
import Draver from "./components/Draver/Draver";

import axios from "axios";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";


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
    
   try{
    const cartResponse = await axios.get("https://632f7e63b56bd6ac45b0b8d3.mockapi.io/cart")   
    const favoriteResponse = await axios.get("https://632f7e63b56bd6ac45b0b8d3.mockapi.io/favorite")   
    const itemsResponse = await axios.get("https://632f7e63b56bd6ac45b0b8d3.mockapi.io/Items")

    setIsLoading(false)
    setCartItems(cartResponse.data)
    setFavorites(favoriteResponse.data)
    setItems(itemsResponse.data)
   } catch (error) {
    alert("Ошибка при запросе данных с сервера")
   }
  
 }
      getResourse()
    }, [])

    const onRemoveCart =  (id) => {
      try {
        axios.delete(`https://632f7e63b56bd6ac45b0b8d3.mockapi.io/cart/${id}`)
     setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(id)))  
      } catch (error) {
        alert ("Не удалось удалить из корзины")
      }
   }

    const onChangeSearchInput = (e) => {
      setSearchValue(e.target.value)  
    }

    const onAddToCart = async (obj) => {
      try {
        const findItem = cartItems.find((item) => Number(item.parentId) === Number(obj.id));
      if (findItem) {
        setCartItems((prev) => prev.filter((item) => Number(item.parentId) !== Number(obj.id)));
        await axios.delete(`https://632f7e63b56bd6ac45b0b8d3.mockapi.io/cart/${findItem.id}`)
         
      } else {
        setCartItems((prev) => [...prev, obj]);
        const { data } = await axios.post("https://632f7e63b56bd6ac45b0b8d3.mockapi.io/cart", obj)
        setCartItems((prev) =>
        prev.map((item) => {
          if (item.parentId === data.parentId) {
            return {
              ...item,
              id: data.id,
            };
          }
          return item;
          }));    
        }
      } catch (error) {
        alert ('Ошибка при добавлении в корзину')
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
    return cartItems.some((obj) => Number(obj.parentId) === Number(id));
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
      {cartOpened ? <Draver
       onRemoveCart = {(id) =>onRemoveCart(id)} items = {cartItems} onDrawer = {() => onDrawer()} 
       opened = {cartOpened}/> : document.body.style.overflow = "" }
      
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
        <Route path="/order" element = {<Order/>}/>
        
     </Routes>

      
    </div>
    </Router>
    </AppContext.Provider>
  );

  
}

export default App;
