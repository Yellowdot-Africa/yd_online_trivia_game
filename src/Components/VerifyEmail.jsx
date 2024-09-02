import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const VerifyEmail = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");

    const verifyUserEmail = async () => {
      try {
        const response = await axios.get(
          `https://onlinetriviaapi.ydplatform.com:2023/api/YellowDotTrivia/Authorization/VerifyEmail?code=${code}`
        
        );

        if (response.status === 200) {
          navigate("/login");
        } else {
          navigate("/error");
        }
      } catch (error) {
        console.error("Verification error:", error);

        navigate("/error");
      }
    };
    if (code) {
      verifyUserEmail();
    } else {
        navigate("/error");
    }
  }, [navigate]);


  return null;
};

export default VerifyEmail;
