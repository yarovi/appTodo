import React, { useContext } from "react";
import { Link   } from "react-router-dom";
import AuthenticationService from "./AuthenticationService";
import { UserContext } from "../components/context/UserContext"

function HeaderComponent(){
    const [value,setValue] = useContext(UserContext);
    let isUserLoggedIn = value;
    function logout(){
      AuthenticationService.logout();
      setValue(false);
    }
      return (
          <header>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
              <div><Link  className="navbar-brand" to="www.google.com">inYasmani</Link></div>
              <ul className="navbar-nav">
                {isUserLoggedIn &&<li ><Link className="nav-link" to="/welcome/inyas">Home</Link></li>}
                {isUserLoggedIn &&<li ><Link className="nav-link" to="/todos">Todos</Link></li>}
              </ul>
              <ul className="navbar-nav navbar-collapse justify-content-end">
              {!isUserLoggedIn &&<li><Link className="nav-link" to="/login">Login</Link></li>}
                {isUserLoggedIn &&<li ><Link className="nav-link" to="/logout" onClick={logout}>Logout</Link></li>}
              </ul>
            </nav>
          </header>
      )
    }
    export default HeaderComponent