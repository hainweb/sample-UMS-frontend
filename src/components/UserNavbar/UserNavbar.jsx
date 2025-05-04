import './UserNavbar.css'

const UserNavbar = () => {
  return (
    <div>
      <div className="navbar">
        <h2 className="heading">Profile manager</h2>
        <div className="sub-navlink">
          <h3 className="sub-heading">Home</h3>
          <h3 className="sub-heading">Profile</h3>
          <h3 className="sub-heading">About</h3>
        </div>
      </div>
    </div>
  );
};

export default UserNavbar;
