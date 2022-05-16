export const loginFormValidator = (loginForm) =>{


    let errors = {};
    if (!loginForm.username){
        errors["usernameErr"] ="Username is required"
    }
    if (!loginForm.password){
        errors["password"] ="password is required"
    }
    return errors;
    }
