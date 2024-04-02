import "./login.css";
import Nav from "../../components/nav/nav";
import Footer from "../../components/footer/footer";
import { useState } from "react";
import useInfo from "../../store/users";
import { useNavigate } from "react-router-dom";
import user from "../../assets/user.svg";
import openPadlock from "../../assets/open-padlock.svg";
import closePadlock from "../../assets/close-padlock.svg";
import openEye from "../../assets/open-eye.svg";
import closeEye from "../../assets/close-eye.svg";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useInfo();
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const authenticated = await login(email, password);

    if (authenticated) {
      setShowError(false);
      console.log("Login realizado com sucesso");
      alert("Login realizado com sucesso");
      navigate("/destinos");
    } else {
      setShowError(true);
      console.log("Falha no login.");
    }
  };

  return (
    <div className="login">
      <Nav />
      <div className="login-user">
        <h2>Entre em sua conta</h2>
        <form onSubmit={handleLogin}>
          <div className="user-input-area">
            <img src={user} alt="Usuário" />
            <input
              type="text"
              className="user-input"
              placeholder="Usuário"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="user-input-area">
            {showPassword ? (
              <img src={openPadlock} alt="Cadeado aberto" />
            ) : (
              <img src={closePadlock} alt="Cadeado fechado" />
            )}

            <input
              type={showPassword ? "text" : "password"}
              className="user-input"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="show-password">
              <label onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? (
                  <img src={openEye} alt="Olho aberto" />
                ) : (
                  <img src={closeEye} alt="Olho fechado" />
                )}
              </label>
            </div>
          </div>
          {showError ? (
            <div className="error-msg">
              <small>Usuário ou senha inválidos.</small>
            </div>
          ) : (
            <small></small>
          )}
          <div className="login-submit">
            <input
              type="submit"
              value="Entrar"
              className="hero-button classic-button"
            />
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
