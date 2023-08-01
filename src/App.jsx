import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import "./App.css"
import Companies from "./components/Companies/Companies";
import Residencies from "./components/Residencies/Residencies";
import Value from "./components/Value/Value";
import Contact from "./components/Contact/Contact";
import Residmetal from "./components/Residmetal/Residmetal";
// import List from "./components/Residenmetal/List";




function App() {
  return (
    <div className="App">
        <div>
        <div className="white-gradient"/>    
      <Header/>
      <Hero/>
      </div>
      <Companies />
      <Residencies/>
      <Residmetal/>
      {/* <Addmovie/> */}
      {/* <List/> */}
      <Value/>
      <Contact/>
    </div>
  );
}

export default App
