function Panier(){
    const burgerPrice = 8
    const friesPrice = 2
    const cokePrice = 3
    return(
        <div>
            <div>
                <ul>
                    <li>Burger : {burgerPrice}</li>
                    <li>Frites : {friesPrice}</li>
                    <li>Coca : {cokePrice}</li>
                </ul>
            </div>
            <div>
                Total : {burgerPrice + friesPrice + cokePrice} €
            </div>
        </div>
    )
}
export default Panier