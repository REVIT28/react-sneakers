import CardItem from "../CardItem/CardItem"

const Cards = (props) => {
    const {arr} = props

        const elements = arr.map((obj) => {
            const {id, ...objProps} = obj
            return (
                <CardItem 
                key = {id} {...objProps}
                onHeart = {() => console.log("крошка моя")}
                />
            ) 
        }) 
   
    return (
        <div className="cards d-flex justify-between">
            {elements}
        </div>
        
    )

}

export default Cards