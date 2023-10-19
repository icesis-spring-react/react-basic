import React from "react";

 const StudentsList = (props) => {  
    return <><h1>Students List</h1>
                <div>
                    {props.students.map( (student, key) =>
                        <div 
                            key={key}  id={'div_' + key}
                            onClick={(e)=> {  props.setStudent(student) }} 

                            className={props.studentSelected != null && student === props.studentSelected?'selected':''}>

                            {student.firstname}  {student.lastname}
                        </div>
                    )}
                </div>
            </>;
  }
  
  export default StudentsList;