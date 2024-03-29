import airfrance from "../../../public/logos/airfrance.jpg";
import azul from "../../../public/logos/azul.jpg";
import emirates from "../../../public/logos/emirates.png";
import japanairlines from "../../../public/logos/japanairlines.jpg";
import tapair from "../../../public/logos/tapair.png";
import unitedairlines from "../../../public/logos/unitedairlines.jpg";
import "./logos.css";

const Logos = () => {
  return (
    <div className="logos">
      <img src={airfrance} alt="Logo da companhia aérea Air France" />
      <img src={unitedairlines} alt="Logo da companhia aérea United Airlines" />
      <img src={emirates} alt="Logo da companhia aérea Emirates" />
      <img src={tapair} alt="Logo da companhia aérea Tap Air Portugal" />
      <img src={azul} alt="Logo da companhia aérea Azul" />
      <img src={japanairlines} alt="Logo da companhia aérea Japan Airlines" />
    </div>
  );
};

export default Logos;
