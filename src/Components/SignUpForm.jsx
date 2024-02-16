import React from "react";

const SignUpForm = ({ isMenuOpen }) => {
  return (
    <>
      <form className={`form signup-form ${isMenuOpen ? "open" : ""}`}>
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
    </>
  );
};

export default SignUpForm;




