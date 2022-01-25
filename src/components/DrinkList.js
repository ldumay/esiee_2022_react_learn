import {drinks} from '../datas/Drinks.js'
import Tarif from './Tarif'
import Infos from './Infos'

function DrinkList(){
    return (
        <div>
            <ul>
                {drinks.map((drink, index) => (
                    <li key={`${drink.id}-${drink.name}`}>
                        {drink.id} - {drink.name}
                        {drink.category === 'alcool' && <span>*</span>}
                        <Infos type="sugar" value={drink.sugar}/>
                        <Infos type="bitterness" value={drink.bitterness}/>
                    </li>
                ))}
            </ul>
            <Tarif />
        </div>
    )
}
export default DrinkList