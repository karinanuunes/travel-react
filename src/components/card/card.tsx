import "./card.css";

interface ICard {
  src: string;
  title: string;
  description: string;
}

const Card = ({ src, title, description }: ICard) => {
  return (
    <div className="card">
      <div className="card-img-space">
        <img src={src} alt="" className="card-img" />
      </div>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};

export default Card;
