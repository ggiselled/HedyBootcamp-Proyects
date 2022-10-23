import { useState } from "react"
import { Button } from "./BotonEstado"
import gato from './img/gato.jpg'
import conejo from './img/conejo.jpg'

export const VerMascota = () => {
    const [showComponente, setShowComponente] = useState(false)
    const [showComponente2, setShowComponente2] = useState(false)

    return (
        <>      
    <Button value="Gato" onClick={() => setShowComponente(!showComponente)} />
      {showComponente && <img src={gato}/>}
      <Button value="Conejo" onClick={() => setShowComponente2(!showComponente2)} />
      {showComponente2 && <img src={conejo}/>}
        </>
    )



}