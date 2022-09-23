
import Cards from "./components/Cards/Cards";
import Header from "./components/Header";
import Draver from "./components/Draver";


import React from 'react'
import { useState } from 'react'



const arr = [
  {name:'Мужские Кроссовки Nike Blazer Mid Suede',  price: '12 999',  imagUrl:"/img/image 5.jpg", id: 1},
  {name: 'Мужские Кроссовки Nike Air Max 270',      price: '12 999',  imagUrl:"/img/image 4.jpg", id: 2 },
  {name:'Мужские Кроссовки Nike Blazer Mid Suede',  price: '8 499',   imagUrl:"/img/image 3.jpg", id: 3},
  {name:'Кроссовки Puma X Aka Boku Future Rider',   price: '8 999',   imagUrl:"/img/image 2.jpg", id: 4},
]

function App() {

  const [basket, setBasket] = useState(false)
  
    const onDrawer = () => {
        
        setBasket(basket => !basket ) 
        document.body.style.overflow = "hidden" 
         
    }

  
  return (
    <div className="wrapper clear">
      {basket ? <Draver onDrawer = {() => onDrawer()} /> : document.body.style.overflow = "" }
      
      <Header
      onDrawer={() => onDrawer()}
      />    
      
      <div className="slider d-flex justify-between">
        <img className = "m-10"width={99} height={40} src="/img/adidas.png" alt="" />
        <img className ="frog" src="/img/example.png" alt="" />
      </div>

      <div className="content">
        <div className="d-flex mb-40 align-center justify-between">
          <h1 className="">Все кроссовки</h1>
          <div className="search-block d-flex">
            <img className="m-10" src="/img/Search.svg" alt="Search" />
            <input placeholder = "Поиск..."/>
          </div>
        </div>
      <Cards
      arr = {arr}/>
        

      </div>
    </div>
  );
}

export default App;
