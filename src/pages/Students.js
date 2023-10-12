import React, { useState, useRef }  from 'react';
import StudentsList from "../components/StudentsList";
import AddStudent from '../components/AddStudent';
import EditStudent from '../components/EditStudent';

const Students = () => {
    const [display, setDisplay] = useState("")
    const [studentSelected, setStudent] = useState(null)
    const studentsList = useRef(null);


    return <><h1>Students</h1>

                <button onClick={() => setDisplay("Add")}>Adicionar</button>
                <button onClick={() => setDisplay("Editar")} >Editar</button>
                <button onClick={() => setDisplay("Borrar")}>Borrar</button>
                {display==="Add" && <AddStudent fnListar={() => studentsList.current.listar() } />}

                {display==="Editar" && <EditStudent getStudent={() => studentsList.current.getStudentSelected() } />}
                <hr />
                <StudentsList ref={studentsList} setStudent={()=>setStudent} setDisplay={()=>setDisplay} />
            </>;
  };
  
  export default Students;