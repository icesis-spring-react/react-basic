import axios from "axios";
import React from "react";

const baseURL = "http://localhost:8080/student";

const AddStudent = () => {

    const [inputs, setInputs] = useState({});
    
    const cambiar = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }
    
    const guardar = (event) => {
        event.preventDefault();
        alert(inputs);
    }

    return <>
      <form onSubmit={guardar}>
      <label>Nombre:
      <input 
        type="text" 
        name="firstname" 
        value={inputs.firstname || ""} 
        onChange={cambiar}
      />
      </label>
      <label>Apellido: 
        <input 
          type="text" 
          name="lastname" 
          value={inputs.lastname || ""} 
          onChange={cambiar}
        />
        </label>
        <input type="submit" />
    </form>
            </>;
  };
  
  export default AddStudent;