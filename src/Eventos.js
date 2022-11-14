import { useEffect, useState } from "react";
import "./Eventos.css"

export const Eventos = () => {

    const [posicion, setPosicion] = useState('center');
    const [parrafo, setParrafo] = useState('p1');

    const posicionTitulo = () => {
        switch (posicion) {
        case "center":
            setPosicion("left");
            break;
        case "left":
            setPosicion("right");
            break;
        case "right":
            setPosicion("center");
            break;
        default:
            setPosicion("center");
        }
    };

    const editarParrafo = (e) => {
        if (e.key === 'e'){
            switch(parrafo){
                case 'p1':
                    setParrafo('p2');
                    break;
                case 'p2':
                    setParrafo('p3');
                    break;
                case 'p3':
                    setParrafo('p1');
                    break;
            }
        }
    }
    useEffect(() =>{
        document.addEventListener('keydown', editarParrafo)
    }, [editarParrafo])


    return (
        <>
        
        <div  onKeyDown={(e) => editarParrafo(e)} >
            <div className="container">
                <h1 className={posicion} onClick={posicionTitulo}>¡Clickeame para cambiar de posición!</h1>
                <h2>Presinando la tecla 'E' cambiará el color del texto del párrafo :) </h2>
                <p className={parrafo}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>

            </div>
        </div>
        
        </>

    );
};

