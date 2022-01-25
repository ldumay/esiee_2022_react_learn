import { useEffect } from "react"

function Selection(props){
    
    // Agit après chaque rendu du DOM
    useEffect( () => {
        alert("La sélection est : " + props.selection)
    }, [props.selection]) 
    /*
    |--> Pour : [] -->  permet de faire un "useEffect" qu'au 1 rendu
    |--> Pour : [selection] -->  permet de faire un "useEffect" sélection un élément
    */

    return(
        <div>
            <br/>
            <div>Sélection est égale à : {props.selection}</div>
        </div>
    )
}
export default Selection