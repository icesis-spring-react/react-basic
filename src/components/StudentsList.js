import axios from "axios";
import React from "react";

const baseURL = "http://localhost:8080/students";

const StudentsList = () => {

    // Lista con los estudiantes
    const [students, setStudents] = React.useState([]);

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            setStudents(response.data);
        });
      }, []);
    
    return <><h1>Students List</h1>
                <div>
                    {students.map( (student, key) =>
                        <div key={key}>
                            {student.firstname}  {student.lastname}
                        </div>
                    )}
                </div>
            </>;
  };
  
  export default StudentsList;