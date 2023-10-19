import axios from "axios";
import React , {useState} from "react";

const baseURL = "http://localhost:8080/user/login";

const Login = () => {

    const [inputs, setInputs] = useState({username:"", password:""});
    
    const cambiar = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }
    
    const guardar = (event) => {
        event.preventDefault();
        console.log(inputs);

        let user = {
          username: inputs.username,
          password: inputs.password
        }

        axios.post(baseURL, user).then((response) => {
          console.log(response.data)
            const {token , message} = response.data
            console.log("Ingresado token: ", token);
            localStorage.token = token;
        });
    }

    return <>
      <h2>Login</h2>
      <form onSubmit={e => guardar(e)}>
      <label>username:
      <input 
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={(e)=>cambiar(e)} required
      /><br />
      </label>
      <label>Password: 
        <input 
          type="password" 
          name="password" 
          value={inputs.password || ""} 
          onChange={(e)=>cambiar(e)} required
        />
        </label><br />
        <input type="submit" value="Ingresar" />
    </form>
            </>;
  };
  
  export default Login;