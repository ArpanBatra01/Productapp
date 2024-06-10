import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

import ReactDOM from "react-dom/client";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  

  const handleSubmit = (event) => {
    event.preventDefault();
    // alert(`the email you enter was:${email}`);
    axios.get('https:fakestoreapi.com/users')
    .then(function (response) {
      console.log(response.data);

      let users=response.data;

      let userExist = users.find((elem)=> elem?.email == email && elem?.password == password)

      if(userExist == undefined)
      {
        alert("Email and Password are incorrect")
      }
      else{
        navigate("/home")

      }


      console.log("is exist", userExist)
    })
    .catch(function (error) {
      console.log(error);
    });
    
  };
  return (

    
  
  
    <form onSubmit={handleSubmit}>
      <h3>Please Login to Continue:</h3>
      <label>Enter your email:
        <span><input
          type="email"
          value={email}
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        /></span>
      </label>
      <div>
        <label>Enter password: 
          <span><input  
            type="password"
            value={password}
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          /></span>
        </label>
      </div>
      <button type="submit">login</button>
    </form>
  );
}

export default Login;
