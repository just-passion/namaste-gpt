export const checkValidData = (email, password) => {
     const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

     const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

     if(!isEmailValid){
        return "Enter valid Email address";
     }

     if(!isPasswordValid){
        return "Password should contain at least 8 characters, 1 uppercase, 1 lowercase, 1 number, 1 special character"
     }

     return null;
}