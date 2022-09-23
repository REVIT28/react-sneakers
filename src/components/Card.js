const Card = () => {
    return (
        <div className="card ">
            <div className="favorite">
              <img src="/img/heart-off.png" alt="" />  
            </div>
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
    )
    

}

export default Card