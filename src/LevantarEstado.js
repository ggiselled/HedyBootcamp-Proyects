import { useState } from "react";
import "./LevantarEstado.css"

export const Sincro = () => {
    const [text, setText] = useState('')

    function handleChange(e) {
        setText(e.target.value)
    }

    return (
        <>
            <div className="Input">
                <Input label = 'Texto: ' text={text} change={handleChange} />
                <Input label = 'Copia: ' text={text} change={handleChange}/>
            </div>
        </>
    )
}

function Input({label, text, change}){
    return(
        <label>
            {label}
            {""}
            <input value={text} onChange={change}/>
        </label>
    )
}