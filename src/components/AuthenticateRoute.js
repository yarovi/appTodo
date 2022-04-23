
import { Navigate, Outlet } from "react-router-dom";
import AuthenticationService from "./AuthenticationService";


function AuthenticateRoute ({children })  {
   
      // console.log("estado del auth",AuthenticationService.isUserLoggedIn());
      return AuthenticationService.isUserLoggedIn() ? children   : <Navigate to="/login"/>
}
export default AuthenticateRoute;