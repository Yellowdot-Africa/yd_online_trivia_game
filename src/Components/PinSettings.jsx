import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";


export const ChangePinForm = () => {

    const token = useSelector((state) => state.auth.jwt);

    const [formData, setFormData] = useState({
      currentPin: "",
      newPin: ""
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
  
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      setError("");
      setSuccess("");
      try {
        const response = await axios.put(
          "https://onlinetriviaapi.ydplatform.com:2023/api/YellowDotTrivia/TransactionPin/UpdateTransactionPin",
          {
            oldPin: formData.currentPin,
            newPin: formData.newPin
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
          
        );
        if (response.status === 200) {
          setSuccess(response.data.message || "PIN successfully changed!"); 
          setFormData({
            currentPin: "",
            newPin: ""
          }); 
        }
      } catch (error) {
        setError(error.response?.data?.message || "Failed to change PIN. Please try again.");
        console.error("Error updating PIN:", error.response?.data || error.message);
      } finally {
        setLoading(false);
        setTimeout(() => {
          setSuccess("");
          setError("");
        }, 2000);
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          name="currentPin"
          placeholder="Old PIN"
          value={formData.currentPin}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="newPin"
          placeholder="New PIN"
          value={formData.newPin}
          onChange={handleChange}
          required
        />
        <button type="submit" disabled={loading} className="modal-close-btn">
          {loading ? "Changing PIN..." : "Change PIN"}
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && <p style={{ color: "green" }}>{success}</p>} 

      </form>
    );
  };
  


