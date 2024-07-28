export const checkValidation = (email, password) => {
    // Email validation pattern
    const isEmailValid = /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/.test(email)
    
    // Password validation pattern (minimum 8 characters, at least one letter and one number)
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

    // Return error messages or null if both are valid
    if (!isEmailValid) return "Email is not valid";
    if (!isPasswordValid) return "Password is not valid";

    return null;
};
