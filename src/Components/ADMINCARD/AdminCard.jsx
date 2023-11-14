import { useState } from "react";
import "../ADMINCARD/AdminCard.css";

const AdminCard = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [password, setPassword] = useState("");
  const [name, setName] = useState("Blessing Dorcas");
  const [email, setEmail] = useState("Blessingdorcas@gmail.com");
  const [isPasswordEntered, setIsPasswordEntered] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleInputChange = (e) => {
    setPassword(e.target.value);
    if (!isPasswordEntered && e.target.value.trim() !== "") {
      setIsPasswordEntered(true);
    }
  };

  const handleEditClick = () => {
    if (isPasswordEntered) {
      setIsEditing(true);
    }
  };

  const handleEnterClick = () => {
    if (password.trim() !== "") {
      setIsEditing(false);
    }
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    setIsPasswordEntered(false);
  };

  return (
    <>
      <div className="admin-card">
        <div className="card-details">
          <p>Admin card</p>
          {!isEditing ? (
            <span onClick={() => setIsEditing(true)}>Edit</span>
          ) : (
            <div className="input-wrapper">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={handleInputChange}
              />
              <button
                onClick={() => setIsEditing(false)}
                disabled={!isPasswordEntered}
              >
                {isPasswordEntered ? "Enter" : "Cancel"}
              </button>
            </div>
          )}
        </div>

        <div className="card-input">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            placeholder="Blessing Dorcas"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={!isEditing}
          />

          <label htmlFor="name">Email</label>
          <input
            type="text"
            placeholder="Blessingdorcas@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={!isEditing}
          />

          {isEditing && (
            <button onClick={handleSaveClick} disabled={!isPasswordEntered}>
              Save
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default AdminCard;
