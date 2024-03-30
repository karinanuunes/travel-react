import "./subscribe.css";

const Subscribe = () => {
  return (
    <div className="subscribe">
      <div className="send-svg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M0 12l11 3.1 7-8.1-8.156 5.672-4.312-1.202 15.362-7.68-3.974 14.57-3.75-3.339-2.17 2.925v-.769l-2-.56v7.383l4.473-6.031 4.527 4.031 6-22z" />
        </svg>
      </div>
      <h2>
        Se inscreva para receber informações, últimas notícias e outras ofertas
        da Exploratio
      </h2>
      <div className="email-box">
        <div className="email-input-box">
          <div className="email-svg">
            <svg
              viewBox="0 0 128 128"
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m108.432 34.757c-.039-.039-.083-.073-.123-.111a7.663 7.663 0 0 0 -5.309-2.116h-78.01a7.662 7.662 0 0 0 -5.306 2.113c-.038.037-.08.069-.118.106a7.692 7.692 0 0 0 -2.326 5.531v47.44a7.759 7.759 0 0 0 7.75 7.75h78.01a7.759 7.759 0 0 0 7.75-7.75v-47.44a7.648 7.648 0 0 0 -2.318-5.523zm-5.432 1.273a4.242 4.242 0 0 1 1.17.182l-36.17 29.481a6.349 6.349 0 0 1 -7.99 0l-36.19-29.481a4.236 4.236 0 0 1 1.17-.182zm4.25 51.69a4.255 4.255 0 0 1 -4.25 4.25h-78.01a4.255 4.255 0 0 1 -4.25-4.25v-47.44a4.217 4.217 0 0 1 .387-1.748l36.667 29.874a9.864 9.864 0 0 0 12.412 0l36.66-29.876a4.218 4.218 0 0 1 .384 1.75z" />
            </svg>
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
