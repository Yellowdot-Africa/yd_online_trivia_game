import React, { useEffect, useState } from "react";
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
        console.log("API response:", response); 

        if (response.status === 200) {
          navigate("/login");
        } else {
          const errorMessage = response.data.message || "Verification failed";

          console.log("Verification failed, redirecting to error");

          navigate("/error", { state: { errorMessage } });  
        }
      } catch (error) {
        console.error("Verification error:", error);
        const errorMessage = error.response?.data?.message || "An unknown error occurred";

        navigate("/error", { state: { errorMessage } });  
      }
    };
    if (code) {
      verifyUserEmail();
    } else {
      console.log("No code in URL, redirecting to error");
      navigate("/error", { state: { errorMessage: "No verification code found in URL" } });

    }
  }, [navigate]);


  return null;
};

export default VerifyEmail;



