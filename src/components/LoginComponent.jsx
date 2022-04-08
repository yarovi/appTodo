import React, { useState,useContext } from "react";
import { UserContext } from "../components/context/UserContext"
import {useNavigate   } from "react-router-dom";
import AuthenticateRoute from "./AuthenticateRoute";
import AuthenticationService from "./AuthenticationService";

function LoginComponent() {
    const [username, setUsername] = useState("in28");
    const [password, setPassword] = useState("");
    const [hasLoginFailed, setHasLoginFailed] = useState(false);
    const [showSucessMessage, setShowSucessMessage] = useState(false);
    const [value,setValue] = useContext(UserContext);
  
    let navigation = useNavigate();
    function HandleChange(event) {
      // console.log('HandleChange '+event.target.value);
       setPassword(event.target.value)
    }
  
    function LoginClicked() {
      
      if (username === "in28" && password === "as") {
        AuthenticationService.registerSuccessFullLogin(username,password);
        navigation(`/welcome/${username}`);
        setShowSucessMessage(true);
        setHasLoginFailed(false);
      } else {
        setHasLoginFailed(false);
        setShowSucessMessage(true);
      }
      const estado =AuthenticationService.isUserLoggedIn();
      setValue(estado);
      console.log(estado);
      
    }
    
    /* useEffect(()=>{
       const estado =AuthenticationService.isUserLoggedIn();
       setContext(estado);
      console.log(contex); 
    },[]); */
      return (
        <>
        <div>
          <h1>Login</h1>
          <div className="container">
            {!hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
          User name:
          <input
            type="text"
            name="username"
            value={username}
            onChange={HandleChange}
          />
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={HandleChange}
          ></input>
          <button className="btn btn-success" onClick={LoginClicked}>Login</button>
  
          </div>
        </div>
        </>
      );
  }
  export default LoginComponent