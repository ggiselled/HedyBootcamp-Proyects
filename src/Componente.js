import {useState} from "react"

export const ComponenteAuto = () => {
    const [counter, setCounter] = useState(0)
    const [marca, setMarca] = useState(true)

    const cambioMarca = () => setMarca(!marca)

    const random = () => setCounter(counter + Math.floor((Math.random()*10)))



    return(
        <>
            <h1>UseState</h1>
            <div>
                <h2 onClick = {cambioMarca}>Marca del vehículo {marca ? 'Renault' : 'Citroen'}</h2>
                <h2>Cantidad a comprar: {counter}</h2>
                <button onClick={random}>Cantidad aleatoria</button>
            </div>
        </>
    )
    
}