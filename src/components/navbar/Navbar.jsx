import { useContext, useState, useEffect } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useNotificationStore } from "../../lib/notificationStore";

function Navbar({ tenant }) {
  const [open, setOpen] = useState(false);
  const { currentUser } = useContext(AuthContext);

  const fetch = useNotificationStore((state) => state.fetch);
  const number = useNotificationStore((state) => state.number);

  useEffect(() => {
    if (currentUser) {
      fetch();
    }
  }, [fetch, currentUser]);

  const isTenant = currentUser?.role === "tenant";

  return (
    <nav>
      <div className="left">
        <Link to="/" className="logo">
          <img src="/KingsHome.png" alt="KingsHome Logo" />
          <span>KingsHome</span>
        </Link>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        {currentUser && isTenant && (
          <>
            {/* <Link to="/tenant/dashboard">Dashboard</Link> */}
            <Link to="/tenant/add-property">Add Property</Link>
          </>
        )}
        {currentUser && !isTenant && (
          <>
            <Link to="/find">Find Home</Link>
            {/* <Link to="/add">Post Property</Link> */}
          </>
        )}
      </div>

      <div className="right">
        {currentUser ? (
          <div className="user">
            <img
              src={currentUser.avater || "/noavater.jpg"}
              alt="User Avatar"
            />
            <span>{currentUser.username}</span>
            {currentUser && isTenant && (
  <Link to="/tenant/profile" className="profile">
    {number > 0 && <div className="notification">{number}</div>}
    <span>Profile</span>
  </Link>
)}

{currentUser && !isTenant && (
  <Link to="/profile" className="profile">
    {number > 0 && <div className="notification">{number}</div>}
    <span>Profile</span>
  </Link>
)}

          </div>
        ) : (
          <>
            <Link to="/login">Sign in</Link>
            <Link to="/register" className="register">
              Sign up
            </Link>
          </>
        )}

        <div className="menuIcon">
          <img
            src="/menu.png"
            alt="Menu Icon"
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>

        <div className={open ? "menu active" : "menu"}>
          {/* Cancel Button */}
  <div className="cancel" onClick={() => setOpen(false)}>
    ✕
  </div>
  
  <Link to="/">Home</Link>
  <Link to="/about">About</Link>
  <Link to="/contact">Contact</Link>
  {currentUser && (
    <>
      {isTenant ? (
        <>
          <Link to="/tenant/profile">Profile</Link>
          {/* <Link to="/tenant/dashboard">Dashboard</Link> */}
          <Link to="/tenant/add-property">Add Property</Link>
          <Link to="/register" className="register">
              Sign up
            </Link>
        </>
      ) : (
        <>
          <Link to="/profile">Profile</Link>
          <Link to="/find">Find Home</Link>
          <Link to="/register" className="register">
              Sign up
            </Link>
        </>
      )}
    </>
  )}
  {!currentUser && (
    <>
      <Link to="/login">Sign in</Link>
      <Link to="/register">Sign up</Link>
    </>
  )}
</div>
      </div>
    </nav>
  );
}

export default Navbar;
