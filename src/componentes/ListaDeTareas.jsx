import React from "react";
import TareaForm from "../componentes/TareaForm"
import { useState } from "react";
import Tarea from "./Tarea";
function ListaTareas() {
    const [tareas, setTarea] = useState([])
    const AgregarTarea = tarea => {
        if (tarea.texto.trim()) {
            tarea.text = tarea.texto.trim();
            const tareaActualizadas = [tarea, ...tareas];
            setTarea(tareaActualizadas)
     }
    }
    const eliminarTarea = id => {
        const tareaActualizadas = tareas.filter(tarea => tarea.id !== id)
        setTarea(tareaActualizadas)
    }
    const completarTarea = id => {
        const tareaActualizadas = tareas.map(tarea => {
            if (tarea.id === id) {
                tarea.completada = !tarea.completada;
            }
            return tarea;
        })
        setTarea(tareaActualizadas);
    }
    return (
        <>
            <TareaForm onSubmit={AgregarTarea} />
            <div className="contenedor-lista-tareas">
                {
                    tareas.map((tarea) =>
                        <Tarea
                            key={tarea.id}
                            id={tarea.id}
                            texto={tarea.texto}
                            completada={tarea.completada}
                            eliminarTarea={eliminarTarea}
                            completarTarea={completarTarea}
                        />)
                }
            </div>
        </>
    )
}
export default ListaTareas