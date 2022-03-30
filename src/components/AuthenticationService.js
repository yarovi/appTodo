class AuthenticationService{

    registerSuccessFullLogin(username,passowrd){
        sessionStorage.setItem('authenticateUser',username,passowrd);
        console.log('registerSuccessFullLogin')
    }

    logout(){
        sessionStorage.removeItem('authenticateUser');
    }

    isUserLoggedIn(){
        let user =sessionStorage.getItem('authenticateUser');
        
        if(user === null) return false;
        return true;
    }

}

export default new AuthenticationService()