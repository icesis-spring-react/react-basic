import axios from "axios";
import React , {useState} from "react";

const baseURL = "http://localhost:8080/student/";

const EditStudent = (props) => {

    const [inputs, setInputs] = useState({firstname:"", lastname:""});
    
    const cambiar = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    React.useEffect(() => {
      let student = props.studentSelected;
      console.log("Student: ", student);

      if (student != null) {
        setInputs({firstname:props.studentSelected.firstname, lastname:props.studentSelected.lastname})
      }
    }, [props]);
    
    const guardar = (event) => {
        event.preventDefault();
        console.log(inputs);

        let student = {
          firstname: inputs.firstname,
          lastname: inputs.lastname
        }

        axios.put(baseURL+props.studentSelected.firstname, student).then((response) => {
            console.log("Estudiante modificado");
            props.setStudent(student)
            props.listar();
        });
    }

    return <>
      <h2>Editar Estudiante</h2>
      <form onSubmit={e => guardar(e)}>
      <label>Nombre:
      <input 
        type="text" 
        name="firstname" 
        value={inputs.firstname || ""} 
        onChange={(e)=>cambiar(e)} required
      /><br />
      </label>
      <label>Apellido: 
        <input 
          type="text" 
          name="lastname" 
          value={inputs.lastname || ""} 
          onChange={(e)=>cambiar(e)} required
        />
        </label><br />
        <input type="submit" value="Guardar Cambios" />
    </form>
            </>;
  };
  
  export default EditStudent;