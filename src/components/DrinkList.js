import {drinks} from '../datas/Drinks.js'
import Tarif from './Tarif'
import Infos from './Infos'

function handleClick(){
    console.log("ceci est un click");
}

function handleClickTest(test){
    console.log("click = " + test);
}

function DrinkList(){
    return (
        <div>
            <ul>
                {drinks.map((drink, index) => (
                    <li key={`${drink.id}-${drink.name}`} onClick={handleClick}>
                        {drink.id} - {drink.name}
                        {drink.category === 'alcool' && <span>*</span>}
                        <Infos type="sugar" value={drink.sugar}/>
                        <Infos type="bitterness" value={drink.bitterness}/>
                    </li>
                ))}
            </ul>
            <Tarif />
            <button name="test" onClick={ () => handleClickTest('Event')}>Test</button>
        </div>
    )
}
export default DrinkList