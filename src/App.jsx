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

function App() {
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
          <Route path="/admin" element={<AdminHome />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
