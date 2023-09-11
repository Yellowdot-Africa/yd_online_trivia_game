// import React from "react";
// import "../../Styles/CreateUser.css";
// import Form from "react-bootstrap/Form";
// import InputGroup from 'react-bootstrap/InputGroup';
// import { useNavigate } from "react-router-dom";
// import logo from "../../assets/Images/ydlogo.png";
// import { Link } from "react-router-dom";
// import CustomButton from "../Common/CustomButton";


// const CreateUser = () => {
//     const navigate = useNavigate();
//     const buttonText = "Sign Up";
//     const buttonStyles = {
//         backgroundImage:
//           "linear-gradient(145deg, rgba(29, 29, 185, 0.6) 0%, #1d1db9 100%)",
//         boxShadow: "0px 0px 2px 0px #6b6bd1",
//         width: "222px",
//         margin:"20px",
//       };

//   return (
//     <>
//         <div className="container">
//         <div className="create-user-container">
//           <div className="create-user-header">
//             <img src={logo} alt="logo" />
//           </div>
//       <div className="reg-form">
//         <InputGroup className="mb-3">
//           <Form.Control
//             placeholder="Firstname"
//             aria-label="Firstname"
//           />
//         </InputGroup>

//         <InputGroup className="mb-3">
//           <Form.Control
//             placeholder="Lastname"
//             aria-label="Lastname"
//           />
//         </InputGroup>

//         <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
//           <Form.Label></Form.Label>
//           <Form.Control type="email" placeholder="name@example.com" />
//         </Form.Group>
//         <Form.Label htmlFor="inputNumber"></Form.Label>

//         <Form.Control
//           type="number"
//           placeholder="+234"
//           id="inputNumber"
        
//         />
//         <Form.Label htmlFor="inputPassword"></Form.Label>
//         <Form.Control
//           type="password"
//           placeholder="Password"
//           id="inputPassword"
        
//         />

//       </div>
//       <CustomButton
//             buttonText={buttonText}
//             style={buttonStyles}
            
//           />
        
//       <div className="account">
//       <p>Already have an account?</p>
//       <Link to="/signin" className="sign">
//          Sign in
//         </Link>
//         </div>
//       </div>
//       </div>

     
//     </>
//   );
// };

// export default CreateUser;


import React, { useState, useEffect } from "react";
import "../../Styles/CreateUser.css";
import yellow from "../../assets/Images/Ellipse 30.png";
import purple from "../../assets/Images/Ellipse 23.png";
import red from "../../assets/Images/Ellipse 24.svg";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/Images/ydlogo.png";
import { Link } from "react-router-dom";
import CustomButton from "../Common/CustomButton";
import axios from "axios";

const CreateUser = () => {
  const navigate = useNavigate();
  const buttonText = "Sign Up";
  const buttonStyles = {
    backgroundImage:
      "linear-gradient(145deg, rgba(29, 29, 185, 0.6) 0%, #1d1db9 100%)",
    boxShadow: "0px 0px 2px 0px #6b6bd1",
    width: "222px",
    margin: "20px",
  };

  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
  });

  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const createUser = async () => {
    try {
      const response = await axios.post(
        "https://onlinetriviaapi.ydplatform.com:2023/api/YellowDotTrivia/Users/CreateUser",
        userData
      );
      setLoading(false);

      console.log("Created User:", response.data);
    } catch (error) {
      setError(error.message);
      setLoading(false);
      console.error("Error creating user:", error.response.data);
    }
  };

  const getUser = async () => {
    try {
      const response = await axios.get(
        "https://onlinetriviaapi.ydplatform.com:2023/api/YellowDotTrivia/Users/GetUser"
      );
      setLoading(false);

      setUser(response.data);
    } catch (error) {
      setError(error.message);
      setLoading(false);
      console.error("Error fetching user:", error);
    }
  };

  const getUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://onlinetriviaapi.ydplatform.com:2023/api/YellowDotTrivia/Users/GetUsers"
      );

      setUsers(response.data);
    } catch (error) {
      setError(error.message);
      setLoading(false);
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsers(); 
  }, []);

  return (
    <>
      <div className="container">
        <img className="bgg-img" src={yellow} alt="" />
        <img className="bgg-img" src={purple} alt="" />
        <img className="bgg-img" src={red} alt="" />
        <div className="create-user-container">
          <div className="create-user-header">
            <img src={logo} alt="logo" />
          </div>
          <div className="reg-form">
            <InputGroup className="mb-3">
              <Form.Control
                type="text"
                name="firstName"
                placeholder="First Name"
                value={userData.firstName}
                onChange={handleInputChange}
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <Form.Control
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={userData.lastName}
                onChange={handleInputChange}
              />
            </InputGroup>

            <Form.Group className="mb-3" controlId="email">
              <Form.Control
                type="email"
                name="email"
                placeholder="Email"
                value={userData.email}
                onChange={handleInputChange}
              />
            </Form.Group>

            <InputGroup className="mb-3">
              <Form.Control
                type="tel"
                name="phoneNumber"
                placeholder="Phone Number"
                value={userData.phoneNumber}
                onChange={handleInputChange}
              />
            </InputGroup>

            <Form.Group className="mb-3" controlId="password">
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                value={userData.password}
                onChange={handleInputChange}
              />
            </Form.Group>
          </div>
          <CustomButton
            buttonText={buttonText}
            style={buttonStyles}
            onClick={createUser}
          />
          <div className="account">
            <p>Already have an account?</p>
            <Link to="/signin" className="sign">
              Sign in
            </Link>
          </div>
        </div>
      </div>
      <div>
        {user && (
          <div>
            <h3>User Data</h3>
            <pre>{JSON.stringify(user, null, 2)}</pre>
          </div>
        )}

        <div>
          <h3>List of Users</h3>
          {loading ? (
            <p className="loading">Loading...</p>
          ) :  error ? (
            <p className="loading">Error fetching users: {error}</p>
          ) :(
            <ul>
              {users.map((user) => (
                <li key={user.id}>{user.firstName} {user.lastName}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default CreateUser;

