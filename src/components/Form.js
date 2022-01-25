import { useState } from "react"

function Form(){
    /*
    Défini un evaleur par défaut : useState
    */
    const [inputValue, setInputValue] = useState("Poser une question")
    
    function checkValue(value){
        if(!value.includes('f')){ //Interdit de mettre des "f"
            setInputValue(value)
        } else {
            alert("Pas de lettre f")
        }
    }

    return (
        <div>
            <br/>
            <form method="" action="">
                
                <textarea
                    value={inputValue}
                    onChange={ (e) => checkValue(e.target.value) }
                />
                <br/>
                <button onClick={ () => alert(inputValue) }>Alert</button>
            </form>
            
        </div>
    )
}
export default Form