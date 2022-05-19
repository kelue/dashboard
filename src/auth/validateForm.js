import * as EmailValidator from 'email-validator';

const hasSpecialChar = (str) => {
    return /[ `!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/.test(str);
}

const hasNumber = (str) => {
    return /\d/.test(str);
}

const hasLowerCase = (str) => {
    return str.toUpperCase() !== str;
}

const hasUpperCase = (str) => {
    return str.toLowerCase() !== str;
}

function validatePassword(text) {
    if (text.length < 8) return "Password should have 8 or more characters";
    if (!hasLowerCase(text)) return "Password should contain minimum 1 lowercase character";
    if(!hasUpperCase(text)) return "Password should contain minimum 1 uppercase character"
    if (!hasNumber(text)) return "Password should contain minimum 1 digit of numeric value";
    if (!hasSpecialChar(text)) return "Password should contain minimum 1 special character";
    return "";
}

function validateName(text) {
    if (text.length < 3) return "Name should have at least 3 characters";
    if (hasNumber(text)) return "Name should not contain numeric values";
    if (hasSpecialChar(text)) return "Name should not contain special character";
    return "";
}

function validateEmail(email) {
    return EmailValidator.validate(email);
}

export {
    validatePassword,
    validateEmail,
    validateName    
}