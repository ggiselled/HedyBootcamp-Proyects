import { useState } from "react";
import morty from './img/morty.jpg';
import rick from './img/rick.jpg';
import beth from './img/beth.jpg';
import jerry from './img/jerry.jpg';
import summer from './img/summer.jpg'
import "./Formulario.css"

export const Forms = () => {
    const [input, setInput] = useState({})
    const [nombre, setNombre] = useState()
    const [image, setImage] =useState()
    const avatar = [morty, rick, jerry, beth, summer]

    const editName = (e) => {
        setNombre(e.target.value)
    }

    const editAvatar = (e) => {
        setImage(e.target.value)
    }

    const sumbitForm = (e) => {
        e.preventDefault()

        setInput({nombre: nombre, avatar: image})
    }

    return(
        <>
            <h1>Elije tu personaje</h1>
            <form onSubmit={sumbitForm}>
                <div>
                    <label htmlFor="nombre">Nombre: </label>
                    <input type= 'text' id='nombre' name='nombre' value={nombre} onChange={editName} className='Inputname'/>
                </div>

                <div value = {image} onChange={editAvatar} className='Avatar'>
                    <label htmlFor='image'>De la serie Rick & Morty</label>
                    <h3>Morty</h3>
                    <input type='radio' id='morty' value={avatar[0]}></input>
                    <label htmlFor="morty">
                        <img src={avatar[0]} alt='morty'/>
                    </label>
                    
                    <h3>Rick</h3>
                    <input type='radio' id='rick' value={avatar[1]}></input>
                    <label htmlFor="rick">
                        <img src={avatar[1]} alt='rick'/>
                    </label>

                    <h3>Jerry</h3>
                    <input type='radio' id='jerry' value={avatar[2]}></input>
                    <label htmlFor="jerry">
                        <img src={avatar[2]} alt='jerry'/>
                    </label>

                    <h3>Beth</h3>
                    <input type='radio' id='beth' value={avatar[3]}></input>
                    <label htmlFor="beth">
                        <img src={avatar[3]} alt='beth'/>
                    </label>

                    <h3>Summer</h3>
                    <input type='radio' id='summer' value={avatar[4]}></input>
                    <label htmlFor="summer">
                        <img src={avatar[4]} alt='summer'/>
                    </label>
                </div>

                
            </form>

            <div>
                <h3>Soy {nombre || "[nombre]"}</h3>
                <h3>Personaje que elegí: <img src={image}/></h3>
            </div>
        </>
    )
};