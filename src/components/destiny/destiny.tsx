import "./destiny.css";

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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
        >
          <path d="M0 9l24-9-8.986 24-3.014-12z" />
        </svg>
        {days}
      </p>
    </div>
  );
};

export default Destiny;
