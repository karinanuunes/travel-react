import "./category.css";
import Card from "../card/card";

const Category = () => {
  return (
    <section className="category">
      <h4>CATEGORIAS</h4>
      <h1>Oferecemos os melhores serviços!</h1>
      <div className="cards">
        <Card
          src="https://static.vecteezy.com/ti/vetor-gratis/p2/8976616-icone-simples-de-nuvem-e-sol-gratis-vetor.jpg"
          title="Descubra o clima"
          description="Previsões precisas para se preparar para as condições climáticas da área a sua escolha."
        />
        <Card
          src="https://static.vecteezy.com/ti/vetor-gratis/p2/7774558-icone-de-aviao-azul-com-fundo-branco-vetor.jpg"
          title="Melhores voôs"
          description="Embarquem tranquilos, garantimos uma viagem segura e confortável em cada momento do voô."
        />
        <Card
          src="https://static.vecteezy.com/ti/vetor-gratis/p2/2733580-microfone-instrumento-icone-design-gratis-vetor.jpg"
          title="Eventos locais"
          description="Descubra uma variedade de eventos locais, desde shows e exposições até workshops e atividades."
        />
        <Card
          src="https://static.vecteezy.com/ti/vetor-gratis/p1/3760796-gears-settings-setup-gratis-vetor.jpg"
          title="Customize"
          description="Transforme as suas necessidades com serviços de customização de alta qualidade."
        />
      </div>
    </section>
  );
};

export default Category;
