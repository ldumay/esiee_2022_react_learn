import { useState } from "react"

function Compteur(){
    const [compteur, updateCompteur] = useState(0)

    return (
        <div>
            <br/>
            <button onClick={ () => updateCompteur(compteur + 1) }>Ajouter</button>
            <div>Compteur est égal à {compteur}</div>
        </div>
    )
}
export default Compteur