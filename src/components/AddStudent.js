import axios from "axios";
import React , {useState} from "react";

const baseURL = "http://localhost:8080/student";

const AddStudent = (props) => {

    const [inputs, setInputs] = useState({});
    
    const cambiar = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }
    
    const guardar = (event) => {
        event.preventDefault();
        console.log(inputs);

        let student = {
          firstname: inputs.firstname,
          lastname: inputs.lastname
        }

        axios.post(baseURL, student).then((response) => {
            console.log("Estudiante adicionado");

            props.fnListar();
        });
    }

    return <>
      <h2>Adicionar Estudiante</h2>
      <form onSubmit={guardar}>
      <label>Nombre:
      <input 
        type="text" 
        name="firstname" 
        value={inputs.firstname || ""} 
        onChange={cambiar} required
      /><br />
      </label>
      <label>Apellido: 
        <input 
          type="text" 
          name="lastname" 
          value={inputs.lastname || ""} 
          onChange={cambiar} required
        />
        </label><br />
        <input type="submit" value="Guardar Cambios" />
    </form>
            </>;
  };
  
  export default AddStudent;