import './AdminNavbar.css'
import { useNavigate } from "react-router-dom";
const AdminNavbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="admin-navbar">
        <h2 className="heading" onClick={() => navigate("/")}>
          Admin panel
        </h2>
        <div className="sub-navlink">
          <h3 className="sub-heading" onClick={() => navigate("/manage-users")}>
            Manage Users
          </h3>

          <h3 className="sub-heading" onClick={() => navigate("/about")}>
            About
          </h3>
        </div>
      </div>
    </div>
  );
};

export default AdminNavbar;
