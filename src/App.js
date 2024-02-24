import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/DashboardPage";
import "./App.css";
import { useState } from "react";
import { ThemeProvider } from "react-bootstrap";
import firebaseConfig from "./firebase/config";
import { initializeApp } from "firebase/app";
import Register from "./pages/Register";

// const app = initializeApp(firebaseConfig);

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const setLogin = () => {
    setIsLogin(true);
  };

  return (
    <ThemeProvider>
      <div>
        {isLogin ? (
          <Routes>
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route
              path="*"
              element={<Navigate to={"/dashboard"}></Navigate>}
            ></Route>
          </Routes>
        ) : (
          <Routes>
            <Route path="/register" element={<Register></Register>}></Route>
            <Route
              path="/login"
              element={<LoginPage loginFunction={setLogin}></LoginPage>}
            ></Route>
            <Route
              path={"*"}
              element={<Navigate to={"/login"}></Navigate>}
            ></Route>
          </Routes>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
