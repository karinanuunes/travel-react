import Hero from "./components/hero/hero";
import "./App.css";
import "./components/button/button.css";
import Category from "./components/category/category";
import Destination from "./components/destination/destination";
import Book from "./components/book/book";
import Assessment from "./components/assessment/assessment";

function App() {
  return (
    <>
      <Hero />
      <Category />
      <Destination />
      <Book />
      <Assessment />
    </>
  );
}

export default App;
