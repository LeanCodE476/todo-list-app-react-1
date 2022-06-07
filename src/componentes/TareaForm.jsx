import React from "react";
import "../stylessheets/tarea-form.css"
import { useState } from "react";
import {v4 as uuidv4} from 'uuid'
function TareaFormulario(props) {
    const [input, setInput] = useState('');
    const manejarCambio = e => {
        setInput(e.target.value)    
    }
    const manejarEnvio = e => {
        e.preventDefault();
        console.log("enviando formulario")
        const tareaNueva = {
            id: uuidv4(),
            texto: input,
            completada:false
        }
        props.onSubmit(tareaNueva);
    }
    return (
        <form
            onSubmit={manejarEnvio}
            className="container-form">
            <input
                type="text"
                className="input"
                placeholder="Agrega una tarea"
                onChange={manejarCambio}/>
            <button
                className="button"
                
            >
                Agregar</button>
        </form>
    )
}

export default TareaFormulario