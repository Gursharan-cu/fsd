import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import "./Login.css";

export default function LoginPage() {

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate("/dashboard");
  };

  return (
    <div className="container">
      <div className="card">

        <h1 className="title">EcoTrack</h1>

        <p className="subtitle">
          Sign in to continue
        </p>

        <button className="button" onClick={handleLogin}>
          Login
        </button>

      </div>
    </div>
  );
}