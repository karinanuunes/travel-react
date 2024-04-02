import "./signin.css";
import Nav from "../../components/nav/nav";
import Footer from "../../components/footer/footer";
import { useState } from "react";
import useInfo from "../../store/users";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

interface Login {
  email: string;
  password: string;
}

const schema = yup.object({
  email: yup
    .string()
    .email("Por favor, insira um e-mail válido.")
    .required("O e-mail é obrigatório."),
  password: yup
    .string()
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
      console.log("Dados válidos. Iniciando login...");
      const signinProcess = await signin(data.email, data.password);
      if (data.email && data.password) {
        console.log(signinProcess);
        console.log("Email: " + email + ", Senha: " + password);
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
          <label htmlFor="">E-mail</label>
          <div className="user-input-area">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
            >
              <path d="M19 7.001c0 3.865-3.134 7-7 7s-7-3.135-7-7c0-3.867 3.134-7.001 7-7.001s7 3.134 7 7.001zm-1.598 7.18c-1.506 1.137-3.374 1.82-5.402 1.82-2.03 0-3.899-.685-5.407-1.822-4.072 1.793-6.593 7.376-6.593 9.821h24c0-2.423-2.6-8.006-6.598-9.819z" />
            </svg>
            <input
              type="text"
              className="user-input"
              placeholder="exemplo@email.com"
              {...register("email", {
                onChange: (e) => setEmail(e.target.value),
              })}
            />
          </div>
          {errors.email ? (
            <small className="error-msg">{errors.email.message}</small>
          ) : (
            <></>
          )}
          <label htmlFor="password">Senha</label>
          <div className="user-input-area">
            {showPassword ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
              >
                <path d="M8 10v-4c0-2.206 1.794-4 4-4 2.205 0 4 1.794 4 4v1h2v-1c0-3.313-2.687-6-6-6s-6 2.687-6 6v4h-3v14h18v-14h-13z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
              >
                <path d="M18 10v-4c0-3.313-2.687-6-6-6s-6 2.687-6 6v4h-3v14h18v-14h-3zm-10 0v-4c0-2.206 1.794-4 4-4s4 1.794 4 4v4h-8z" />
              </svg>
            )}

            <input
              type={showPassword ? "text" : "password"}
              className="user-input"
              placeholder="******"
              {...register("password", {
                onChange: (e) => setPassword(e.target.value),
              })}
            />
            <div className="show-password">
              <label onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path d="M15 12c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm9-.449s-4.252 8.449-11.985 8.449c-7.18 0-12.015-8.449-12.015-8.449s4.446-7.551 12.015-7.551c7.694 0 11.985 7.551 11.985 7.551zm-7 .449c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5 5-2.243 5-5z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path d="M11.885 14.988l3.104-3.098.011.11c0 1.654-1.346 3-3 3l-.115-.012zm8.048-8.032l-3.274 3.268c.212.554.341 1.149.341 1.776 0 2.757-2.243 5-5 5-.631 0-1.229-.13-1.785-.344l-2.377 2.372c1.276.588 2.671.972 4.177.972 7.733 0 11.985-8.449 11.985-8.449s-1.415-2.478-4.067-4.595zm1.431-3.536l-18.619 18.58-1.382-1.422 3.455-3.447c-3.022-2.45-4.818-5.58-4.818-5.58s4.446-7.551 12.015-7.551c1.825 0 3.456.426 4.886 1.075l3.081-3.075 1.382 1.42zm-13.751 10.922l1.519-1.515c-.077-.264-.132-.538-.132-.827 0-1.654 1.346-3 3-3 .291 0 .567.055.833.134l1.518-1.515c-.704-.382-1.496-.619-2.351-.619-2.757 0-5 2.243-5 5 0 .852.235 1.641.613 2.342z" />
                  </svg>
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
