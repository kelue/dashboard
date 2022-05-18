import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import {validateEmail, validatePassword} from "../auth/validateForm";
import SignInForm from "../auth/SignInForm";
import bg from '../assets/background.jpg'



  function SignIn() {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        email: "",
        password: ""
    });
    const [emailError, setemailError] = useState("")
    const [Pwderror, setPwderror] = useState("")


    function validateForm(mail, pass) {
      const email = mail;
      const password = pass;

      //validation code 

      const emailValidateResult = validateEmail(email)

      if (!emailValidateResult) {
          setemailError("Please enter valid email address");
        } else {
        setemailError("");
      }

      const pwdValidateError = validatePassword(password)

      if (pwdValidateError) {
        setPwderror(pwdValidateError);
      } else {
        setPwderror("");
      }
      console.log(`password validation result ${pwdValidateError}`)
      return (emailValidateResult && !pwdValidateError)
    }

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e) => {
      e.preventDefault()
      if (validateForm(form.email, form.password)) {
        sessionStorage.setItem('userDetails', JSON.stringify({...form}))
        navigate('/admin')
      }
      // setTimeout(() => {
      //     window.location="/"
      // }, 5000); 
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
            <SignInForm 
            onInputChange={handleChange} 
            onSubmitHandler={submitHandler} 
            onEmailError={emailError} 
            onPasswordError={Pwderror}/>
            <div className="pt-12 pb-12 text-center">
                <p>
                    Don&#x27;t have an account?
                    <a href="#" className="font-semibold underline">
                        Register here.
                    </a>
                </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignIn