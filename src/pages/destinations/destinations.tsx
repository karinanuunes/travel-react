import "./destinations.css";
import Destiny from "../../components/destiny/destiny";
import Footer from "../../components/footer/footer";
import Nav from "../../components/nav/nav";
import eua from "../../../public/eua.jpg";
import franca from "../../../public/franca.jpg";
import grecia from "../../../public/grecia.png";
import italia from "../../../public/italia.png";
import japao from "../../../public/japao.jpg";

const Destinations = () => {
  return (
    <div className="destinations">
      <Nav />
      <div className="destination">
        <h1>Destinos mais queridinhos</h1>
        <div className="cards-destination">
          {/* Usando price para ajustar a localização e days como descrição */}
          <Destiny
            src={eua}
            alt="Estados Unidos"
            title="Estados Unidos"
            price="Nova Iorque"
            days="Nova Iorque é marcada pela Estátua da Liberdade, o movimentado Times Square e o tranquilo Central Park, destacando-se como uma cidade com uma variedade de atrações turísticas para todos os gostos."
          />
          <Destiny
            src={franca}
            alt="França"
            title="França"
            price="Paris"
            days="Paris é famosa pela majestosa Torre Eiffel, os icônicos Museu do Louvre e a Catedral de Notre-Dame, cada um representando uma faceta única da rica cultura e história da cidade luz."
          />
          <Destiny
            src={grecia}
            alt="Grécia"
            title="Grécia"
            price="Atenas"
            days="Atenas é conhecida pela grandiosa Acrópole, o histórico Partenon e o Bairro de Plaka, proporcionando aos visitantes uma viagem inesquecível pela rica herança da Grécia antiga."
          />
          <Destiny
            src={italia}
            alt="Itália"
            title="Itália"
            price="Pisa"
            days="Pisa é famosa pela Torre Inclinada, um dos monumentos mais reconhecidos do mundo, além da deslumbrante Catedral de Pisa e do impressionante Batistério."
          />
          <Destiny
            src={japao}
            alt="Japão"
            title="Japão"
            price="Monte Fuji"
            days="O Monte Fuji é o ponto mais alto do Japão, uma montanha sagrada e um ícone cultural do país, oferece uma experiência única para alpinistas e amantes da natureza."
          />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Destinations;
