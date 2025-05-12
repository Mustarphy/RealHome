import "./layout.scss";
import Navbar from "../../components/navbar/Navbar";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

// Public layout (shared by everyone on general routes like Home, Login, etc.)
function Layout() {
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

// Role-based route guard
function RequireAuth({ role, children }) {
  const { currentUser } = useContext(AuthContext);

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  // If role is required and doesn't match current user, redirect
  if (role && currentUser.role !== role) {
    return <Navigate to="/" />;
  }

  return children;
}

// Layout for normal users
function UserLayout() {
  return (
    <div className="layout user-layout">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

// Layout for tenants
function TenantLayout() {
  return (
    <div className="layout tenant-layout">
      <div className="navbar">
        <Navbar tenant />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export { Layout, RequireAuth, UserLayout, TenantLayout };
