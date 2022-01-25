import { useState } from "react"

function Form(){
    const [inputValue, setInputValue] = useState("Poser une question")

    //console.log(e.target.value)

    return (
        <div>
            <br/>
            <form method="" action="">
                
                <textarea
                    value={inputValue}
                    onChange={ (e) => setInputValue(e.target.value) }
                />
                <br/>
                <button onClick={ () => alert(inputValue) }>Alert</button>
                
            </form>
            
        </div>
    )
}
export default Form