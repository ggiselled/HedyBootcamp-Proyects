import {useState} from "react"
import "./Componente.css"

export const ComponenteAuto = () => {
    const [counter, setCounter] = useState(0)
    const [marca, setMarca] = useState(true)

    const cambioMarca = () => setMarca(!marca)

    const random = () => setCounter(counter + Math.floor((Math.random()*10)))



    return(
        <>
            <div className="componente">
                <h2 onClick = {cambioMarca}>Haz click para seleccionar la marca: {marca ? 'Renault' : 'Citroen'}</h2>
                <div className="componente__cantidad">
                    <h2>Cantidad alaeatoria seleccionada: {counter}</h2>
                    <button onClick={random}>Agregar</button>
                </div>
            </div>
        </>
    )
    
}