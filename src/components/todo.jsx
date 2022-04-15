
import { BrowserRouter as Router, Routes, Route   } from "react-router-dom";

import '../boostrap.css'



import AuthenticateRoute from "./AuthenticateRoute";

import LoginComponent from "./LoginComponent";
import ListTodoComponent from "./ListTodoComponent";
import HeaderComponent from "./HeaderComponent";
import FooterComponent  from "./FooterComponent";
import WelcomeComponent from "./WelcomeComponent";
import LogoutComponent from "./LogoutComponent";
import ErrorComponent from "./ErrorComponent";
import TodoComponent from "./TodoComponent";

function TodoApp() {
    return (
      <div className="TodoApp">
       <Router>
         <>
          <HeaderComponent/>
              <Routes>
                  <Route exact path="/"  element={<LoginComponent/>} />
                  <Route path="/login" element={<LoginComponent/>} />

                  <Route path="/welcome/:name" element={<AuthenticateRoute> <WelcomeComponent/></AuthenticateRoute>} />
                  <Route path="/todos/:id" element={<AuthenticateRoute> <TodoComponent/></AuthenticateRoute>} />
                  <Route path="/todos" element={<AuthenticateRoute> <ListTodoComponent/></AuthenticateRoute>}  />
                  <Route path="/logout" element={<AuthenticateRoute> <LogoutComponent/></AuthenticateRoute>} />
                  <Route path="*" element={<ErrorComponent/>} />
              </Routes>
            <FooterComponent/>
         </>
        </Router>
      </div>
    );
  }
export default TodoApp;
