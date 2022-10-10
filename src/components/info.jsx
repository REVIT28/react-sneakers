import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../App'



const Info = ({name, image , description, onClick}) => {
    const {setCartOpened} = useContext(AppContext)
    return(
        <div className="basket ">
            <img src={image} alt="" width={120}   />
            <div className="">
                <b>{name}</b>
                <p>{description}</p>
            </div>
            <img  onClick ={onClick} className=" return mt-40 "src="img/return.png" alt="" />
        </div>
        
    )
}

export default Info


