import {drinks} from '../datas/Drinks.js'
import Tarif from './Tarif'

function DrinkList(){
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
            <Tarif />
        </div>
    )
}
export default DrinkList