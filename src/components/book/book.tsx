import Destiny from "../destiny/destiny";
import "./book.css";
import eua from "../../../public/eua.jpg";
import japao from "../../../public/japao.jpg";

const Book = () => {
  return (
    <div className="book">
      <div className="book-steps">
        <h4>Fácil e rápido</h4>
        <h1>Reserve sua próxima viagem em 3 passos</h1>
        <div className="book-step">
          <div className="svg yellow">
            <svg
              fillRule="evenodd"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m15.97 17.031c-1.479 1.238-3.384 1.985-5.461 1.985-4.697 0-8.509-3.812-8.509-8.508s3.812-8.508 8.509-8.508c4.695 0 8.508 3.812 8.508 8.508 0 2.078-.747 3.984-1.985 5.461l4.749 4.75c.146.146.219.338.219.531 0 .587-.537.75-.75.75-.192 0-.384-.073-.531-.22zm-5.461-13.53c-3.868 0-7.007 3.14-7.007 7.007s3.139 7.007 7.007 7.007c3.866 0 7.007-3.14 7.007-7.007s-3.141-7.007-7.007-7.007z"
                fillRule="nonzero"
              />
            </svg>
          </div>
          <div className="book-step-content">
            <h4>Escolha o destino</h4>
            <p>Descubra qual é a cultura que deseja conhecer ou revisitar.</p>
          </div>
        </div>
        <div className="book-step">
          <div className="svg red">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M24 15.01c-6.857 3.941-12.399-1.424-19.5 5.99l-4.5-9.97 1.402-1.463 3.807 8.406-.002.007c7.445-5.595 11.195-1.176 18.109-4.563.294.648.565 1.332.684 1.593zm-8.904-6.21c-.47-1.095-1.783-1.827-2.932-1.636-1.15.191-1.702 1.233-1.231 2.328.498 1.155 1.921 1.895 3.094 1.603 1.038-.257 1.517-1.252 1.069-2.295zm-1.448 1.363l.104.229-.218.045-.097-.219c-.225.041-.482.035-.719-.027l-.065-.387c.195.03.438.058.623.02l.125-.041c.221-.109.153-.387-.176-.453-.244-.054-.893-.014-1.135-.552-.136-.304-.035-.621.356-.766l-.108-.239.217-.045.104.229c.159-.026.345-.036.563-.017l.087.383c-.169-.021-.353-.041-.512-.008l-.06.016c-.309.082-.21.375.064.446.453.105.994.139 1.208.612.172.385-.028.648-.361.774zm5.644-4.817l2.417 5.211c-4.279 2.284-9.871-.34-15 2.501l-2.313-5.065c3.873-2.694 9.197-.035 14.896-2.647zm.902-2.346c-6.179 4.004-13.007-.318-17.951 4.454l3.765 8.22c5.298-4.492 12.519-.238 17.952-4.455l-3.766-8.219z" />
            </svg>
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
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
            >
              <path d="M8.801 9l-2.602-6h3.688l6.182 6c1.373 0 2.93-.012 4.303.001 1.622.057 3.628 1.465 3.628 2.996 0 1.557-2.038 2.97-3.67 3.003h-4.236l-6.208 6h-3.658l2.594-6h-3.506l-2.164 2h-3.152l1.742-4.998-1.742-5.002h3.142l2.149 2h3.51zm3.034 2l-7.205-.004-2.017-1.996 1.26 2.998-1.283 3.002 1.997-2h7.246l-2.472 5.727 5.924-5.727c1.633 0 3.452.077 5.082-.002.791-.058 1.615-.809 1.615-.996 0-.211-.915-.995-1.694-1.002h-5.03l-5.909-5.735" />
            </svg>
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
