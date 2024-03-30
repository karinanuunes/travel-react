import "./hotels.css";
import Nav from "../../components/nav/nav";
import places from "../../places.json";
import { useState } from "react";

const Hotels = () => {
  const [paisSelecionado, setPais] = useState("");
  const [cidadeSelecionada, setCidade] = useState("");

  const handlePais = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const paisSelecionado = event.target.value;
    setPais(paisSelecionado);
  };

  const handleCidade = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const cidadeSelecionada = event.target.value;
    setCidade(cidadeSelecionada);
  };

  // console.log(cidadeSelecionada);

  const onSubmit = () => {
    event?.preventDefault();
    cidadeSelecionada &&
      places.forEach((place) => {
        if (place.cidades.includes(cidadeSelecionada)) {
          place.hoteis[cidadeSelecionada].map((hotel) => console.log(hotel));
        }
      });
  };

  return (
    <div className="hotel">
      <Nav />
      <div className="hoteis">
        <h1>Hotéis, pousadas e resorts</h1>
        <div className="area-hoteis">
          <form onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="Para onde você vai?"
              className="hotel-input"
            />
            <select
              name="pais"
              id="pais"
              className="hotel-input"
              onChange={handlePais}
            >
              <option value="pais">Selecione o país de destino</option>
              {places.map((place) => (
                <option key={place.id} value={place.pais}>
                  {place.pais}
                </option>
              ))}
            </select>
            <select
              name="cidade"
              id="cidade"
              className="hotel-input"
              onChange={handleCidade}
            >
              <option value="cidade">Selecione a cidade de destino</option>
              {paisSelecionado &&
                places
                  .find((place) => place.pais === paisSelecionado)
                  ?.cidades.map((cidade, index) => (
                    <option key={index} value={cidade}>
                      {cidade}
                    </option>
                  ))}
            </select>
            <button
              type="submit"
              // value="Buscar hotéis"
              className="classic-button hero-button"
              // onSubmit={onSubmit}
            >
              Buscar Hotéis
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hotels;
