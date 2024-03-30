import Assessment from "../../components/assessment/assessment";
import Book from "../../components/book/book";
import Category from "../../components/category/category";
import Destination from "../../components/destination/destination";
import Footer from "../../components/footer/footer";
import Hero from "../../components/hero/hero";
import Logos from "../../components/logos/logos";
import Subscribe from "../../components/subscribe/subscribe";

const Home = () => {
  return (
    <>
      <Hero />
      <Category />
      <Destination />
      <Book />
      <Assessment />
      <Logos />
      <Subscribe />
      <Footer />
    </>
  );
};

export default Home;
