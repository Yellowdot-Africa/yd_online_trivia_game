import "../LogOut/LogoutCard.css";

const LogOutCard = () => {
  return (
    <>
      <div className="logout-card">
        <p className="logout-text">Logout</p>
        <p className="logout-ptext"> Are you sure you want to log out ?</p>
        <span className="logout-btn">No, Cancel</span>
        <span className="logout-btnn">Yes, Logout</span>
      </div>
    </>
  );
};

export default LogOutCard;
