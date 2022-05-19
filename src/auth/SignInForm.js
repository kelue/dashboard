import React from 'react'
import lock from '../assets/svg/lock.svg'
import mail from '../assets/svg/mail.svg'

function SignInForm({onInputChange, onSubmitHandler, onEmailError, onPasswordError}) {
  return (
    <>
        <form className="flex flex-col pt-3 md:pt-8" onSubmit={onSubmitHandler}>
            <div className="flex flex-col pt-4">
                <div className="flex relative ">
                    <span className=" inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                    <img src={mail} alt="icon"/>
                    </span>
                    <input type="text" id="design-login-email" className=" flex appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="email" placeholder="Email" onChange={onInputChange}/>
                </div>
                <div className="mt-2 py-2 px-4 text-red-600 rounded-sm">
                {onEmailError}
                </div>
            </div>
            <div className="flex flex-col pt-4 mb-12">
                <div className="flex relative ">
                <span className=" inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                    <img src={lock} alt="icon"/>   
                </span>
                <input type="password" id="design-login-password" className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Password" name="password" onChange={onInputChange}/>
                </div>
                <div className="mt-2 py-2 px-4 text-red-600 rounded-sm">
                    {onPasswordError}
                </div>
            </div>
            <button type="submit" className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-black shadow-md hover:text-black hover:bg-white focus:outline-none focus:ring-2">
                <span className="w-full">
                    Log In
                </span>
            </button>
        </form>
    </>
  )
}

export default SignInForm