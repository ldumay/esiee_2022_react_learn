function Panier(){
    const burgerPrice = 8
    const friesPrice = 2
    const cokePrice = 3
    return(
        <div>
            <ul>
                <li>Burger : {burgerPrice}</li>
                <li>Frites : {friesPrice}</li>
                <li>Coca : {cokePrice}</li>
            </ul>
        </div>
    )
}
export default Panier