import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Signup from "./pages/auth/Signup/Signup";
import Login from "./pages/auth/Login/Login";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Profile from "./pages/profile/Profile";
import AdminHome from "./pages/admin/AdminHome";
import AdminLayout from "./layout/AdminLayout";
import ManageUsers from "./pages/admin/manageUsers/ManageUsers";
import VerifyAdmin from "./components/VerifyAdmin";
import UnAuthorized from "./pages/unAuthorize/UnAuthorized";
import { useEffect } from "react";
import { getUser } from "./services/userServices";
import { useAuth } from "./context/AuthContext";

function App() {
  const { login } = useAuth();
  useEffect(() => {
    const verifyUser = async () => {
      try {
        const response = await getUser();
        if (response.success) {
          login(response.user);
        }
      } catch (error) {
        console.log(error);
      }
    };

    verifyUser();
  }, []);
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={
              <ProtectedRoutes>
                <Home />
              </ProtectedRoutes>
            }
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoutes>
                <Profile />
              </ProtectedRoutes>
            }
          />
        </Route>
        <Route element={<AdminLayout />}>
          <Route
            path="/admin"
            element={
              <VerifyAdmin>
                <AdminHome />
              </VerifyAdmin>
            }
          />
          <Route
            path="/manage-users"
            element={
              <VerifyAdmin>
                <ManageUsers />
              </VerifyAdmin>
            }
          />
        </Route>
        <Route path="/unauthorized" element={<UnAuthorized />} />
      </Routes>
    </Router>
  );
}

export default App;
