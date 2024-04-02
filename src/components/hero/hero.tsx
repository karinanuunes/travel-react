import Nav from "../nav/nav";
import "./hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
      <Nav />
      <section className="hero-content">
        <div className="description">
          <h6 className="hero-uptitle">MELHORES DESTINOS DO MUNDO</h6>
          <h1 className="hero-title">Viajar, curtir e viver a vida</h1>
          <p>
            Descubra viagens inesquecíveis com a Agência de Viagens Exploratio.
            Deixe-nos transformar seus sonhos em realidade, explorando destinos
            exóticos e experiências memoráveis. Visite nosso site e comece sua
            jornada hoje mesmo!
          </p>
          <div className="hero-destiny">
            <button className="classic-button hero-button">
              <Link to={"/destinos"} className="white-button">
                Descubra novos destinos
              </Link>
            </button>
            <Link to={"/"}>Vá direto ao ponto</Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-right-short"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
              />
            </svg>
          </div>
        </div>
        <img
          src="https://vistovilamariana.com.br/wp-content/uploads/2023/07/Mulher-com-Mala-com-fundo-amarelo-1024x1024.png"
          alt="Mulher de origem asiática, cabelo liso e castanho escuro, com passaporte em frente do rosto, uma mala vermelha e um blazer cor de goiaba."
          className="hero-image"
        />
      </section>
    </div>
  );
};

export default Hero;
