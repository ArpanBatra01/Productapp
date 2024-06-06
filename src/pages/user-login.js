import { useState } from "react";

import ReactDOM from "react-dom/client";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`the email you enter was:${email}`);
  };
  return (
    <form onSubmit={handleSubmit}>
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
