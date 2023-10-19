import React, { useState }  from 'react';
import StudentsList from "../components/StudentsList";
import AddStudent from '../components/AddStudent';
import EditStudent from '../components/EditStudent';
import RemoveStudent from '../components/RemoveStudent';
import axios from "axios";

const baseURL = "http://localhost:8080/students";

const Students = () => {
    const [display, setDisplay] = useState("")
    const [studentSelected, setStudent] = useState({})
    const [students, setStudents] = useState([])

    const listar = () => {
            const token = localStorage.token;

            const config = {
                headers: { Authorization: `Bearer ${token}` }
            };

            axios.get(baseURL, config).then((response) => {
                setStudents( response.data );
            });
        }
        
    React.useEffect(() => {
        listar();
    }, [])

    return <><h1>Students</h1>

                <button onClick={() => setDisplay("Add")}>Adicionar</button>
                <button onClick={() => setDisplay("Editar")} >Editar</button>
                <button onClick={() => setDisplay("Borrar")}>Borrar</button>

                {display==="Add" && <AddStudent listar={listar} />}
                {display==="Editar" && <EditStudent setStudent={setStudent} studentSelected={studentSelected} listar={listar}  />}
                {display==="Borrar" && <RemoveStudent studentSelected={studentSelected} listar={listar}  />}
                <hr />
                <StudentsList setStudent={setStudent} students={students} studentSelected={studentSelected} />
            </>;
  }
  
  export default Students;