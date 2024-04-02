import "./assessment.css";
import homem from "../../../public/homem.jpg";

const Assessment = () => {
  return (
    <div className="assessment">
      <div className="assessment-content">
        <h4>AVALIAÇÕES</h4>
        <h1>O que as pessoas falam sobre nós</h1>
      </div>
      <div className="assessment-general">
        <button className="arrow-button">
          <svg
            width="50px"
            fillRule="evenodd"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m13.789 7.155c.141-.108.3-.157.456-.157.389 0 .755.306.755.749v8.501c0 .445-.367.75-.755.75-.157 0-.316-.05-.457-.159-1.554-1.203-4.199-3.252-5.498-4.258-.184-.142-.29-.36-.29-.592 0-.23.107-.449.291-.591zm-.289 7.563v-5.446l-3.522 2.719z"
              fillRule="nonzero"
            />
          </svg>
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
          <svg
            width="50px"
            fillRule="evenodd"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m10.211 7.155c-.141-.108-.3-.157-.456-.157-.389 0-.755.306-.755.749v8.501c0 .445.367.75.755.75.157 0 .316-.05.457-.159 1.554-1.203 4.199-3.252 5.498-4.258.184-.142.29-.36.29-.592 0-.23-.107-.449-.291-.591zm.289 7.563v-5.446l3.522 2.719z"
              fillRule="nonzero"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Assessment;
