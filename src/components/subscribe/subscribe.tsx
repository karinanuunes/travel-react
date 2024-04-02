import "./subscribe.css";
import letterMessage from "../../assets/letter-message.svg";
import email from "../../assets/email.svg";

const Subscribe = () => {
  return (
    <div className="subscribe">
      <div className="send-svg">
        <img src={letterMessage} alt="Carta de formato de avião" />
      </div>
      <h2>
        Se inscreva para receber informações, últimas notícias e outras ofertas
        da Exploratio
      </h2>
      <div className="email-box">
        <div className="email-input-box">
          <div className="email-svg">
            <img src={email} alt="Carta de e-mail" />
          </div>
          <input
            type="text"
            placeholder="Digite seu e-mail aqui"
            className="email-input"
          />
        </div>
        <input
          type="submit"
          value="Enviar"
          className="classic-button hero-button"
        />
      </div>
    </div>
  );
};

export default Subscribe;
