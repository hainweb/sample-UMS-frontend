import { useAuth } from "../../context/AuthContext";
import "./UserNavbar.css";
import { useNavigate } from "react-router-dom";
const UserNavbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  return (
    <div>
      <div className="navbar">
        <h2 className="heading" onClick={() => navigate("/")}>
          Profile manager
        </h2>
        <div className="sub-navlink">
          {user ? (
            <h3 onClick={() => logout()} className="user-name">
              {user?.name} /logout
            </h3>
          ) : (
            <h3 className="login" onClick={() => navigate("/login")}>
              Login
            </h3>
          )}

          {user?.role == "admin" && (
            <h3 className="sub-heading" onClick={() => navigate("/admin")}>
              Admin Panel
            </h3>
          )}
          <h3 className="sub-heading" onClick={() => navigate("/")}>
            Home
          </h3>
          <h3 className="sub-heading" onClick={() => navigate("/profile")}>
            Profile
          </h3>
          <h3 className="sub-heading" onClick={() => navigate("/about")}>
            About
          </h3>
        </div>
      </div>
    </div>
  );
};

export default UserNavbar;
