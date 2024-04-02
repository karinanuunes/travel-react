import Destiny from "../destiny/destiny";
import "./book.css";
import eua from "../../../public/eua.jpg";
import japao from "../../../public/japao.jpg";
import search from "../../assets/search.svg";
import money from "../../assets/money.svg";
import airplane from "../../assets/airplane.svg";

const Book = () => {
  return (
    <div className="book">
      <div className="book-steps">
        <h4>Fácil e rápido</h4>
        <h1>Reserve sua próxima viagem em 3 passos</h1>
        <div className="book-step">
          <div className="svg yellow">
            <img src={search} alt="Lupa" />
          </div>
          <div className="book-step-content">
            <h4>Escolha o destino</h4>
            <p>Descubra qual é a cultura que deseja conhecer ou revisitar.</p>
          </div>
        </div>
        <div className="book-step">
          <div className="svg red">
            <img src={money} alt="Notas de dinheiro" />
          </div>
          <div className="book-step-content">
            <h4>Reserve o dinheiro</h4>
            <p>
              Garanta que todas as despesas com passagem, hotel e alimentação
              estejam seguras.
            </p>
          </div>
        </div>
        <div className="book-step">
          <div className="svg blue">
            <img src={airplane} alt="Avião" />
          </div>
          <div className="book-step-content">
            <h4>Selecione a data desejada</h4>
            <p>Garanta sua chegada no aeroporto mais perto de você.</p>
          </div>
        </div>
      </div>
      <div className="book-tips">
        <Destiny
          src={eua}
          alt="Estados Unidos"
          title="Estados Unidos"
          price="R$6000"
          days="7 dias de viagem"
        />
        <div className="book-complete">
          <img src={japao} alt="" className="book-complete-img" />
          <div className="book-complete-content">
            <h6>Em andamento</h6>
            <p>
              <strong>Viagem para Japão</strong>
            </p>
            <p>40% completa</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
