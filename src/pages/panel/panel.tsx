import "./panel.css";
import Nav from "../../components/nav/nav";
import userData from "../../data/userdata";
import { format } from "date-fns";
import Footer from "../../components/footer/footer";
import search from "../../assets/search.svg";
import leftArrow from "../../assets/left-arrow.svg";
import rightArrow from "../../assets/right-arrow.svg";
import { useState } from "react";

const Panel = () => {
  const [destino, setDestino] = useState("");
  const [pag, setPag] = useState(1);
  const totalPag = Math.ceil(userData.length / 10);

  const buscarDestino = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDestino(event.target.value);
    setPag(1);
  };

  const filtrarDestino = destino
    ? userData.filter((user) =>
        user.country.toLowerCase().includes(destino.toLowerCase())
      )
    : userData;

  const prevPag = () => {
    setPag(pag - 1);
  };

  const nextPag = () => {
    setPag(pag + 1);
  };

  return (
    <div className="painel">
      <Nav />
      <div className="painel-controle">
        <h1>Painel de viagens</h1>
        <small>Filtrar por país:</small>
        <div className="painel-header">
          <img src={search} alt="Lupa" width={20} />
          <input
            type="text"
            className="user-input"
            placeholder="Exemplo: 'Brasil'"
            onChange={buscarDestino}
          />
          <input
            type="submit"
            value="Procurar"
            className="classic-button hero-button"
          />
        </div>
        <div className="painel-tabela">
          <table>
            <thead>
              <tr>
                <th>Código</th>
                <th>Data</th>
                <th>País</th>
                <th>Aeronave</th>
                <th>Voô</th>
                <th>Poltrona</th>
              </tr>
            </thead>
            <tbody>
              {filtrarDestino.slice((pag - 1) * 10, pag * 10).map((user) => (
                <tr key={user.fligthNumber}>
                  <td>{user.id}</td>
                  <td>{format(user.date, "dd/MM/yyyy")}</td>
                  <td>{user.country}</td>
                  <td>{user.airplane}</td>
                  <td>{user.fligthNumber}</td>
                  <td>{user.flightSeat}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={3}>
                  Mostrando {destino.length ? pag : pag * 10} de{" "}
                  {destino.length ? pag : totalPag * 10}
                </td>
                <td colSpan={3} className="tabela-pags">
                  <button onClick={prevPag} disabled={pag == 1}>
                    <img
                      src={leftArrow}
                      alt="Seta para a esquerda"
                      width={20}
                    />
                  </button>
                  <button onClick={nextPag} disabled={pag == totalPag}>
                    <img
                      src={rightArrow}
                      alt="Seta para a direita"
                      width={20}
                    />
                  </button>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Panel;
