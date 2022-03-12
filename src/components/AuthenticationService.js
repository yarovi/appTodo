class AuthenticationService{

    registerSuccessFullLogin(username,passowrd){
        sessionStorage.setItem('authenticateUser',username);
    }

    logout(){
        sessionStorage.removeItem('authenticateUser');
    }

}

export default new AuthenticationService()