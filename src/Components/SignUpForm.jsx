import React from "react";

const SignUpForm = ({ isSignUpOpen }) => {
  return (
    <>
      <div className="signup-form-cont">
        <form className={`signup-form ${isSignUpOpen ? "open" : ""}`}>
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
          <button>Signup</button>
        </form>
      </div>
    </>
  );
};

export default SignUpForm;
