import Cards from "../components/Cards/Cards"

function Favorite ({items, onAddToFavorite, isLoading }) {

  
    return (
        <div className="content">
        <div className="d-flex align-center justify-between">
          <h1 className="">Мои закладки</h1>
        </div>
        <div className="cards d-flex  flex-wrap p-20">
          {isLoading ? [...Array(8)] : items.map((item, index) => (
            <Cards key={index} favorited={true} onFavorite={onAddToFavorite} {...item} />
          ))}
        </div>
      </div>
    )
}

export default Favorite