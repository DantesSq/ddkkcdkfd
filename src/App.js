import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import GroceryAisles from "./components/GroceryAisles";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <GroceryAisles />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
