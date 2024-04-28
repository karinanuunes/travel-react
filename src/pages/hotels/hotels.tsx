import "./hotels.css";
import Nav from "../../components/nav/nav";
import places from "./places.json";
import { useState } from "react";
import Destiny from "../../components/destiny/destiny";
import fotoHotel from "../../../public/hotel.jpg";
import Footer from "../../components/footer/footer";

const Hotels = () => {
  const [paisSelecionado, setPais] = useState("");
  const [cidadeSelecionada, setCidade] = useState("");
  const [hoteisSelecionados, setHoteisSelecionados] = useState<string[]>([]);

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

    places.forEach((place) => {
      if (place.cidades.includes(cidadeSelecionada)) {
        const indexCidade = place.cidades.indexOf(cidadeSelecionada);
        const hoteisCidadeSelecionada = place.hoteis[indexCidade];
        setHoteisSelecionados(hoteisCidadeSelecionada);
      }
    });
  };

  return (
    <>
      <div className="hotel">
        <Nav />
        <div className="hoteis">
          <h1>Hotéis, pousadas e resorts</h1>
          <div className="area-hoteis">
            <form onSubmit={onSubmit} className="area-form">
              <select
                name="pais"
                id="pais"
                className="hotel-input"
                onChange={handlePais}
              >
                <option value="pais">País</option>
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
                <option value="cidade">Cidade</option>
                {paisSelecionado &&
                  places
                    .find((place) => place.pais === paisSelecionado)
                    ?.cidades.map((cidade, index) => (
                      <option key={index} value={cidade}>
                        {cidade}
                      </option>
                    ))}
              </select>
              <button type="submit" className="classic-button hero-button">
                Buscar Hotéis
              </button>
            </form>
            <div className="area-escolha-hotel">
              {hoteisSelecionados.length > 0 ? (
                hoteisSelecionados.map((hotel, index) => (
                  <Destiny
                    key={index}
                    src={fotoHotel}
                    alt={hotel}
                    title={hotel}
                    price={hotel.length > 17 ? "R$1800" : "R$2100"}
                    days={
                      hotel.length > 17
                        ? "8 dias de viagem"
                        : "6 dias de viagem"
                    }
                  />
                ))
              ) : (
                <h3>
                  Por favor, selecione o destino da sua viagem para encontrar os
                  melhores hotéis, pousadas e resorts disponíveis.
                </h3>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Hotels;
