function DrinkList(){
    const drinks = [
        'water',
        'sprite',
        'beer',
        'fruit juice',
        'wine'
    ]
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
                <li key={`${index}-${drink}`}>{drink}</li>
            ))}
        </ul>
    )
}
export default DrinkList