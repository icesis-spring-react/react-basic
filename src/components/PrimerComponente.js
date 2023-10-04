import React , {useState} from 'react'
import './ejemplo.css';

export const PrimerComponente = () => {

    // let nombre = "John";
    const [nombre, cambiarNombre] = useState("John");
    let universidad = "Icesi"

    let cursos = ["Javascript", "Python", "Java"]

  return (
    <div>
        <h1>PrimerComponente</h1>
        <p>Texto del primer componente</p>
        <p>El nombre es <b className={nombre.length<4 ? 'rojo' : 'verde'}>{nombre}</b></p>
        <p>Mi universidad es {universidad}</p> 

        <input type="text" onChange={e => cambiarNombre(e.target.value)} placeholder="Cambiar nombre" />
        <br />
        <button onClick={() => console.log("Estado: " , nombre)}>Ver estado</button>

        <br />
        <button onClick={e => cambiarNombre('Clarck Kent')}>Cambiar nombre</button>

        <ul>
        {
            // comentario js
            cursos.map( (curso, indice) => {
                return (<li key={indice}>{curso}</li>)
            })
        }   
        </ul>   
    </div>
  )
}
