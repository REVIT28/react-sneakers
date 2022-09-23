import Card from "./components/Card";
import Header from "./components/Header";
import Draver from "./components/Draver";

function App() {
  return (
    


    <div className="wrapper clear">

      <Header/>    
      <Draver/>
      


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

        <div className="sneakers d-flex justify-between">
          <Card/>
        </div>
        
      </div>
    </div>
  );
}

export default App;
