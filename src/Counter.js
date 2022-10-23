import { useState } from "react";

export const Contador = () => {
    const [counter, setCounter] = useState(0);

    return (
        <div>
            <p>Valor actual: {counter}</p>
            <button onClick={() => {setCounter(counter + 1)}}>Click me!</button>
        </div>
    )
}