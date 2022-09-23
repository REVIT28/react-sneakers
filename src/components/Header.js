


const Header = ({onDrawer}) => {


    return (
        <header className="d-flex justify-between align-center">

            <div className="d-flex align-center m-45 ">
            <img className="mr-20" width={40} height={40} src="/img/header.png" alt="" />
            <div className="headerInfo">
                <h3 className="m-5 text-uppercase ">React Sneakers</h3>
                <p className="m-5">Магазин лучших кроссовок</p>
            </div>
            </div>

            <ul className="headerRight d-flex  m-45 ">
            <li className="mr-30" >
                <img className="cu-p"width={18} height={18} onClick ={onDrawer}  src="/img/Group.svg" alt="" />
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
    )
}
export default Header