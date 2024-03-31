import "./destination.css";
import Destiny from "../destiny/destiny";
import franca from "../../../public/franca.jpg";
import grecia from "../../../public/grecia.png";
import italia from "../../../public/italia.png";

const Destination = () => {
  return (
    <section className="destination">
      <h4>Top ofertas</h4>
      <h1>Destinos mais desejados</h1>
      <div className="cards-destination">
        <Destiny
          src={franca}
          alt="França"
          title="Paris, França"
          price="R$10000"
          days="6 dias de viagem"
        />
        <Destiny
          src={grecia}
          alt="Grécia"
          title="Atenas, Grécia"
          price="R$21800"
          days="14 dias de viagem"
        />
        <Destiny
          src={italia}
          alt="Itália"
          title="Pisa, Itália"
          price="R$15800"
          days="7 dias de viagem"
        />
      </div>
    </section>
  );
};

export default Destination;
