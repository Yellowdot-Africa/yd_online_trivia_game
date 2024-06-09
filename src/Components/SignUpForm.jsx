import React from 'react';
import "../Styles/SignUp.css";




const SignUpForm = ({ isSignUpOpen }) => {
  return (
    <>
      <div className="signup-form-cont">
        <form className={`signup-form ${isSignUpOpen ? "open" : ""}`}>
        <input
            type="number"
            placeholder="+234"
            autoComplete="phonenumber"
            id="phonenumber"
          />
           <input
            type="email"
            placeholder="Email"
            autoComplete="email"
            id="email"
          />
          
          <input
            type="text"
            placeholder="Username"
            autoComplete="username"
            id="username"
          />
          <input
            type="password"
            placeholder="Password"
            autoComplete="current-password"
            id="password"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            autoComplete="confirm-password"
            id="confirm-password"
          />
          <button>Signup</button>
        </form>
      </div>
    </>
  )
}

export default SignUpForm