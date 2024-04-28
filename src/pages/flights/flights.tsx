import "./flights.css";
import Footer from "../../components/footer/footer";
import Nav from "../../components/nav/nav";
import airplaneData from "../../utils/airplanesData";

const Flights = () => {
  return (
    <div className="painel">
      <Nav />
      <div className="painel-controle">
        <h2>Próximos voôs</h2>
        <table className="tabela-voos">
          <thead>
            <tr>
              <th>País de partida</th>
              <th>Aeroporto de destino</th>
              <th>Número do voô</th>
            </tr>
          </thead>
          <tbody>
            {airplaneData
              .sort((a, b) => a.country.localeCompare(b.country))
              .map((data) => (
                <tr key={data.id}>
                  <td>{data.country}</td>
                  <td>{data.airport.name}</td>
                  <td>{data.flightNumber}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
};

export default Flights;
