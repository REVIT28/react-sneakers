

function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center">

        <div className="d-flex align-center m-45 ">
          <img className="mr-20" width={40} height={40} src="/img/header.png" alt="" />
          <div className="headerInfo">
            <h3 className="m-5 text-uppercase ">React Sneakers</h3>
            <p className="m-5">Магазин лучших кроссовок</p>
          </div>
        </div>

        <ul className="headerRight d-flex  m-45 ">
          <li className="mr-30">
            <img width={18} height={18}src="/img/Group.svg" alt="" />
            <span className=" ml-10">1205 р.</span>
          </li>
          <li>
            <img width={18} height={18} className="mr-30" src="/img/zmdi_favorite-outline.svg" alt="" />
          </li>
          <li>
            <img width={18} height={18} src="/img/Union.svg" alt="" />
          </li>
          
        </ul>
      </header>
      <div className="content p-40 ">
        <h1 className="mb-40">Все кроссовки</h1>


        <div className="sneakers d-flex justify-between">
          <div className="card ">
            <img  className="a" width={133} height={112} src="/img/image 5.jpg" alt="" />
            <h2 >Мужские Кроссовки Nike Blazer Mid Suede</h2>
            <div className="card-botton  d-flex justify-between align-center mt-15">
              <ul >
                <li className="text-uppercase "  style={{
              color: "#BDBDBD"}}>Цена</li>
                <li className="fw-bold">12 999 руб.</li>
              </ul>
              <button className="card-button">+</button>
            </div>
          </div>

          <div className="card ">
            <img  className="a" width={133} height={112} src="/img/image 4.jpg" alt="" />
            <h2 >Мужские Кроссовки Nike Blazer Mid Suede</h2>
            <div className="card-botton  d-flex justify-between align-center mt-15">
              <ul >
                <li className="text-uppercase "  style={{
              color: "#BDBDBD"}}>Цена</li>
                <li className="fw-bold">12 999 руб.</li>
              </ul>
              <button className="card-button">+</button>
            </div>
          </div>

          <div className="card ">
            <img  className="a" width={133} height={112} src="/img/image 3.jpg" alt="" />
            <h2 >Мужские Кроссовки Nike Blazer Mid Suede</h2>
            <div className="card-botton  d-flex justify-between align-center mt-15">
              <ul >
                <li className="text-uppercase "  style={{
              color: "#BDBDBD"}}>Цена</li>
                <li className="fw-bold">12 999 руб.</li>
              </ul>
              <button className="card-button">+</button>
            </div>
          </div>

          <div className="card ">
            <img  className="a" width={133} height={112} src="/img/image 2.jpg" alt="" />
            <h2 >Мужские Кроссовки Nike Blazer Mid Suede</h2>
            <div className="card-botton  d-flex justify-between align-center mt-15">
              <ul >
                <li className="text-uppercase "  style={{
              color: "#BDBDBD"}}>Цена</li>
                <li className="fw-bold">12 999 руб.</li>
              </ul>
              <button className="card-button">+</button>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default App;
