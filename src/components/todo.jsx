import React, { Component ,useState } from "react";
import { BrowserRouter as Router, Routes, Route ,useParams,useNavigate   } from "react-router-dom";



class TodoApp extends Component {
  render() {
    return (
      <div className="TodoApp">
       <Router>
          <Routes>
              <Route exact path="/"  element={<LoginComponent/>} />
              <Route path="/login" element={<LoginComponent/>} />
              <Route path="/welcome/:name" element={<WelcomeComponent/>} />
              <Route path="*" element={<ErrorComponent/>} />
          </Routes>
        </Router>
      </div>
    );
  }
}

function WelcomeComponent() {
  let params = useParams();
    return <div>welcome {params.name}</div>;
  
}

function ErrorComponent() {
  return <div>An Error Ocurred. I don't know what to do! Contac support at abc</div>
}






function LoginComponent() {
  const [username, setUsername] = useState("in28");
  const [password, setPassword] = useState("");
  const [hasLoginFailed, setHasLoginFailed] = useState(false);
  const [showSucessMessage, setShowSucessMessage] = useState(false);
  let navigation = useNavigate();
  function HandleChange(event) {
     console.log('HandleChange '+event.target.value);
     setPassword(event.target.value)
  }

  function LoginClicked() {
    
    if (username === "in28" && password === "as") {
      console.log('LoginClicked redirecionando ... '+username);
      navigation(`/welcome/${username}`);
      setShowSucessMessage(true);
      setHasLoginFailed(false);
    } else {
      setHasLoginFailed(false);
      setShowSucessMessage(true);
    }
  }
  /*
  constructor(props) {
    super(props);

    this.state = {
      username: "in28",
      password: "",
      hasLoginFailed: false,
      showSucessMessage: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.loginClicked = this.loginClicked.bind(this);
  }
  */
 
  

    return (
      <>
        {hasLoginFailed && <div>Invalid Credentials</div>}
        {showSucessMessage && <div>Login Success</div>}
        <div>valid Credentials</div>
        User name:{" "}
        <input
          type="text"
          name="username"
          value={username}
          onChange={HandleChange}
        />
        Password:{" "}
        <input
          type="password"
          name="password"
          value={password}
          onChange={HandleChange}
        ></input>
        <button onClick={LoginClicked}>Login</button>
      </>
    );
}


export default TodoApp;
