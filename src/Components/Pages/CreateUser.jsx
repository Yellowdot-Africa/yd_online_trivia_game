import React, { useState, useEffect } from "react";
import "../../Styles/CreateUser.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/Images/ydlogo.png";
import CustomButton from "../Common/CustomButton";
import { Link } from "react-router-dom";
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
  const token = sessionStorage.getItem("token");

  const [registrationData, setRegistrationData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    msisdn: "",
    password: "",
  });

  const [allUsers, setAllUsers] = useState([]);
  const [userRole, setUserRole] = useState("normal");
  const [specificUser, setSpecificUser] = useState([]);
  const [registrationError, setRegistrationError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchAllUsers();
  }, []);

  const fetchAllUsers = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://onlinetriviaapi.ydplatform.com:2023/api/YellowDotTrivia/Users/GetUsers",
        {
          headers: {
            Accept: "*/*",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setAllUsers(response.data);
    } catch (error) {
      setRegistrationError("Error fetching all users: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleUserRegistration = async () => {
    try {
      setLoading(true);
      const response = await axios.post(
        "https://onlinetriviaapi.ydplatform.com:2023/api/YellowDotTrivia/Users/CreateUser",
        registrationData,
        {
          headers: {
            Accept: "*/*",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setSuccess("User registration successful:", response.data);
      console.log("User registration successful:", response.data);

      fetchAllUsers();

      navigate("/signin");
    } catch (error) {
      setRegistrationError("Error registering user: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const getSpecificUser = async (userId) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://onlinetriviaapi.ydplatform.com:2023/api/YellowDotTrivia/Users/GetUser?userID=${userId}`,
        {
          headers: {
            Accept: "*/*",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      getSpecificUser();
      setSpecificUser(response.data);

      console.log("Specific user data:", response.data);
    } catch (error) {
      setRegistrationError("Error specific users: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const updateUserPassword = async (userId, newPassword) => {
    try {
      setLoading(true);
      const response = await axios.put(
        `https://onlinetriviaapi.ydplatform.com:2023/api/YellowDotTrivia/Users/UpdatePassword?userID=${userId}`,
        { newPassword },
        {
          headers: {
            Accept: "*/*",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Password updated:", response.data);
    } catch (error) {
      console.error("Error updating password:", error);
    }
  };

  const deleteUser = async (userId) => {
    try {
      const response = await axios.delete(
        `https://onlinetriviaapi.ydplatform.com:2023/api/YellowDotTrivia/Users/DeleteUser?userID=${userId}`,
        {
          headers: {
            Accept: "*/*",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("User deleted:", response.data);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const deactivateUser = async (userId) => {
    try {
      const response = await axios.put(
        `https://onlinetriviaapi.ydplatform.com:2023/api/YellowDotTrivia/Users/DeactivateUser?userID=${userId}`,
        {},
        {
          headers: {
            Accept: "*/*",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("User deactivated:", response.data);
    } catch (error) {
      console.error("Error deactivating user:", error);
    }
  };

  const reactivateUser = async (userId) => {
    try {
      const response = await axios.put(
        `https://onlinetriviaapi.ydplatform.com:2023/api/YellowDotTrivia/Users/ActivateUser?userID=${userId}`,
        {},
        {
          headers: {
            Accept: "*/*",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("User reactivated:", response.data);
    } catch (error) {
      console.error("Error reactivating user:", error);
    }
  };

  const makeUserAdmin = async (userId) => {
    try {
      const response = await axios.put(
        `https://onlinetriviaapi.ydplatform.com:2023/api/YellowDotTrivia/Users/UpgradeToAdmin?userID=${userId}`,
        {},
        {
          headers: {
            Accept: "*/*",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("User upgraded to admin:", response.data);

      setUserRole("admin");
    } catch (error) {
      console.error("Error upgrading user to admin:", error);
    }
  };

  const downgradeAdmin = async (userId) => {
    try {
      const response = await axios.put(
        `https://onlinetriviaapi.ydplatform.com:2023/api/YellowDotTrivia/Users/DowngradeToUser?userID=${userId}`,
        {},
        {
          headers: {
            Accept: "*/*",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Admin downgraded to user:", response.data.data);

      setUserRole("normal");
    } catch (error) {
      console.error("Error downgrading admin to user:", error);
    }
  };

  return (
    <>
      <div className="container">
        <div className="create-user-container">
          <div className="create-user-header">
            <img src={logo} alt="logo" />
          </div>
          <div className="reg-form">
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Firstname"
                aria-label="Firstname"
                onChange={(e) =>
                  setRegistrationData({
                    ...registrationData,
                    firstName: e.target.value,
                  })
                }
                value={registrationData.firstName}
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Lastname"
                aria-label="Lastname"
                onChange={(e) =>
                  setRegistrationData({
                    ...registrationData,
                    lastName: e.target.value,
                  })
                }
                value={registrationData.lastName}
              />
            </InputGroup>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label></Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                onChange={(e) =>
                  setRegistrationData({
                    ...registrationData,
                    email: e.target.value,
                  })
                }
                value={registrationData.email}
              />
            </Form.Group>

            <Form.Label htmlFor="msisdn"></Form.Label>
            <Form.Control
              type="number"
              placeholder="msisdn"
              id="msisdn"
              onChange={(e) =>
                setRegistrationData({
                  ...registrationData,
                  msisdn: e.target.value,
                })
              }
              value={registrationData.phoneNumber}
            />

            <Form.Label htmlFor="inputPassword"></Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              id="inputPassword"
              onChange={(e) =>
                setRegistrationData({
                  ...registrationData,
                  password: e.target.value,
                })
              }
              value={registrationData.password}
            />
          </div>
          <CustomButton
            onClick={handleUserRegistration}
            style={buttonStyles}
            buttonText={buttonText}
            disabled={!registrationData.email || !registrationData.password}
          />
           
          {loading ? (
            <p className="loading">Loading...</p>
          ) : registrationError ? (
            <p className="error">Error: {registrationError}</p>
          ) : (
           <div></div>
          )}
           <div className="account">
            <p>Already have an account?</p>
            <Link to="/signin" className="sign">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateUser;
