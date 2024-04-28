import "./signin.css";
import Nav from "../../components/nav/nav";
import Footer from "../../components/footer/footer";
import { useState } from "react";
import useInfo from "../../services/users";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import user from "../../assets/user.svg";
import openPadlock from "../../assets/open-padlock.svg";
import closePadlock from "../../assets/close-padlock.svg";
import openEye from "../../assets/open-eye.svg";
import closeEye from "../../assets/close-eye.svg";

interface Login {
  email: string;
  password: string;
}

const schema = Yup.object({
  email: Yup.string()
    .email("Por favor, insira um e-mail válido.")
    .required("O e-mail é obrigatório."),
  password: Yup.string()
    .min(6, "A senha deve conter no mínimo 6 caracteres.")
    .max(12, "A senha deve conter no máximo 12 caracteres.")
    .required("A senha é obrigatória."),
});

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signin } = useInfo();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Login>({ resolver: yupResolver(schema) });

  const onSubmit = async (data: Login) => {
    try {
      await schema.validate(data);
      if (data.email && data.password) {
        signin(data.email, data.password);
        const newUser = { email, password };
        data.email = newUser.email;
        data.password = newUser.password;
        alert("Usuário cadastrado com sucesso, avance com o login");
        navigate("/login");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="signin">
      <Nav />
      <div className="signin-user">
        <h2>Área de cadastro</h2>
        <h4>Fique por dentro de nossos pacotes e promoções imperdíveis.</h4>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="email">E-mail</label>
          <div className="user-input-area">
            <img src={user} alt="Usuário" />
            <input
              id="email"
              type="text"
              className="user-input"
              placeholder="exemplo@email.com"
              {...register("email", {
                onChange: (e) => setEmail(e.target.value),
              })}
              autoComplete="email"
            />
          </div>
          {errors.email ? (
            <small className="error-msg">{errors.email.message}</small>
          ) : (
            ""
          )}
          <label htmlFor="password">Senha</label>
          <div className="user-input-area">
            {showPassword ? (
              <img src={openPadlock} alt="Cadeado aberto" />
            ) : (
              <img src={closePadlock} alt="Cadeado fechado" />
            )}

            <input
              id="password"
              type={showPassword ? "text" : "password"}
              className="user-input"
              placeholder="******"
              {...register("password", {
                onChange: (e) => setPassword(e.target.value),
              })}
            />
            <div className="show-password">
              <label
                htmlFor="password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <img src={openEye} alt="Olho aberto" />
                ) : (
                  <img src={closeEye} alt="Olho fechado" />
                )}
              </label>
            </div>
          </div>
          {errors.password && (
            <small className="error-msg">{errors.password.message}</small>
          )}

          <div className="signin-submit">
            <input
              type="submit"
              value="Cadastrar"
              className="hero-button classic-button"
            />
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Signin;
