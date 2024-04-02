import Nav from "../../components/nav/nav";
import "./nopage.css";
import exclamation from "../../assets/exclamation.svg";

const NoPage = () => {
  return (
    <>
      <div className="expanse-content">
        <Nav />

        <div className="page-error">
          <img src={exclamation} alt="Ponto de exclamação" />

          <h1>Opa, algo deu errado.</h1>
          <p>Utilize a barra de navegação para voltar onde estava.</p>
        </div>
      </div>
    </>
  );
};

export default NoPage;
