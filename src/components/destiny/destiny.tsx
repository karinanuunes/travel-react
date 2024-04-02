import "./destiny.css";
import pointer from "../../assets/pointer.svg";

interface IDestiny {
  src: string;
  alt: string;
  title: string;
  price: string;
  days: string;
}

const Destiny = ({ src, alt, title, price, days }: IDestiny) => {
  return (
    <div className="card-destiny">
      <img src={src} alt={alt} className="card-destiny-img" />
      <div className="card-destiny-title">
        <h4>{title}</h4>
        <p>{price}</p>
      </div>
      <p>
        <img src={pointer} alt="Ponteiro de localização" />
        {days}
      </p>
    </div>
  );
};

export default Destiny;
