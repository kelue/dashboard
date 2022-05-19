import React from 'react'
import { useState } from 'react';
import bg from '../assets/background.jpg'
import SignUpForm from '../auth/SignupForm'
import { useNavigate } from "react-router-dom";
import {validateEmail, validatePassword, validateName} from "../auth/validateForm";


function SignUp() {

  const navigate = useNavigate();
  const [form, setForm] = useState({
      email: "",
      password: "",
      confirmpassword: "",
      name:""
  });
  const [emailError, setemailError] = useState("")
  const [Pwderror, setPwderror] = useState("")
  const [userError, setuserError] = useState("")


  function validateForm(mail, pass, user, pass2) {
    const email = mail;
    const password = pass;
    const confirmpassword = pass2;
    const name = user;

    //validation code 

    const nameValidateResult = validateName(name)

    if(nameValidateResult){
      setuserError(nameValidateResult)
    }else{
      setuserError("")
    }

    const emailValidateResult = validateEmail(email)

    if (!emailValidateResult) {
        setemailError("Please enter a valid email address");
      } else {
      setemailError("");
    }

    let pwdValidateError = validatePassword(password)
    if (pwdValidateError) {
      setPwderror(pwdValidateError);
    } else {
      setPwderror("");
    }

    if(password !== confirmpassword){
      pwdValidateError = !pwdValidateError;
      setPwderror("Password Entries do not match")
    }else{
      setPwderror("")
    }

    


    return (emailValidateResult && !pwdValidateError && !nameValidateResult)
  }

  const handleChange = (e) => {
      setForm({
          ...form,
          [e.target.name]: e.target.value
      })
  }

  const submitHandler = (e) => {
    e.preventDefault()
    if (validateForm(form.email, form.password, form.name, form.confirmpassword)) {
      sessionStorage.setItem('userDetails', JSON.stringify({...form}))
      navigate('/admin')

      setTimeout(() => {
        window.location="/"
        sessionStorage.removeItem("userDetails")
    }, 50000);
    } 
  }

  return (
    <>
      <div className="flex flex-wrap w-full">
        <div className="w-1/2 shadow-2xl">
            <img className="hidden object-cover w-full h-screen md:block" src={bg} alt='background'/>
        </div>
        <div className="flex flex-col w-full md:w-1/2">
          <div className="flex justify-center pt-12 md:justify-start md:pl-12 md:-mb-24">
              <a href="#" className="p-4 text-xl font-bold text-white bg-black">
                  Design.
              </a>
          </div>
          <div className="flex flex-col justify-center px-8 pt-8 my-auto md:justify-start md:pt-0 md:px-24 lg:px-32">
            <p className="text-3xl text-center">
                Welcome.
            </p>
            <SignUpForm 
            onInputChange={handleChange} 
            onSubmitHandler={submitHandler} 
            onEmailError={emailError} 
            onPasswordError={Pwderror}
            onNameError={userError}
            />
            <div className="pt-12 pb-12 text-center">
                <p>
                    Already have an account?{"  "}
                    <a href="/" className="font-semibold underline">
                        Log in.
                    </a>
                </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp