import { useState } from "react";
import "./Counter.css"
import "./button.css"

export const Contador = () => {
    const [counter, setCounter] = useState(0);

    return (
        <div className="counter">
            <p>Valor actual: {counter}</p>
            <button onClick={() => {setCounter(counter + 1)}}>Sumar</button>
        </div>
    )
}