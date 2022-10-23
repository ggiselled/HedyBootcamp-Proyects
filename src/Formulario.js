import { useState } from "react";
import morty from './img/morty.jpg';
import rick from './img/rick.jpg';
import beth from './img/beth.jpg';
import jerry from './img/jerry.jpg';
import summer from './img/summer.jpg'

export const Forms = () => {
    const [input, setInput] = useState({})
    const [name, setName] = useState()
    const [image, setImage] =useState()
    const avatar = [morty, rick, jerry, beth, summer]

    const editName = (e) => {
        setName(e.target.value)
    }

    const editAvatar = (e) => {
        setImage(e.target.value)
    }

    const sumbitForm = (e) => {
        e.preventDefault()

        setInput({nombre: name, avatar: image})
    }

    return(
        <>
            <h1>Elije tu personaje</h1>
            <form onSubmit={sumbitForm}>
                <div>
                    <label htmlFor="name">Nombre</label>
                    <input type= 'text' id='name' name='nombre' value={name} onChange={editName}/>
                </div>

                <div value = {image} onChange={editAvatar}>
                    <label htmlFor='image'>¡Elije tu personaje!</label>

                    <input type='radio' id='morty' value={avatar[0]}></input>
                    <label htmlFor="morty">
                        <img src={avatar[0]} alt='morty'/>
                    </label>

                    <input type='radio' id='rick' value={avatar[1]}></input>
                    <label htmlFor="rick">
                        <img src={avatar[1]} alt='rick'/>
                    </label>

                    <input type='radio' id='jerry' value={avatar[2]}></input>
                    <label htmlFor="jerry">
                        <img src={avatar[2]} alt='jerry'/>
                    </label>

                    <input type='radio' id='beth' value={avatar[3]}></input>
                    <label htmlFor="beth">
                        <img src={avatar[3]} alt='beth'/>
                    </label>

                    <input type='radio' id='summer' value={avatar[4]}></input>
                    <label htmlFor="summer">
                        <img src={avatar[4]} alt='summer'/>
                    </label>
                </div>

                <button type="submit">Cargar datos</button>
            </form>

            <div>
                <h3>Soy {name || "[name]"}</h3>
                <h3>Personaje que elegí: <img src={image}/></h3>
            </div>
        </>
    )
};