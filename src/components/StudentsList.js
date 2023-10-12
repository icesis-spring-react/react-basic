import axios from "axios";
import React, { Component } from "react";

const baseURL = "http://localhost:8080/students";

 class StudentsList extends Component {
    constructor(props){
        super();
        this.state = {
            students: [],
        }
        this.studentSelected = null;
        props.setStudent(this.studentSelected)
        this.props = props;

    }
    // Lista con los estudiantes
    //const [students, setStudents] = React.useState([]);
    getStudentSelected() {
        return this.studentSelected 
    }

    //React.useEffect(() => {
    listar() {
        axios.get(baseURL).then((response) => {
            this.setState( { students: response.data } );
        });
      }

      componentDidMount(){
        this.listar();
      }

      selectStudent(student){
        this.props.setDisplay("Add")
        this.studentSelected = student; 
        console.log("selected ", student); /* e.target.className = 'selected';*/ 

        this.props.setDisplay("Edit")
      }
    
      render(){
            return <><h1>Students List</h1>
                        <div>
                            {this.state.students.map( (student, key) =>
                                <div 
                                   key={key}  id={'div_' + key}
                                   onClick={(e)=> {  this.selectStudent(student) }} 

                                   className={this.studentSelected != null && student === this.studentSelected?'selected':''}>

                                    {student.firstname}  {student.lastname}
                                </div>
                            )}
                        </div>
                    </>;
      }
  }
  
  export default StudentsList;