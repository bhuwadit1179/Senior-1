import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/DashboardPage";
import "./App.css";
import { useState } from "react";
import { ThemeProvider } from "react-bootstrap";

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
            <Route path="/" element={<Dashboard />}></Route>
          </Routes>
        ) : (
          <LoginPage loginFunction={setLogin}></LoginPage>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
