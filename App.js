import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Residence from "./components/Residencies/Residence";
import Value from "./components/Value/Value";
import Companies from "./components/companies/Companies";
import Contact from "./components/contact/Contact";
import GetStarted from "./components/getStarted/GetStarted";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <Hero />
      </div>
        
          <Companies />
          <Residence />
          <Value />
          <Contact />
          <GetStarted />
          <Footer />
       
    </div>
  );
}

export default App;
