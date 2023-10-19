import axios from "axios";
import React , {useState} from "react";

const baseURL = "http://localhost:8080/student/";

const RemoveStudent = (props) => {
        
    const guardar = (event) => {
        event.preventDefault();

        axios.delete(baseURL+props.studentSelected.firstname).then((response) => {
            console.log("Estudiante eliminado");
            props.listar();
        });
    }

    return <>
      <h2>Borrar Estudiante</h2>
      <form onSubmit={e => guardar(e)}>
      <label>Nombre: {props.studentSelected.firstname} <br />
      </label>
      <label>Apellido: {props.studentSelected.lastname} 
        </label><br />
        <input type="submit" value="Borrar" />
    </form>
            </>;
  };
  
  export default RemoveStudent;