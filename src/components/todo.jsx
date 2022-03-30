import React, { useState,useContext } from "react";
import { BrowserRouter as Router, Routes, Route ,useParams,useNavigate, Link   } from "react-router-dom";

import '../boostrap.css'

import AuthenticationService from "./AuthenticationService";
import { UserContext } from "../components/context/UserContext"
function TodoApp() {
    return (
      <div className="TodoApp">
       <Router>
         <>
          <HeaderComponent/>
              <Routes>
                  <Route exact path="/"  element={<LoginComponent/>} />
                  <Route path="/login" element={<LoginComponent/>} />
                  <Route path="/welcome/:name" element={<WelcomeComponent/>} />
                  <Route path="/todos" element={<ListTodoComponent/>} />
                  <Route path="/logout" element={<LogoutComponent/>} />
                  <Route path="*" element={<ErrorComponent/>} />
              </Routes>
            <FooterComponent/>
         </>
        </Router>
      </div>
    );
  }

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
  

function FooterComponent(){
  return (
    <footer className="footer">
      <span className="text-muted">
        All Right Reserved 2022 @inYasmani
      </span>
    </footer>
  )
}
function LogoutComponent(){
  return (
    <>
      <h1>You are logged out</h1>
      <div className="container">
        Thanks You for Using Our Application.
      </div>
    </>
  )
}

function WelcomeComponent() {
  let params = useParams();
    return <>
            <h1>Welcome!</h1>
            <div className="container">
            Welcome {params.name}. you can manager todos <Link to="/todos">here</Link>

            </div>
                          </>;
  
}
function ListTodoComponent() {
  const [todo, setTodo] = useState([
    {
      id: 1,
      description: 'Learn React',
      done: false,
      targetDate: new Date()
    },
    {
      id: 2,
      description: 'Learn AWS',
      done: true,
      targetDate: new Date()
    },
    {
      id: 3,
      description: 'Learn Reat',
      done: false,
      targetDate: new Date()
    }
  ]); 
    return <div>
      <h1>List Todo</h1>
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Description</th>
              <th>Target Date</th>
              <th>Is Completed?</th>
            </tr>
          </thead>
          <tbody>
          {
                todo.map((t,i) =>(
            <tr key={i}>
              
                <td >{t.id}</td>
                <td>{t.description}</td>
                <td>{t.done.toString()}</td>
                <td>{t.targetDate.toString()}</td>
            </tr>

                ))
              }
          </tbody>
        </table>
      </div>
    </div>;
  
}



function ErrorComponent() {
  return <div>An Error Ocurred. I don't know what to do! Contac support at abc</div>
}

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
export default TodoApp;
