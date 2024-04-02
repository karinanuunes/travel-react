import "./assessment.css";
import homem from "../../../public/homem.jpg";
import leftArrow from "../../assets/left-arrow.svg";
import rightArrow from "../../assets/right-arrow.svg";

const Assessment = () => {
  return (
    <div className="assessment">
      <div className="assessment-content">
        <h4>AVALIAÇÕES</h4>
        <h1>O que as pessoas falam sobre nós</h1>
      </div>
      <div className="assessment-general">
        <button className="arrow-button">
          <img src={leftArrow} alt="Seta para esquerda" />
        </button>
        <div className="assessment-each">
          <p>
            "Nunca experimentei tanta satisfação ao realizar uma viagem tão
            tranquila e sem complicações. A empresa tem sido incrivelmente
            prestativa, respondendo a todas as minhas dúvidas e oferecendo
            assistência sempre que necessário."
          </p>
          <div className="person">
            <div className="person-details">
              <h4>Miguel Pereira</h4>
              <p>Londes, Inglaterra</p>
            </div>
            <div className="person-photos">
              <img
                src={homem}
                alt="Rosto de um homem moreno rindo para foto"
                className="person-photo"
              />
            </div>
          </div>
        </div>
        <button className="arrow-button">
          <img src={rightArrow} alt="Right arrow" />
        </button>
      </div>
    </div>
  );
};

export default Assessment;
