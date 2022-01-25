import {drinks} from '../datas/Drinks.js'

function DrinkList(){
    return (
        /* Base 
        <ul>
            {drinks.map((drink, index) => (
                <li>{drink}</li>
            ))}
        </ul>
        */

        <ul>
            {drinks.map((drink, index) => (
                <li key={`${drink.id}-${drink.name}`}>{drink.name}</li>
            ))}
        </ul>
    )
}
export default DrinkList