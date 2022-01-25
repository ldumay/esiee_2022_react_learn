import {drinks} from '../datas/Drinks.js'

function DrinkList(){
    const currentTime = new Date().getHours()
    const isHappyHour = currentTime > 17 && currentTime < 20
    // Possible : const isHappyHour = 20 > currentTime > 17

    const tarif = isHappyHour ? (
        <div>C'est l'Happy Hour !</div>
    ) : (
        <div>C'est plein pot !</div>
    )

    return (
        <div>
            <ul>
                {drinks.map((drink, index) => (
                    <li key={`${drink.id}-${drink.name}`}>
                        {drink.id} - {drink.name}
                        {drink.category === 'alcool' && drink.id === 1 && <span>*</span>}
                        {/* 
                        => Base :
                        {drink.category === 'alcool' && <span>*</span>}
                        
                        => Ternaire - Possible 
                        {drink.category ? 'alcool' && <span>*</span> : null }

                        => Autre :
                        {drink.category === 'alcool' && drink.id === 1 && <span>*</span>}
                        */}
                    </li>
                ))}
            </ul>
            {tarif}
        </div>
    )
}
export default DrinkList