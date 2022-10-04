import Cards from "../components/Cards/Cards"


function Home ({ items,
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  onAddToFavorite,
  onAddToCart,
  isLoading,}) {

    const renderItems = () => {
      const filtredItems = items.filter((item) =>
        item.name.toLowerCase().includes(searchValue.toLowerCase()),
      );
      return (isLoading ? [...Array(8)] : filtredItems).map((item, index) => (
        <Cards
          key={index}
          onFavorite={(obj) => onAddToFavorite(obj)}
          onPlus={(obj) => onAddToCart(obj)}
          loading={isLoading}
          {...item}
        />
      ));
    };
  

    return (
        <div className="content">
          <div className="d-flex align-center justify-between">
            <h1 className="">{searchValue ? `Поиск по запросу "${searchValue}"` : 'Все кроссовки'}</h1>
            <div className="search-block d-flex">
              <img className="m-10" src="/img/Search.svg" alt="Search" />
              <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..." />

              {searchValue && (
              <img 
              onClick ={() => setSearchValue('')} 
              className="clearBtn cu-p " 
              src="/img/ESC.svg" 
              alt="Clear" />)}
            </div>
          </div>

          <div className="cards d-flex  flex-wrap p-20">
              {renderItems()}
          </div>
        </div>    
    )
}

export default Home